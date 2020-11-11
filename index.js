import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/studentRoutes'

const app = express();
const PORT = 2020;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/studentdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
routes(app);

app.get('/', (req, resp)=>{
    resp.send(`Student db server is running on port ${PORT}`)
})

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);