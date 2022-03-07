const mainRef = document.querySelector('main')
homePage()

function homePage() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>Event Listener</h1>
  <footer>
    <button class="next" onclick="intro()">Próximo</button>
  </footer>`
}
function intro() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>Introdução</h1>
  <h2>Qual a diferença de um Event Listener de atributos HTML (como onclick)?</h2>
  <li>O event listener é prático, pois não tem que colocar em cada elemento do HTML o atributo</li>
  <li>O event listener é organizado, pois o html fica no html e o javascript fica no javascript.</li>
  <li>O event listener é versátil, pois pode ser utilizado fora de elementos.</li>
  <h2>Múltiplos event listener em um mesmo elemento</h2>
  <h3><strong>element</strong>.addEventListener(<strong>"event", function</strong>);</h3>
  <li>Como mencionado na tela anterior, um mesmo elemento pode receber mais de um event listener.</li>
  <li>Além disso, um mesmo "event" em um mesmo elemento pode acionar múltiplas funções.</li>
  <footer>
    <button onclick="homePage()">Anterior</button>
    <button onclick="introPage2()">Próximo</button>
  </footer>`
}
function introPage2() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>Introdução</h1>
  <h2>Sintaxe Básica</h2>
  <h3><strong>element</strong>.addEventListener(<strong>"event", function, useCapture</strong>);</h3>
  <li>No exemplo em questão, "element" é uma variável que faz referência ao elemento que receberá o event listener.</li>
  <li>O primeiro parâmetro é o "event", que avisa um tipo atividade do usuário para o código. Vá em <a href="https://developer.mozilla.org/pt-BR/docs/Web/Events"><strong>https://developer.mozilla.org/pt-BR/docs/Web/Events</strong></a> para ver os tipos de eventos.</li>
  <li>O segundo parâmetro é a função que será chamada quando o "event" for acionado.</li>
  <li>Já o terceiro parâmetro é opcional e trata-se de um valor booleano que especifica o uso de bubbling ou captura de evento.</li>
  <h2>Para remover o event listener</h2>
  <h3>element.removeEventListener(<strong>"event", function</strong>);</h3>
  <li>No exemplo em questão, "element" é uma variável que faz referência ao elemento que receberá o event listener.</li>
  <li>Como um elemento pode acionar múltiplos event listeners, devemos referenciar no parâmetro qual event listener será removido.</li>
  <footer>
    <button class="next" onclick="intro()">Anterior</button>
    <button class="next" onclick="mouseKeyBoardPage()">Próximo</button>
  </footer>`
}
function mouseKeyBoardPage() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>Eventos de mouse e teclado
  </h1>
  <h2>Principais eventos para mouse</h2>
  <li>"click" é o evento que é acionado quando o clica e desclica sobre o elemento</li>
  <li>"mouseup" é o evento que é acionado quando o usuário desclica sobre o elemento.</li>
  <li>"mousedown" é o evento que é acionado quando o elemento é</li>
  <li>"dblclick" é o evento que é acionado quando o elemento é clicado duas vezes.</li>
  <h2> Principais eventos para teclado</h2>
  <li>"keydown" é	o evento que é acionado no instante que o usuário clica na tecla. </li>
  <li>"keypress" é o evento que ocorre quando o usuário pressiona uma tecla.</li>
  <li>"keyup"	é o evento que ocorre quando o usuário solta uma tecla</li>
  <h2> Observações</h2>
  <li>"keypress" não funciona em algumas teclas como ALT, CTRL, SHIFT e ESC</li>
  <li>Se um elemento possuir os três "events" de teclado, o código recebe primeiro "keydown", depois "keypress" e, por fim, "keyup".</li>
  <li>Existem mais eventos para teclado e mouse, mas não menos usados. Vá em <a href="https://developer.mozilla.org/pt-BR/docs/Web/Events"><strong>https://developer.mozilla.org/pt-BR/docs/Web/Events</strong></a> para ver os tipos de eventos.</li>

  <footer>
    <button class="next" onclick="introPage2()">Anterior</button>
    <button class="next" onclick="apresentarPOC1()">Próximo</button>
  </footer>`
}
function apresentarPOC1() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>POC 1</h1>
  <h2>Apresentarei como diferentes eventos de mouse e teclado funcionam.</h2>
  <footer>
    <button class="next" onclick="mouseKeyBoardPage()">Anterior</button>
    <button class="next" onclick="callbackPage()">Próximo</button>
  </footer>`
}
function callbackPage() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>CallBack</h1>
  <li>Uma função callback é uma função passada a outra função como argumento.</li>
  <li>Ou seja, o callback é aguardar a ocorrência de algo para depois iniciar a função.</li>
  <li>No caso dos event listeners, deixamos uma função aguardando o evento ocorrer para ativar.</li>
  <h2>O que é o objeto Event que é recebido na função de callback?</h2>
  <li>O objeto recebido trata </li>
  <li>Se você escrever event.target, verá qual foi o alvo principal do evento.</li>
  <footer>
    <button class="next" onclick="apresentarPOC1()">Anterior</button>
    <button class="next" onclick="apresentarPOC2()">Próximo</button>
  </footer>`
}
function apresentarPOC2() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>POC 2</h1>
  <h2>Apresentarei como funciona callback em event listener.</h2>
  <li>A função não será ativada enquanto eu não clicar no botão "próximo".</li>
  <footer>
    <button class="next" onclick="callbackPage()">Anterior</button>
    <button class="next" onclick="eventBubbling()">Próximo</button>
  </footer>`
}
function eventBubbling() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>Bubbling</h1>
  <li>Quando ativamos um elemento, ele ativará seus ancestrais também, como bolhas subindo do ponto mais fundo até a superfície da água</li>
  <li>Sendo assim, a tendência é que o bubbling suba até o "HTML".</li>
  <li>No caso dos event listeners, deixamos uma função aguardando o evento ocorrer para ativar.</li>
  <h2>O que faz a função event.stopPropagation?</h2>
  <li>Caso não queira que o evento propague até o "HTML", podemos limitar até onde o bubbling vai.</li>
  <h3><strong>event</strong>.stopPropagation();</h3>
  <footer>
    <button class="next" onclick="apresentarPOC2()">Anterior</button>
    <button class="next" onclick="apresentarPOC3()">Próximo</button>
  </footer>`
}
function apresentarPOC3() {
  mainRef.innerHTML = ''
  mainRef.innerHTML = `
  <h1>POC 3</h1>
  <h2>Apresentarei como funciona o bubbling.</h2>
  <li>O event listener propagará pelos ancestrais até chegar no "HTML" ou até chegar no "event.stopPropagation()".</li>
  <footer>
    <button class="next" onclick="eventBubbling()">Anterior</button>`
}
