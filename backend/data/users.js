const bcrypt = require('bcryptjs');
const users = [
    {
        name:'admin', 
        email:'admin@admin.com', 
        password:bcrypt.hashSync('123456',10),isAdmin:true
    },
    {
        name:'vanshika',
        email:'vanshika@xyz.com',
        password:bcrypt.hashSync('1234',10)
    },
    {
        name:'user',
        email:'user@user.com',
        password:bcrypt.hashSync('123456',10)}
];

module.exports = users;