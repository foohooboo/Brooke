const addresses = [
  {name: "truck", address: "Look at the front bumper of your car."},
  {name: "temple", address: "11022 s 4000 w, South Jordan"},
  {name: "oval", address: "5662 s Cougar Lane, Kearns"},
  {name: "bowling", address: "7141 s Woodgreen rd, West Jordan"},
  {name: "copperton", address: "8700 w 10305 s, Copperton"},
  {name: "pancakes", address: "Look at your stove"},
  {name: "onions", address: "Your chariot awaits!"},
]

// const simpleAddresses = {
//   truck: "Look at the front bumper of your car.",
//   temple: "11022 s 4000 w, South Jordan",
//   oval: "5662 s Cougar Lane, Kearns",
//   bowling: "",
//   copperton: "8700 w 10305 s, Copperton",
//   pancakes: "Look at your stove",
// }

function displayAnswer1(pageName) {
  if (document.getElementById('option-11').checked) {
    document.getElementById('result-11').style.color = 'limegreen'
    document.getElementById('result-11').innerHTML = 'Correct!'
    proceed(pageName)
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('result-12').style.color = 'red'
    document.getElementById('result-12').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-13').checked) {
    document.getElementById('result-13').style.color = 'red'
    document.getElementById('result-13').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('result-14').style.color = 'red'
    document.getElementById('result-14').innerHTML = 'Incorrect!'
  }
}

function displayAnswer2(pageName) {
  if (document.getElementById('option-11').checked) {
    document.getElementById('result-11').style.color = 'red'
    document.getElementById('result-11').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('result-12').style.color = 'limegreen'
    document.getElementById('result-12').innerHTML = 'Correct!'
    proceed(pageName)
  }
  if (document.getElementById('option-13').checked) {
    document.getElementById('result-13').style.color = 'red'
    document.getElementById('result-13').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('result-14').style.color = 'red'
    document.getElementById('result-14').innerHTML = 'Incorrect!'
  }
}

function displayAnswer3(pageName) {
  if (document.getElementById('option-11').checked) {
    document.getElementById('result-11').style.color = 'red'
    document.getElementById('result-11').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('result-12').style.color = 'red'
    document.getElementById('result-12').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-13').checked) {
    document.getElementById('result-13').style.color = 'limegreen'
    document.getElementById('result-13').innerHTML = 'Correct!'
    proceed(pageName)
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('result-14').style.color = 'red'
    document.getElementById('result-14').innerHTML = 'Incorrect!'
  }
}

function displayAnswer4(pageName) {
  if (document.getElementById('option-11').checked) {
    document.getElementById('result-11').style.color = 'red'
    document.getElementById('result-11').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('result-12').style.color = 'red'
    document.getElementById('result-12').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-13').checked) {
    document.getElementById('result-13').style.color = 'red'
    document.getElementById('result-13').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('result-14').style.color = 'limegreen'
    document.getElementById('result-14').innerHTML = 'Correct!'
    proceed(pageName)
  }
}


//this is the function that will be called on a correct answer selection. It will just display a link at the bottom of the screen. You can use this link to take her to the next URL of the next question or something
function proceed(pageName) {
  let addr = addresses.find(add => add.name === pageName)
  window.alert(addr.address);
}

function checkCode() {
  var codeValue = document.getElementById('codeInput').value;
  if (codeValue == 7567) { 
      window.location.replace("./pages/truck.html"); 
  } else if (codeValue == 1409) {
      window.location.replace("./pages/oval.html"); 
  } else if (codeValue == 5555) { 
      window.location.replace("./pages/copperton.html");  
  } else if (codeValue == 2224) { 
      window.location.replace("./pages/bowling.html"); 
  } else if (codeValue == 1234) { 
      window.location.replace("./pages/temple.html"); 
  } else if (codeValue == 0827) {   
    window.location.replace("./pages/pancakes.html");
  } else if (codeValue == 1316) {   
      window.location.replace("./pages/onions.html");  
  } else {
      window.alert("wrong code: try again");
  }
}