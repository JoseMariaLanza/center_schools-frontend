import Response from '../../validation/validators/protocols/Responses.json'

export const LoginService = async (email, password) => {

    try {
        const response = await fetch('http://localhost:8000/api/1.1/user/token/', {
            method: 'POST',
            headers: {
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