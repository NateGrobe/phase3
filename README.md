# Phase 3

### Requirements:
* nodejs ^10.19.0
* npm ^6.14.8
* MySQL

__Note:__ These commands are for __Linux__ (Ubuntu 20.04) but will likely  work on Windows and MacOSX.

__Note:__ Newer versions may work however these are the version the project was developed on.

### Installation Instructions:

Clone the repository:
```bash
git clone https://github.com/NateGrobe/phase3.git
```

Navigate to the __api__ directory and create a __.env__ file. Inside the .env file put the following the code.
```bash
PORT=5000
UN='root'   # note: the username should be your mysql username of choice
PASS='root' # note: the password should be whatever the password to your chosen username is
```
This file is necessary because it contains credentials that will be accessed by the api when connecting to MySQL.

Inside the __api__ directory, run the command:
```bash
npm install
```

Navigate to the __client__ directory and run the command:
```bash
npm install
```

Open MySQL Workbench and import the tables.sql file and the dummy-data.sql file. If you are using Windows you may need to remove the default character sets in the queries in tables.sql.

Alternatively, you can use the command line with the following commands:
```bash
mysql -u root -p < tables.sql
mysql -u root -p < dummy-data.sql
```

Once these steps are completed, open two terminal instances. In the first one, navigate to the api folder and run the command:
```bash
npm run dev
```

In the second terminal, navigate to the client directory and run the command:
```bash
npm start
```

The website should be working now and should automatically open to http://localhost:3000. The REST API can be found at http://localhost:5000

In order to sign into the website, the username can be anything (use your name) and the password is 'pass'.

### API Information:
All queries and routes are stored in the /api/src/controllers/ folder

The api is located at http://localhost:5000 and the following are the paths:

#### View Endpoints
The queries are in the viewRouter.js file.

##### View 1:
http://localhost:5000/api/patients

##### View 2:
http://localhost:5000/api/covid-patients

##### View 3:
http://localhost:5000/api/large-total-billing

##### View 4:
http://localhost:5000/api/doctors-patients

##### View 5:
http://localhost:5000/api/covid-risk

##### View 6:
http://localhost:5000/api/multi-patient-doctors

##### View 7:
http://localhost:5000/api/outstanding-balance

##### View 8:
http://localhost:5000/api/open-rooms

##### View 9:
http://localhost:5000/api/multi-patient-nurses

##### View 10:
http://localhost:5000/api/heart-risk

#### Additional Endpoints are as follows:
##### Patient Table:
http://localhost:5000/api/tables/patients

##### Doctors Table:
http://localhost:5000/api/tables/doctors

##### Nurses Table:
http://localhost:5000/api/tables/nurses

##### Patient Visit Table:
http://localhost:5000/api/tables/patient-visit

##### Covid Table
http://locahost:5000/api/covid

__Note:__ the covidRouter.js file contains the required queries using an external api for CRUD operations.
