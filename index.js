import express from 'express';

const app = express();
const PORT = 2020;

app.get('/', (req, resp)=>{
    resp.send(`Student db server is running on port ${PORT}`)
})

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);