  // Name- Sameeka Maroli
  // Task: Client side javascript that connects to the server

function addItem(){ // a function to add items to the mongo database on the server using POST requests
  var price = document.getElementById("cost").value;
  var status = document.getElementById("status").value;
  var title = document.getElementById("title").value;
  var desc = document.getElementById("description").value;
  var img = document.getElementById("image").value;
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

    // ensures the tetx dissapears after submitting
  req.then((response) => {
      console.log("Request was a Success");
      document.getElementById("title").value="";
      document.getElementById("description").value="";
      document.getElementById("image").value="";
      document.getElementById("cost").value="";
      document.getElementById("status").value="";
      document.getElementById("owner").value="";

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
  
  // ensures the text dissapears after submitting
  req.then((response) => {
    console.log("successful");
    document.getElementById("user").value="";
    document.getElementById("pwd").value="";
    }
)
}
