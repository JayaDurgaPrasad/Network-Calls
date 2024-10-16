const port =3000
const express = require('express');
const app = express();

app.get('/',(request, response) =>{

    response.send('Hello World');
    // console.log(request);
});


app.get('/date',(request, response) =>{

   let date = new Date();
   response.send(`Today date is ${date}`);
});


app.get('/page', (request,response) =>{

    response.sendFile('./index.html', {root: __dirname});
});

app.listen(port,()=>{
    console.log(`Port is Running on http://localhost:${port}`)
});
