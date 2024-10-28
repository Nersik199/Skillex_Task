import 'dotenv/config.js';
import './initTables.js';
import express from 'express';
//router
import generator from './routes/generate.js';

const { PORT } = process.env;
const app = express();

const port = PORT || 3000;

app.use(express.json());

app.use('/api', generator);

app.listen(port, () => {
	console.log('Server is running on port 3000');
});
