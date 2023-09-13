const numRipetizioni = 5;
const out = document.getElementById('msg-out');
let sum = 0;

for (let i = 0; i < numRipetizioni; i++){
  const tempNum = parseInt(prompt('inserire un numero'));
  sum += tempNum;
}

out.innerHTML = sum;