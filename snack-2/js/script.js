const w1 = prompt('Inserisci una parola');
const w2 = prompt('inserisci un\' altra parola');
const out = document.getElementById('msg-out');
let message;

if(w1.length > w2.length){
  message = 'la parola più lunga è :' + w1;
}else if (w1.length < w2.length){
  message = 'la parola più lunga è :' + w2;
}else{
  message = 'le parole sono lunghe uguali';
}

out.innerHTML = message;