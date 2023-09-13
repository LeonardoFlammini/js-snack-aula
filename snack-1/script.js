const numA = parseInt(prompt('Inserire un valore numerico'));
const numB = parseInt(prompt('Inserire un altro valore numerico'));
const msgOut = document.getElementById('msg-out');
let message;

if ( numA > numB){
  message = "Il numero A: " + numA + " è più grande di B:" + numB;
}else if (numA < numB) {
  message = "Il numero A: " + numA + " è più piccolo di B:" + numB;
}else {
  message = "Il numero A: " + numA + " è uguale al B:" + numB;
}

msgOut.innerHTML = message;

console.log(numA, numB, message);