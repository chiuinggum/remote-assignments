const handleUserSignUp = async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const requestBody = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Request-Date': new Date().toUTCString()
            },
        });

        if(response.status === 200) {
            const responseBody = await response.json();
            const userData = responseBody.data.user;

            const alertMessage = JSON.stringify(userData);
            alert(alertMessage);
        } else {
            const errorBody = await response.json();
            alert(errorBody.error);
        }
    } catch(err) {
        console.error('Network error:', err);
    }
    
    
}