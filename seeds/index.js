const sequelize = require('../Config/connection');
const seedUser= require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });



  await seedUser();

  process.exit(0);
};

seedAll();
