{
  "name": "tech-blog",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "seed": "node seeds/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/joemogy/tech-blog.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/joemogy/tech-blog/issues"
  },
  "homepage": "https://github.com/joemogy/tech-blog#readme",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "connect-session-sequelize": "^7.1.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-handlebars": "^6.0.6",
    "express-session": "^1.17.3",
    "mysql2": "^2.3.3",
    "sequelize": "^6.26.0"
  }
}
