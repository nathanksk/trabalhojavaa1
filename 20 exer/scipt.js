function verificar() {
    const numeroInput = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
  
    // Verifica se o valor inserido é um número
    const valor = numeroInput.value.trim();
    const numero = parseInt(valor, 10);
  
    if (valor === '' || isNaN(numero)) {
      resultado.textContent = 'Por favor, insira um número válido.';
      resultado.style.color = 'red';
      return;
    }
  
    // Verifica se é par ou ímpar
    if (numero % 2 === 0) {
      resultado.textContent = `${numero} é um número PAR.`;
      resultado.style.color = 'green';
    } else {
      resultado.textContent = `${numero} é um número ÍMPAR.`;
      resultado.style.color = 'blue';
    }
  }
  
  function contar() {
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;
    const passo = document.getElementById('passo').value;
    const resultado = document.getElementById('resultado');
  
    resultado.innerHTML = '';
  
    let i = Number(inicio);
    let f = Number(fim);
    let p = Number(passo);
  
    if (inicio === '' || fim === '' || passo === '') {
      resultado.innerHTML = 'Por favor, preencha todos os campos.';
      resultado.style.color = 'red';
      return;
    }
  
    if (p <= 0) {
      resultado.innerHTML = 'Passo inválido. Considerando PASSO = 1.';
      p = 1;
    }
  
    let contagem = '';
    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        contagem += `👉 ${c} `;
      }
    } else {
      // Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        contagem += `👉 ${c} `;
      }
    }
  
    resultado.style.color = 'black';
    resultado.innerHTML = contagem + '🏁';
  }
  
  function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = 'Por favor, preencha os campos corretamente.';
      resultado.style.color = 'red';
      return;
    }
  
    const imc = peso / (altura * altura);
    const imcArredondado = imc.toFixed(2);
    let mensagem = '';
  
    if (imc < 18.5) {
      mensagem = 'Abaixo do peso';
    } else if (imc < 24.9) {
      mensagem = 'Peso normal';
    } else if (imc < 29.9) {
      mensagem = 'Sobrepeso';
    } else if (imc < 34.9) {
      mensagem = 'Obesidade grau 1';
    } else if (imc < 39.9) {
      mensagem = 'Obesidade grau 2';
    } else {
      mensagem = 'Obesidade grau 3 (mórbida)';
    }
  
    resultado.style.color = 'black';
    resultado.innerHTML = `Seu IMC é <strong>${imcArredondado}</strong> - ${mensagem}`;
  }
  
  function calcular() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');
  
    if (isNaN(valor1) || isNaN(valor2)) {
      resultado.textContent = 'Por favor, insira dois números válidos.';
      resultado.style.color = 'red';
      return;
    }
  
    let res;
  
    switch (operacao) {
      case 'soma':
        res = valor1 + valor2;
        break;
      case 'subtracao':
        res = valor1 - valor2;
        break;
      case 'multiplicacao':
        res = valor1 * valor2;
        break;
      case 'divisao':
        if (valor2 === 0) {
          resultado.textContent = 'Erro: divisão por zero.';
          resultado.style.color = 'red';
          return;
        }
        res = valor1 / valor2;
        break;
      default:
        resultado.textContent = 'Operação inválida.';
        resultado.style.color = 'red';
        return;
    }
  
    resultado.textContent = `Resultado: ${res}`;
    resultado.style.color = 'black';
  }
  function calcular() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');
  
    if (isNaN(valor1) || isNaN(valor2)) {
      resultado.textContent = 'Insira números válidos.';
      resultado.style.color = 'red';
      return;
    }
  
    let res;
  
    switch (operacao) {
      case 'soma':
        res = valor1 + valor2;
        break;
      case 'subtracao':
        res = valor1 - valor2;
        break;
      case 'multiplicacao':
        res = valor1 * valor2;
        break;
      case 'divisao':
        if (valor2 === 0) {
          resultado.textContent = 'Erro: divisão por zero.';
          resultado.style.color = 'red';
          return;
        }
        res = valor1 / valor2;
        break;
      default:
        resultado.textContent = 'Operação inválida.';
        resultado.style.color = 'red';
        return;
    }
  
    resultado.style.color = 'black';
    resultado.textContent = `Resultado: ${res}`;
  }
  function verificarIdade() {
    const anoInput = document.getElementById('anoNascimento');
    const resultado = document.getElementById('resultado');
    const anoAtual = new Date().getFullYear();
    const ano = parseInt(anoInput.value);
  
    if (isNaN(ano) || ano > anoAtual || ano < 1900) {
      resultado.textContent = 'Por favor, insira um ano válido.';
      resultado.style.color = 'red';
      return;
    }
  
    const idade = anoAtual - ano;
    let classificacao = '';
  
    if (idade < 18) {
      classificacao = 'menor de idade';
    } else if (idade < 60) {
      classificacao = 'adulto(a)';
    } else {
      classificacao = 'idoso(a)';
    }
  
    resultado.style.color = 'black';
    resultado.textContent = `Você tem ${idade} anos e é ${classificacao}.`;
  }
  function adicionarItem() {
    const input = document.getElementById('item');
    const valor = input.value.trim();
    const lista = document.getElementById('lista');
  
    if (valor === '') return;
  
    const li = document.createElement('li');
    li.textContent = valor;
  
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.onclick = function () {
      lista.removeChild(li);
    };
  
    li.appendChild(btnRemover);
    lista.appendChild(li);
  
    input.value = '';
    input.focus();
  }
  function verificarPalindromo() {
    const entrada = document.getElementById('entrada').value;
    const resultado = document.getElementById('resultado');
  
    if (entrada.trim() === '') {
      resultado.textContent = 'Digite algo para verificar.';
      resultado.style.color = 'red';
      return;
    }
  
    // Remove espaços, pontuação, acentos e transforma em minúsculas
    const normalizado = entrada
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
      .replace(/[^a-z0-9]/g, ''); // remove tudo que não é letra ou número
  
    const reverso = normalizado.split('').reverse().join('');
  
    if (normalizado === reverso) {
      resultado.textContent = `"${entrada}" é um palíndromo!`;
      resultado.style.color = 'green';
    } else {
      resultado.textContent = `"${entrada}" não é um palíndromo.`;
      resultado.style.color = 'black';
    }
  }
  function mudarCor(cor) {
    // Desativa todas as luzes
    const luzes = document.querySelectorAll('.luz');
    luzes.forEach(luz => luz.style.opacity = 0.3);
  
    // Ativa a luz correspondente à cor escolhida
    const luzEscolhida = document.getElementById(cor);
    luzEscolhida.style.opacity = 1;
  }
  function converterTemperatura() {
    // Obter os valores do formulário
    const celsius = parseFloat(document.getElementById('celsius').value);
    const escala = document.getElementById('escala').value;
    let resultado;

    // Verificar se o valor de celsius é um número válido
    if (isNaN(celsius)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira uma temperatura válida.";
        return;
    }

    // Realizar a conversão com base na escala escolhida
    if (escala === 'fahrenheit') {
        resultado = (celsius * 9 / 5) + 32;
        document.getElementById('resultado').innerHTML = `${celsius}°C é igual a ${resultado.toFixed(2)}°F.`;
    } else if (escala === 'kelvin') {
        resultado = celsius + 273.15;
        document.getElementById('resultado').innerHTML = `${celsius}°C é igual a ${resultado.toFixed(2)}K.`;
    }
}
let minutos = 0;
let segundos = 0;
let centisegundos = 0;
let timer;
let cronometroAtivo = false;

function iniciar() {
    if (!cronometroAtivo) {
        cronometroAtivo = true;
        timer = setInterval(atualizarTempo, 10);
        document.getElementById("iniciar").disabled = true;
        document.getElementById("pausar").disabled = false;
        document.getElementById("zerar").disabled = false;
    }
}

function pausar() {
    clearInterval(timer);
    cronometroAtivo = false;
    document.getElementById("iniciar").disabled = false;
    document.getElementById("pausar").disabled = true;
}

function zerar() {
    clearInterval(timer);
    minutos = 0;
    segundos = 0;
    centisegundos = 0;
    cronometroAtivo = false;
    atualizarDisplay();
    document.getElementById("iniciar").disabled = false;
    document.getElementById("pausar").disabled = true;
    document.getElementById("zerar").disabled = true;
}

function atualizarTempo() {
    centisegundos++;
    if (centisegundos >= 100) {
        centisegundos = 0;
        segundos++;
    }
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById("minutos").textContent = formatarTempo(minutos);
    document.getElementById("segundos").textContent = formatarTempo(segundos);
    document.getElementById("centisegundos").textContent = formatarTempo(centisegundos);
}

function formatarTempo(valor) {
    return valor < 10 ? "0" + valor : valor;
}
function gerarSenha() {
    const tamanho = parseInt(document.getElementById('tamanho').value);
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    let senha = '';

    // Gerar a senha aleatória
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }

    // Exibir a senha gerada
    document.getElementById('senha').textContent = senha;
}
function sortear() {
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);

    // Verificar se os valores inseridos são válidos
    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        document.getElementById('numero-sorteado').textContent = "Por favor, insira valores válidos (mínimo menor que máximo).";
        return;
    }

    // Gerar o número aleatório entre o valor mínimo e máximo
    const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    // Exibir o número sorteado
    document.getElementById('numero-sorteado').textContent = `Número sorteado: ${numeroSorteado}`;
}
function contar() {
    const texto = document.getElementById('texto').value.trim();

    // Contar as palavras
    const palavras = texto.split(/\s+/).filter(Boolean);
    const quantidadePalavras = palavras.length;

    // Contar as letras
    const letras = texto.replace(/\s+/g, '').length;

    // Exibir o resultado
    document.getElementById('resultado-palavras').textContent = `Palavras: ${quantidadePalavras}`;
    document.getElementById('resultado-letras').textContent = `Letras: ${letras}`;
}
function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);

    // Verifica se o número é válido
    if (isNaN(numero) || numero <= 1) {
        document.getElementById('mensagem').textContent = "Por favor, insira um número maior que 1.";
        return;
    }

    // Função para verificar se o número é primo
    function isPrimo(n) {
        if (n <= 1) return false; // 1 não é primo
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false; // Se o número for divisível por i, não é primo
            }
        }
        return true; // Se passar por todas as verificações, é primo
    }

    // Verifica se o número é primo
    if (isPrimo(numero)) {
        document.getElementById('mensagem').textContent = `${numero} é um número primo!`;
    } else {
        document.getElementById('mensagem').textContent = `${numero} não é um número primo.`;
    }
}
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erroDiv = document.getElementById('erro');
    
    // Limpar mensagens de erro anteriores
    erroDiv.textContent = '';

    // Verificar se o nome está vazio
    if (nome.trim() === '') {
        erroDiv.textContent = 'O campo "Nome" não pode ser vazio.';
        return false;
    }

    // Verificar se o e-mail está vazio ou com formato inválido
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === '' || !emailRegex.test(email)) {
        erroDiv.textContent = 'Por favor, insira um e-mail válido.';
        return false;
    }

    // Verificar se a senha está vazia
    if (senha.trim() === '') {
        erroDiv.textContent = 'O campo "Senha" não pode ser vazio.';
        return false;
    }

    // Se todos os campos forem válidos, retornar true
    alert('Cadastro realizado com sucesso!');
    return true;
}
function calcularMedia(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coletando os valores das notas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value) || 0; // Se nota4 não for informada, assume 0

    // Calculando a média
    const media = (nota1 + nota2 + nota3 + nota4) / (nota4 ? 4 : 3);

    // Obtendo o elemento para exibir o resultado
    const resultadoDiv = document.getElementById('resultado');

    // Verificando a situação do aluno
    let resultado = '';
    if (media >= 7) {
        resultado = `Aprovado! Sua média foi ${media.toFixed(2)}.`;
    } else if (media >= 5) {
        resultado = `Recuperação. Sua média foi ${media.toFixed(2)}.`;
    } else {
        resultado = `Reprovado. Sua média foi ${media.toFixed(2)}.`;
    }

    // Exibindo o resultado
    resultadoDiv.textContent = resultado;

    // Limpar os campos após o cálculo
    document.getElementById('formNotas').reset();
}
document.getElementById("check").onclick = function() {
    let number = document.getElementById("number").value;
    let result = (number % 2 === 0) ? "Par" : "Ímpar";
    document.getElementById("result").innerHTML = `O número é: ${result}`;
}
document.getElementById("start").onclick = function() {
    let start = parseInt(document.getElementById("startValue").value);
    let end = parseInt(document.getElementById("endValue").value);
    let step = parseInt(document.getElementById("stepValue").value);
    let result = "";

    for (let i = start; i <= end; i += step) {
        result += i + " ";
    }

    document.getElementById("countResult").innerHTML = result;
}
document.getElementById("calculate").onclick = function() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let imc = weight / (height * height);
    let message = "";

    if (imc < 18.5) {
        message = "Abaixo do peso";
    } else if (imc < 24.9) {
        message = "Peso normal";
    } else if (imc < 29.9) {
        message = "Sobrepeso";
    } else {
        message = "Obesidade";
    }

    document.getElementById("imcResult").innerHTML = `IMC: ${imc.toFixed(2)} - ${message}`;
}
document.getElementById("calculate").onclick = function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result = 0;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        result = num1 / num2;
    }

    document.getElementById("calcResult").innerHTML = `Resultado: ${result}`;
}
document.getElementById("checkAge").onclick = function() {
    let birthYear = parseInt(document.getElementById("birthYear").value);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    let result = "";

    if (age < 18) {
        result = "Menor de idade";
    } else if (age < 60) {
        result = "Adulto";
    } else {
        result = "Idoso";
    }

    document.getElementById("ageResult").innerHTML = `Idade: ${age} - ${result}`;
}
document.getElementById("generate").onclick = function() {
    let number = parseInt(document.getElementById("number").value);
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}<br>`;
    }

    document.getElementById("tabuadaResult").innerHTML = result;
}
let shoppingList = [];

document.getElementById("addItem").onclick = function() {
    let item = document.getElementById("item").value;
    if (item !== "") {
        shoppingList.push(item);
        updateList();
    }
}

function updateList() {
    let list = document.getElementById("shoppingList");
    list.innerHTML = "";
    shoppingList.forEach((item, index) => {
        list.innerHTML += `<li>${item} <button onclick="removeItem(${index})">Remover</button></li>`;
    });
}

function removeItem(index) {
    shoppingList.splice(index, 1);
    updateList();
}
document.getElementById("checkPalindrome").onclick = function() {
    let text = document.getElementById("text").value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedText = text.split("").reverse().join("");
    let result = (text === reversedText) ? "É um palíndromo!" : "Não é um palíndromo!";
    document.getElementById("palindromeResult").innerHTML = result;
}
function changeLight(color) {
    document.getElementById("semaphore").style.backgroundColor = color;
}

document.getElementById("red").onclick = function() { changeLight("red"); };
document.getElementById("yellow").onclick = function() { changeLight("yellow"); };
document.getElementById("green").onclick = function() { changeLight("green"); };
function changeLight(color) {
    document.getElementById("semaphore").style.backgroundColor = color;
}

document.getElementById("red").onclick = function() { changeLight("red"); };
document.getElementById("yellow").onclick = function() { changeLight("yellow"); };
document.getElementById("green").onclick = function() { changeLight("green"); };
document.getElementById("convert").onclick = function() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let resultFahrenheit = (celsius * 9/5) + 32;
    let resultKelvin = celsius + 273.15;

    document.getElementById("result").innerHTML = `Fahrenheit: ${resultFahrenheit.toFixed(2)}°F<br>Kelvin: ${resultKelvin.toFixed(2)}K`;
}
document.getElementById("calculateCash").onclick = function() {
    let amount = parseInt(document.getElementById("amount").value);
    let notes100 = Math.floor(amount / 100);
    amount %= 100;
    let notes50 = Math.floor(amount / 50);
    amount %= 50;
    let notes10 = Math.floor(amount / 10);
    amount %= 10;
    let notes1 = amount;

    document.getElementById("cashResult").innerHTML = `R$100: ${notes100} notas<br>R$50: ${notes50} notas<br>R$10: ${notes10} notas<br>R$1: ${notes1} notas`;
}
let timer;
let seconds = 0;

document.getElementById("start").onclick = function() {
    timer = setInterval(function() {
        seconds++;
        document.getElementById("time").innerHTML = seconds + " segundos";
    }, 1000);
}

document.getElementById("pause").onclick = function() {
    clearInterval(timer);
}

document.getElementById("reset").onclick = function() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById("time").innerHTML = seconds + " segundos";
}
document.getElementById("generatePassword").onclick = function() {
    let length = parseInt(document.getElementById("passwordLength").value);
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById("passwordResult").innerHTML = password;
}
document.getElementById("draw").onclick = function() {
    let min = parseInt(document.getElementById("minValue").value);
    let max = parseInt(document.getElementById("maxValue").value);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = `Número sorteado: ${randomNumber}`;
}
let votes = {
    option1: 0,
    option2: 0,
    option3: 0
};

function updateResults() {
    let totalVotes = votes.option1 + votes.option2 + votes.option3;
    let percentage1 = (votes.option1 / totalVotes) * 100;
    let percentage2 = (votes.option2 / totalVotes) * 100;
    let percentage3 = (votes.option3 / totalVotes) * 100;

    document.getElementById("result").innerHTML = `
        Option 1: ${votes.option1} votes (${percentage1.toFixed(2)}%)<br>
        Option 2: ${votes.option2} votes (${percentage2.toFixed(2)}%)<br>
        Option 3: ${votes.option3} votes (${percentage3.toFixed(2)}%)
    `;
}

document.getElementById("vote1").onclick = function() {
    votes.option1++;
    updateResults();
}

document.getElementById("vote2").onclick = function() {
    votes.option2++;
    updateResults();
}

document.getElementById("vote3").onclick = function() {
    votes.option3++;
    updateResults();
}
document.getElementById("count").onclick = function() {
    let text = document.getElementById("textInput").value;
    let words = text.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;
    let letters = text.replace(/[^a-zA-Z]/g, "").length;
    document.getElementById("result").innerHTML = `Palavras: ${words} | Letras: ${letters}`;
}
document.getElementById("checkPrime").onclick = function() {
    let number = parseInt(document.getElementById("primeNumber").value);
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    document.getElementById("primeResult").innerHTML = isPrime ? `${number} é primo` : `${number} não é primo`;
}
document.getElementById("submitForm").onclick = function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = "";

    if (name === "") {
        errorMessage += "Nome é obrigatório.<br>";
    }
    if (email === "" || !email.match(/^\S+@\S+\.\S+$/)) {
        errorMessage += "E-mail inválido.<br>";
    }
    if (password === "") {
        errorMessage += "Senha é obrigatória.<br>";
    }

    if (errorMessage) {
        document.getElementById("formError").innerHTML = errorMessage;
    } else {
        document.getElementById("formError").innerHTML = "Cadastro realizado com sucesso!";
    }
}
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guessButton").onclick = function() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++;
    let message = "";

    if (userGuess > randomNumber) {
        message = "O número é menor!";
    } else if (userGuess < randomNumber) {
        message = "O número é maior!";
    } else {
        message = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
        randomNumber = Math.floor(Math.random() * 100) + 1; // Resetar o número para outro sorteio
        attempts = 0;
    }

    document.getElementById("result").innerHTML = message;
}
document.getElementById("calculateGrade").onclick = function() {
    let grades = [
        parseFloat(document.getElementById("grade1").value),
        parseFloat(document.getElementById("grade2").value),
        parseFloat(document.getElementById("grade3").value)
    ];
    
    let average = grades.reduce((a, b) => a + b, 0) / grades.length;
    let result = "";

    if (average >= 7) {
        result = "Aprovado!";
    } else if (average >= 5) {
        result = "Recuperação!";
    } else {
        result = "Reprovado!";
    }

    document.getElementById("gradeResult").innerHTML = `Média: ${average.toFixed(2)} - ${result}`;
}
