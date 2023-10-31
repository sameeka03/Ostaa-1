  // Name- Sameeka Maroli
  // Task: Client side javascript that connects to the server

// a function to add items to the mongo database on the server using POST requests
function addItem(){
  var title = document.getElementById("title").value;
  var desc = document.getElementById("desc").value;
  var img = document.getElementById("image").value;
  var price = document.getElementById("cost").value;
  var status = document.getElementById("status").value;
  var owner = document.getElementById("owner").value;
  let path = "/add/item/" + owner;
  req = fetch(path ,{
    method: 'POST',
      body: JSON.stringify({
          title: title,
          description: desc,
          image: img,
          price: price,
          stat: status,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      }
    });
  req.then((response) => {
      console.log("Request was a Success");
      }
  )
}

// this function parses users data into JSON and adds it to the database using POST
function addUser(){
var user = document.getElementById("user").value;
var pwd = document.getElementById("pwd").value;
let path = "/add/user/";
req = fetch(path ,{
  method: 'POST',
    body: JSON.stringify({
    username: user,
    password: pwd,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    }
  });
  req.then((response) => {
    console.log("successful");
    document.getElementById("username").value="";
    document.getElementById("pwd").value="";
    }
)
}

// // this function helps parse and output the get requests
// function getGet(){
//   let path = "/get/";
//   req = fetch(path)
//       req.then((response) => {
//           return response.text();
//         })
//       .then((text) => {
//         // Output
//         document.getElementById("ostaa").innerHTML=text
//       })
// }