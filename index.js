const express = require("express");
const app = express();

//app.use(express.urlencoded());

app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");    
});


// app.get('/styles.css', (req, res) => {
//   res.sendFile(`${__dirname}/styles.css`)
// })


app.get('/styles.css', (inRequest, inResponse) => {
  inResponse.sendFile(`${__dirname}/styles.css`)
})

app.post('/register', (inRequest, inResponse) => {
  console.log('Data sent from client', inRequest.body);

  const responseObj = {
    title: inRequest.body.title,
    first_name: inRequest.body.first_name,
    last_name: inRequest.body.last_name,
    email_address: inRequest.body.email_address,
    phone_number: inRequest.body.phone_number,
    username: inRequest.body.username,
    age: inRequest.body.age
  };
  console.log('Response object', responseObj);
  inResponse.send(responseObj)
});

// app.post('/register', (req, res) => {
//     res.send(`<html>
//         <head>
//         <title style="border: 5px solid black;">Registration Successful</title>
//         <style>
//             th { background-color: #a0e0e0}
//             tr { border: 1px solid #a0a0a0}
//             tr { border: 1px solid #a0a0a0}
//         </style>
//         </head>
//         <body>
//             <h2>Thanks for registering</h2>
//             <table>
//             <tr>
//             <th>Title</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>Username</th>
//             <th>Age</th>
//             </tr>
//             <tr>
//              <td>${req.body.title}</td>
//              <td>${req.body.first_name}</td>
//              <td>${req.body.last_name}</td>
//              <td>${req.body.email_address}</td>
//              <td>${req.body.phone_number}</td>
//              <td>${req.body.username}</td>
//              <td>${req.body.age}</td>  <!-- Assuming age is a number -->
//              </tr>
//             </table>
//             </tr>
//             </body>
//         </html>`)
// });

app.listen(80, function () {
  console.log('Server is listening on port 80')
})



