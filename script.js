//Variáveis Let
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";//alfabeto para contagem
let textoSaida = document.getElementById('textoSaida'); // campo de texto de saida
let incremento = document.getElementById('posicaoNumCesar'); // qual o numero de incremento dentro da posicao
let posicao = document.querySelector('.posicao'); // posicao da numeracao de cesar
let opcaoDcod = document.getElementById('opcaoDcod'); //opcoes de qual codificacao ou decodificacao
let seletor = document.querySelectorAll('.codigo');//codigo para utilizacao da decodificacao selecao
let btncodificar = document.getElementById('codificar');//botao para codificar
let btndecodificar = document.getElementById('decodificar');//botao para decodificar
let submit = document.getElementById('submit');//botao para aplicar usos
let textoEntrada = document.getElementById('textoEntrada');// campo de texto de entrada


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
        let mensagem = document.querySelector('#textoEntrada').value;
        let codificado = btoa(mensagem);
        return codificado;
}
    function decBase64(){
        let mensagem = document.querySelector('#textoEntrada').value;
        let decodificado = atob(mensagem);
        return decodificado;
}

//Função de Cifra de Cesar
function codCesar() {
    let elementoDaMensagem = textoEntrada.value
    let mensagemMinuscula = elementoDaMensagem.toLowerCase();
    let transformarNumero = (Number(incremento.value) % 26);
    let mensagemCodificada = '';
  
    for(let cont = 0; cont < mensagemMinuscula.length; cont++){
       for(let c = 0; c < alfabeto.length; c++){
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
      let elementoDaMensagem = textoEntrada.value;
      let mensagemMinuscula = elementoDaMensagem.toLowerCase()
      let transformarNumero = (Number(incremento.value) % 26);
      let mensagemCodificada = '';
    
      for(let cont = 0; cont < mensagemMinuscula.length; cont++){
         for(let c = alfabeto.length - 1; c >= 0; c--){
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

