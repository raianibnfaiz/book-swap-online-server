const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('book swap online is running!')
})
app.listen(port, () => {
    console.log(`book swap online App is listening on Port ${port}`);
})

