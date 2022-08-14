function calcularMedia() {
  var nota1 = document.getElementById("nota1");
  var nota1Valor= nota1.value;
  var nota1Float = parseFloat(nota1Valor);

  var nota2 = document.getElementById("nota2");
  var nota2Valor = nota2.value;
  var nota2Float = parseFloat(nota2Valor);

  var nota3 = document.getElementById("nota3");
  var nota3Valor = nota3.value;
  var nota3Float = parseFloat(nota3Valor);
  
  var nota4 = document.getElementById("nota4");
  var nota4Valor = nota4.value;
  var nota4Float = parseFloat(nota4Valor);
  
  var nota5 = document.getElementById("nota5");
  var nota5Valor = nota5.value;
  var nota5Float = parseFloat(nota5Valor);
  
  var somaNotas =
    nota1Float + nota2Float + nota3Float + nota4Float + nota5Float;

  var resultado = document.getElementById("calculoMedia");
  var calculoMedia = somaNotas / 5;
  resultado.innerHTML = calculoMedia;

  if (calculoMedia == 10) {
    resultado.innerHTML =
      "Parabéns! Você foi aprovado com nota máxima! Sua média final foi " +
      calculoMedia;
  }
  
  if (calculoMedia >= 7 && calculoMedia < 10) {
    resultado.innerHTML =
      "Parabéns! Você foi aprovado! Sua média final foi de " +
      calculoMedia.toFixed(1);
  }
  
  if (calculoMedia < 7) {
    resultado.innerHTML =
      "Infelizmente você foi reprovado. A sua média final foi de " +
      calculoMedia.toFixed(1);
  }
}
