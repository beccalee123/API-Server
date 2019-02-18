![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## API-Server-DB

### Author: Becca Lee

### Links and Resources

* [repo](https://github.com/beccalee123/API-Server-DB)
* [url](https://db-api-bl.herokuapp.com/)

### Modules
* Connection to server established from `index.js`.
* New users are created with generated tokens on `router.js`.
* Returning users sign with `router.js`.
* Routes to `model` files are established in `v1.js`.
* New models to be created should be defined in `models` folder with accompanying `schema`.  Both files should be exported.  
* New models are created in `model-finder.js`.

### Setup
#### `.env` requirements
* `PORT` - Defined in ENV.
* `MONGODB_URI` - Defined in ENV.

#### Running the app
- To start the server locally, enter `npm start`
- Otherwise, you can open the URL above
- To work with the data, open a terminal window and be sure you have [httPIE](https://httpie.org/) installed. Commands listed below assume you'll be working with the deployed API Server. If you'd prefer to work with the data running locally, replace `https://db-api-bl.herokuapp.com` with `:3000`
- To add a record to the teams route, enter the following command: `echo '{"name":"<Your name choice>"}' | http POST https://db-api-bl.herokuapp.com/api/v1/teams`
- To get all records from the teams route, enter the following command: `http GET https://db-api-bl.herokuapp.com/api/v1/teams`
- To get a specific record from the teams route, enter the following command: `http GET https://db-api-bl.herokuapp.com/api/v1/teams/<_id of the record you'd like to see>`
- To update a record on the teams route, enter the following command: `echo '{"name":"<Your updated name choice>"}' | http PUT https://db-api-bl.herokuapp.com/api/v1/teams/<_id of the record you're updating>`
- To delete a record on the teams route, enter the following command: `http DELETE https://db-api-bl.herokuapp.com/api/v1/teams/<_id of the record you're deleting>`
- - To add a record to the players route, enter the following command: `echo '{"name":"<Your name choice>","position":"<Your choice of 'P','C','1B','2B','3B','SS','LF','RF','CF']>","throws":"<Your choice of 'R','L'>","bats":"<Your choice of 'R','L'>","team":"Your choice of team name"}' | http POST https://db-api-bl.herokuapp.com/api/v1/players`
- To get all records from the players route, enter the following command: `http GET https://db-api-bl.herokuapp.com/api/v1/players`
- To get a specific record from the players route, enter the following command: `http GET https://db-api-bl.herokuapp.com/api/v1/players/<_id of the record you'd like to see>`
- To update a record on the players route, enter the following command: `echo '{"name":"<Your updated name choice>","position":"<Your upidated choice of 'P','C','1B','2B','3B','SS','LF','RF','CF']>","throws":"<Your updated choice of 'R','L'>","bats":"<Your updated choice of 'R','L'>","team":"Your updated choice of team name"}' | http PUT https://db-api-bl.herokuapp.com/api/v1/players/<_id of the record you're updating>`
- To delete a record on the players route, enter the following command: `http DELETE https://db-api-bl.herokuapp.com/api/v1/players/<_id of the record you're deleting>`
