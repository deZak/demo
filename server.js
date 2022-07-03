const express = require('express');
const app = express();

app.listen(4444, ()=>{

  console.log(`listening on port 44444 ${process.env["NODE_ENV"]}` )});

app.get('/', (req, res) => {
  
  res.send(`working fine as well on ${process.env["NODE_ENV"]}`)})
