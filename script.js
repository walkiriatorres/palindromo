  var palavraTestada = document.getElementById('palavra');
  
function isPalindromo(){
  var arrayString1 = palavraTestada.value.split(''); 
  var string1 = arrayString1.toString();
  
  var arrayString2 = arrayString1.reverse();
  var string2 = arrayString2.toString();
  
  if (string1 == '') {
    alert("Escreva uma palavra");
  } else if (string1 !== string2){
    alert("Não é um palíndromo");
  } else{
    alert("É um palíndromo");
  }
}
  