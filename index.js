const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");    
});

app.get('/styles.css', (inRequest, inResponse) => {
  inResponse.sendFile(`${__dirname}/styles.css`)
});

app.post('/register', (inRequest, inResponse) => {
  const responseObj = {
    title: inRequest.body.title,
    first_name: inRequest.body.first_name,
    last_name: inRequest.body.last_name,
    email_address: inRequest.body.email_address,
    phone_number: inRequest.body.phone_number,
    username: inRequest.body.username,
    age: inRequest.body.age
  };
  inResponse.send(responseObj)
});

app.listen(80, function () {
  console.log('Server is listening on port 80')
})



