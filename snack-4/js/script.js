const numIter = 6;
const dispari = [];
const out = document.getElementById('msg-out');

for(let i = 0; i < numIter; i++){
  const numTemp = parseInt(prompt("inserisci un numero"));
  if(numTemp % 2 != 0){
    dispari.push(numTemp);
  }
}

console.log(dispari);
out.innerHTML = dispari;