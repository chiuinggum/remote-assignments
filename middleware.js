const { connectToDatabase, toGMT } = require('./utils');

const checkContentType = (req, res, next) => {
    if (req.get('Content-Type') !== 'application/json') {
        return res.status(400).json({ error: 'Invalid Content-Type header. Only accept application/json.' });
    }
    next();
};

const checkRequestDate = (req, res, next) => {
    const requestDate = req.get('Request-Date');
    if (!requestDate) {
        return res.status(400).json({ error: 'Request-Date header not exist.' });
    }
    req.requestDate = requestDate;
    next();
};

const checkRequiredBody = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields in the request body.' });
    }
    next();
};

const checkValidData = (req, res, next) => {
    const { email, password } = req.body;

    const passwordRegex = [/[A-Z]/, /[a-z]/, /[0-9]/, /[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/|]/];
    const typesCount = passwordRegex.filter(regex => regex.test(password)).length;
    if (typesCount < 3) {
        return res.status(400).json({ error: 'Password not strong enough' });
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email not in the right form' });
    }
    next();
};

const checkEmailExist = async (req, res, next) => {
    const { email } = req.body;
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
        if(rows.length > 0) {
            return res.status(409).json({ error:'Email Already Exists' });
        }
        next();
    } catch(err) {
        return res.status(400).json({ error:'Error querying the database' });
    }
};

const checkIfUserExists = async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [req.params.id]);
        if(rows.length === 0) {
            return res.status(403).json({ error: 'User Not Existing' });
        }

        const GMTDate = toGMT(rows[0].created_at);
        req.name = rows[0].name;
        req.email = rows[0].email;
        req.date = GMTDate;
        next();
    } catch(err) {
        return res.status(400).json({ error: 'Error querying the database' });
    }
};

module.exports = {
    checkContentType,
    checkRequestDate,
    checkRequiredBody,
    checkValidData,
    checkEmailExist,
    checkIfUserExists
};