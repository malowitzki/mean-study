const app = require('express')();
const db = require('monk')('mongodb://mongo:27017');

db.then(() => {
	console.log('MEAN study connected to mongodb')
});

app.listen(3000, () => {
	console.log('MEAN study listening on port 3000');
});