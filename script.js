function displayAnswer1() {
  if (document.getElementById('option-11').checked) {
    document.getElementById('result-11').style.color = 'limegreen'
    document.getElementById('result-11').innerHTML = 'Correct!'
    proceed()
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

function displayAnswer2() {
  if (document.getElementById('option-11').checked) {
    document.getElementById('result-11').style.color = 'red'
    document.getElementById('result-11').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('result-12').style.color = 'limegreen'
    document.getElementById('result-12').innerHTML = 'Correct!'
    proceed()
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

function displayAnswer3() {
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
    proceed()
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('result-14').style.color = 'red'
    document.getElementById('result-14').innerHTML = 'Incorrect!'
  }
}

function displayAnswer4() {
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
    proceed()
  }
}


//this is the function that will be called on a correct answer selection. It will just display a link at the bottom of the screen. You can use this link to take her to the next URL of the next question or something
function proceed() {
  window.alert('some new address goes here');
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
  } else if (codeValue == 0306) { 
      window.location.replace("./pages/temple.html"); 
  } else {
      window.alert("wrong code: try again");
  }
}