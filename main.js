function updateNumberInput(val) {
  document.getElementById('actual').value=val; 
  var number =   ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
  var ten =  ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
  var centen =  ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seicentos", "setecentos", "oitocentos", "novecentos"];
  input = parseInt(val);   

  if (input<20){
    retorno = number[val];
  }
  else if (input<100) {
    var temp = val.toString().split('');
    var primeiro_numero = temp[0];
    var segundo_numero = temp[1];
    retorno = ten[primeiro_numero-1];
    if (segundo_numero > 0){
      retorno += " e " + number[segundo_numero];
    }
  }
  else if (input==100){
    retorno = "cem"
  }
  else {
    var temp = val.toString().split('');
    var primeiro_numero = temp[0];
    var segundo_numero = temp[1];
    var terceiro_numero = temp[2];
    retorno = centen[primeiro_numero-1];
    if (segundo_numero == 1){
      retorno += " e " + number[parseInt(segundo_numero+terceiro_numero)];
    }
    else if (segundo_numero > 0){
      retorno += " e " + ten[segundo_numero-1];
    }
    if (terceiro_numero > 0 && segundo_numero != 1){
      retorno += " e " + number[terceiro_numero];
    }

  }
  document.getElementById('string').value=retorno; 

}


 

