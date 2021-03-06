const { useState, useEffect } = require("react")

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {

        console.log('inside token')
        console.log(user)

        const email = user?.user?.email
        const currentUser = { email: email }

        if (email) {
            fetch(`https://secret-atoll-95984.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside use token', data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }

    }, [user])
    return [token]
}

export default useToken;