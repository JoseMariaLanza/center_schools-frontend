import Response from '../../validation/validators/protocols/Responses.json'

export const LoginService = async (email, password) => {

    try {
        const response = await fetch('http://localhost:8000/api/1.1/user/token/', {
            method: 'POST',
            headers: {
                // 'Authorization': 'Token 78cfd18007172af8282b7cb134c06917028ce6d6',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json()

        if (response.status === Response.HTTP_OK) {
            console.log(data)
        }
        return data
    } catch (error) {
        console.log(error)
    }
}