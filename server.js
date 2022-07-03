const express = require('express');
const app = express();

app.listen(4444, ()=>console.log('listening on port 44444' ));

app.get('/', (req, res) => res.send('working'))
