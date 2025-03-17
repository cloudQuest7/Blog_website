import express from "express";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { userModel } from './models/user.js';
import { dbConnection } from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use((req, res, next) => {
    console.log("this is a middleware");
    return next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/get-form-data',(req,res) => {
    console.log(req.body);
    res.send('data received');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});