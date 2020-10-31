# NextLevelWeek #2 - Proffy

Project developed for the Next Level Week #2 event by <a href="https://rocketseat.com.br/">Rocketseat</a>.

##  Overview

<p align="center">
  <img src="https://github.com/arturo32/NextLevelWeek2/blob/master/images/NLW2-usage.gif">
</p>

Proffy is a site that helps students and teachers connect with each other. It is made in two parts: the back-end, an restful API made with NodeJS, Express (for HTTP requests) and Knex (for database queries), and the front-end, made with ReactJS. MySQL was used instead of SQLite for the database management.

## Technologies used

This project was developed with the following technologies:

### Web
- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://github.com/ReactTraining/react-router)

### API
- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [KnexJS](http://knexjs.org/)
- [MySQL](https://www.mysql.com/)


## How to run

Type the following commands in your terminal:

```bash
# Clone the repository
$ git clone https://github.com/arturo32/NextLevelWeek2.git
# Enter the repository
$ cd NLW2
```

### API

In the files NextLevelWeek2/server/src/database/connection.ts AND NextLevelWeek2/server/knexfile.ts make sure that "user" and "password" are set accordingly with your user and password of MySQL.

Next, create a database named "proffy" in MySQL. If you use MySQL in the terminal, open another terminal and type:

```bash
# Enter MySQL
mysql -u root -p
# Create database
CREATE DATABASE proffy;
```


Then, back to your first terminal, type the following commands:

```bash
# Enter the server folder
$ cd server
# Install the dependencies (using npm or yarn)
$ npm install || yarn install 
# Fill the proffy database with tables using knex (with npm or yarn)
npm run knex:migrate || yarn knex:migrate
# Run the app (using npm or yarn)
$ npm start || yarn dev 
```


If you find problems with the npm `run knex:migrate` (ER_NOT_SUPPORTED_AUTH_MODE), then you have to type the following commands in another terminal:
```bash
# Enter MySQL
mysql -u root -p
# Create database
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
Where password will be your current password (or new password!) for root access of MySQL.

Access API through http://localhost:3333/


### Web

```bash
# Enter the web folder
$ cd web
# Install the dependencies (using npm or yarn)
$ npm install || yarn install 
# Run the app (using npm or yarn)
$ npm start || yarn start 
```

Access in your browser through http://localhost:3000/ 