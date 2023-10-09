const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const { connectToDatabase, toFormattedDate } = require('./utils');
const { checkContentType, checkRequestDate, checkRequiredBody, checkValidData, checkEmailExist, checkIfUserExists } = require('./middleware');

const app = express();

app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
    res.send('OK');
});

app.get('/users/:id', [checkContentType, checkRequestDate, checkIfUserExists], (req, res) => {
    res.status(200).json({
        data: {
            user: {
                id: req.params.id,
                name: req.name,
                email: req.email
            },
            "request-date": req.requestDate
        }
    });
});

app.post('/users', [checkContentType, checkRequestDate, checkRequiredBody, checkValidData, checkEmailExist], async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const encryptedPwd = await bcrypt.hash(password, 10);
        const dbDate = toFormattedDate(req.requestDate);
        const data = {
            name: name,
            email: email,
            password: encryptedPwd,
            created_at: dbDate
        };
        
        const db = await connectToDatabase();
        const [rows] = await db.query('INSERT INTO user SET ?', data);
        res.status(200).json({
            data: {
                user: {
                    id: rows.insertId,
                    name: name,
                    email: email
                },
                "request-date": req.requestDate
            }
        });
    } catch(err) {
        return res.status(500).json({ error: 'Error inserting data.' });
    }
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});