
const {User} = require('../Models');

const userData = [
    {
        user_name: 'Joemogy3',
        password: '123123',
    },
    {
        user_name: 'Joemogy2',
        password: '123123',
    },
    {
        user_name: 'Joemogy',
        password: '123123',
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
