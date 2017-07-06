const app = require('express')();
const bodyParser = require('body-parser');
const db = require('monk')('mongodb://mongo:27017');

const sprints = db.get('sprints');
// const tickets = db.get('tickets');

app.use(bodyParser.json());

db.then(() => {
	console.log('MEAN study connected to mongodb')
});

const port = process.env.port || 3000;

app.listen(port, () => {
	console.log('MEAN study listening on port 3000');
});

// GET get all sprints
// TODO: support filter params
app.get('/sprint', (req, res) => {
	sprints.find({}).then(docs => {
		res.send(docs);
	});
});

// GET get a sprint
app.get('/sprint/:_id', (req, res) => {
	sprints.findOne(req.params).then(doc => {
		res.send(doc);
	});
});

// POST create a new sprint
app.post('/sprint', (req, res) => {
	sprints.insert(req.body).then(doc => {
		res.send(doc);
	});
});

// PUT update an existing sprint
app.put('/sprint/:_id', (req, res) => {
	sprints.findOneAndUpdate(req.params, req.body).then(doc => {
		res.send(doc);
	});
});

// DELETE delete an existing sprint
app.delete('/sprint/:_id', (req, res) => {
	sprints.findOneAndDelete(req.params).then(doc => {
		res.send(doc);
	});
});