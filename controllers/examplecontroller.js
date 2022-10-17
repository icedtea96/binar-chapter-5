// const path = require('path');

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../frontpage.html"))
    },
    
    rps: (req, res) => {
        return res.send('This is info page')
    },
    
    login: (req, res) => {
        const dummyUser = {
            "email" : "sample@dummy.com",
            "password" : "dummy123"
        }
        console.log(req.body)
    }
}