function updateNumberInput(val) {
  document.getElementById('actual').value=val; 
  var number =   ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
  var ten =  ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
  var hundred =  ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seicentos", "setecentos", "oitocentos", "novecentos"];
  input = parseInt(val);   

  if (input<20){
    resp = number[val];
  }
  else if (input<100) {
    var temp = val.toString().split('');
    var fisrt = temp[0];
    var second = temp[1];
    resp = ten[fisrt-1];
    if (second > 0){
      resp += " e " + number[second];
    }
  }
  else if (input==100){
    resp = "cem"
  }
  else {
    var temp = val.toString().split('');
    var fisrt = temp[0];
    var second = temp[1];
    var third = temp[2];
    resp = hundred[fisrt-1];
    if (second == 1){
      resp += " e " + number[parseInt(second+third)];
    }
    else if (second > 0){
      resp += " e " + ten[second-1];
    }
    if (third > 0 && second != 1){
      resp += " e " + number[third];
    }

  }
  document.getElementById('string').value=resp; 

}


 

