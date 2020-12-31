//here is an example function to display the correct results. You can change which answer is correct by simply changing what the output of each selection is. This is for question 1. You will need to copy this funcion for each additional question. I know....messy. But I copied it from the internets and didnt have time to make it actually good.

function displayAnswer1() {
  if (document.getElementById('option-11').checked) {
    document.getElementById('block-11').style.border = '3px solid limegreen'
    document.getElementById('result-11').style.color = 'limegreen'
    document.getElementById('result-11').innerHTML = 'Correct!'
    proceed()
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('block-12').style.border = '3px solid red'
    document.getElementById('result-12').style.color = 'red'
    document.getElementById('result-12').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-13').checked) {
    document.getElementById('block-13').style.border = '3px solid red'
    document.getElementById('result-13').style.color = 'red'
    document.getElementById('result-13').innerHTML = 'Incorrect!'
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('block-14').style.border = '3px solid red'
    document.getElementById('result-14').style.color = 'red'
    document.getElementById('result-14').innerHTML = 'Incorrect!'
  }
}


//this is the function that will be called on a correct answer selection. It will just display a link at the bottom of the screen. You can use this link to take her to the next URL of the next question or something
function proceed() {
  window.alert('some new address');
}

function checkCode() {
  var codeValue = document.getElementById('codeInput').value;
  if (codeValue == 1111) {
      window.location.replace("http://www.w3schools.com"); //TODO: change this URL to the correct html page
  } else {
      window.alert("wrong code: try again");
  }
}