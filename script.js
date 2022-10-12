//Variáveis
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";//alfabeto para contagem
var textoEntrada = document.getElementById('textoEntrada');// campo de texto de entrada
var textoSaida = document.getElementById('textoSaida'); // campo de texto de saida
var incremento = document.getElementById('posicaoNumCesar'); // qual o numero de incremento dentro da posicao
var posicao = document.querySelector('.posicao'); // posicao da numeracao de cesar
var opcaoDcod = document.getElementById('opcaoDcod'); //opcoes de qual codificacao ou decodificacao
var seletor = document.querySelectorAll('.codigo');//codigo para utilizacao da decodificacao selecao
var btncodificar = document.getElementById('codificar');//botao para codificar
var btndecodificar = document.getElementById('decodificar');//botao para decodificar
var submit = document.getElementById('submit');//botao para aplicar usos


opcaoDcod.addEventListener('change', function() { //fucao para aparecer o incremento da cifra, fonte internet
    if(opcaoDcod.value == 'cCesar') {
        posicao.style.display = 'flex';
    } else {
        posicao.style.display = 'none';
    }
})

btncodificar.addEventListener('click', function(){ // Evento onde muda o botao para codificar ou decodificar de acordo com a opçao selecionada
        submit.style.display = 'block';
        submit.value = 'Codificar!';
})

btndecodificar.addEventListener('click', function(){ // Evento onde muda o botao para codificar ou decodificar de acordo com a opçao selecionada
        submit.style.display = 'block';
        submit.value = 'Decodificar!';
})

    
//Função de Base64
    function codBase64() {
        var mensagem = document.querySelector('#textoEntrada').value;
        var codificado = btoa(mensagem);
        return codificado;
}
    function decBase64(){
        var mensagem = document.querySelector('#textoEntrada').value;
        var decodificado = atob(mensagem);
        return decodificado;
}

//Função de Cifra de Cesar
function codCesar() {
    var elementoDaMensagem = textoEntrada.value
    var mensagemMinuscula = elementoDaMensagem.toLowerCase();
    var transformarNumero = (Number(incremento.value) % 26);
    var mensagemCodificada = '';
  
    for(var cont = 0; cont < mensagemMinuscula.length; cont++){
       for(var c = 0; c < alfabeto.length; c++){
         if (mensagemMinuscula[cont] == alfabeto[c]){
           mensagemCodificada += alfabeto [c + transformarNumero]
           break;
       } else if (mensagemMinuscula[cont] == ' ') {
           mensagemCodificada += ' ';
           break;
       }
      }   
  }
  return mensagemCodificada
  }
  //decrip Funcao Cifra de Cesar
      function decCesar() {
      var elementoDaMensagem = textoEntrada.value;
      var mensagemMinuscula = elementoDaMensagem.toLowerCase()
      var transformarNumero = (Number(incremento.value) % 26);
      var mensagemCodificada = '';
    
      for(var cont = 0; cont < mensagemMinuscula.length; cont++){
         for(var c = alfabeto.length - 1; c >= 0; c--){
           if(mensagemMinuscula[cont] == alfabeto[c]){
             mensagemCodificada += alfabeto [c - transformarNumero]
             break;
         } else if (mensagemMinuscula[cont] == ' ') {
             mensagemCodificada += ' ';
             break;
         }
        }       
    }
    return mensagemCodificada
  }
//Evento para checar qual estar em uso e receber texto de saida de acordo com a cifra selecionada e caso nenhum dar erro
      submit.addEventListener('click', function(e){
        e.preventDefault();
        if(btncodificar.checked && opcaoDcod.value === "base"){
            textoSaida.innerText = codBase64();

        } else if(btndecodificar.checked && opcaoDcod.value === "base"){
            textoSaida.innerText = decBase64();

        } else if(btncodificar.checked && opcaoDcod.value === "cCesar"){
            textoSaida.innerText = codCesar();

        } else if(btndecodificar.checked && opcaoDcod.value === "cCesar"){
            textoSaida.innerText = decCesar();

        } else{
            textoSaida.innerText = "Erro Complete os Campos"
        }
    });


