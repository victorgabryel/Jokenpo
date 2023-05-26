var escJog = document.getElementsByName('selec')

var main = document.querySelector('.main_resultado')

var jog1 = document.getElementById('jog1')
var jog2 = document.getElementById('jog2')

var res = document.querySelector('.res')
var sit = document.querySelector('.sit')

function jogar() {
    main.style.display = 'block'
    var computador = Math.floor(Math.random() * 3)

    if (computador == 0) {
        if (escJog[0].checked) {
            jog1.src = 'pedra.png'
            jog2.src = 'pedra.png'
            res.innerHTML = 'Você escolheu <strong>PEDRA</strong> e o computador <strong>PEDRA</strong>'
            sit.innerHTML = '<strong>EMPATE</strong>'
            sit.style.color = '#B69121'
        }
        else if (escJog[1].checked) {
            jog1.src = 'papel.png'
            jog2.src = 'pedra.png'
            res.innerHTML = 'Você escolheu <strong>PAPEL</strong> e computador <strong>PEDRA</strong>'
            sit.innerHTML = '<strong>VOCÊ VENCEU</strong>'
            sit.style.color = 'green'
        }
        else if (escJog[2].checked) {
            jog1.src = 'tesoura.png'
            jog2.src = 'pedra.png'
            res.innerHTML = 'Você escolheu <strong>TESOURA</strong> e o computador <strong>PEDRA</strong>'
            sit.innerHTML = '<strong>VOCÊ PERDEU</strong>'
            sit.style.color = 'red'
        }
    }
    else if (computador == 1) {
        if (escJog[0].checked) {
            jog1.src = 'pedra.png'
            jog2.src = 'papel.png'
            res.innerHTML = 'Você escolheu <strong>PEDRA</strong> e o computador <strong>PAPEL</strong>'
            sit.innerHTML = '<strong>VOCÊ PERDEU</strong>'
            sit.style.color = 'red'
        }
        else if (escJog[1].checked) {
            jog1.src = 'papel.png'
            jog2.src = 'papel.png'
            res.innerHTML = 'Você escolheu <strong>PAPEL</strong> e o computador <strong>PAPEL</strong>'
            sit.innerHTML = '<strong>EMPATE</strong>'
            sit.style.color = '#B69121'
        }
        else if (escJog[2].checked) {
            jog1.src = 'tesoura.png'
            jog2.src = 'papel.png'
            res.innerHTML = 'Você escolheu <strong>TESOURA</strong> e o computador <strong>PAPEL</strong>'
            sit.innerHTML = '<strong>VOCÊ VENCEU</strong>'
            sit.style.color = 'green'
        }
    }
    else if (computador == 2) {
        if (escJog[0].checked) {
            jog1.src = 'pedra.png'
            jog2.src = 'tesoura.png'
            res.innerHTML = 'Você escolheu <strong>PEDRA</strong> e o computador <strong>TESOURA</strong>'
            sit.innerHTML = '<strong>VOCÊ VENCEU</strong>'
            sit.style.color = 'green'
        }
        else if (escJog[1].checked) {
            jog1.src = 'papel.png'
            jog2.src = 'tesoura.png'
            res.innerHTML = 'Você escolheu <strong>PAPEL</strong> e o computador <strong>TESOURA</strong>'
            sit.innerHTML = '<strong>VOCÊ PERDEU</strong>'
            sit.style.color = 'red'
        }
        else if (escJog[2].checked) {
            jog1.src = 'tesoura.png'
            jog2.src = 'tesoura.png'
            res.innerHTML = 'Você escolheu <strong>TESOURA</strong> e o computador <strong>TESOURA</strong>'
            sit.innerHTML = '<strong>EMPATE</strong>'
            sit.style.color = '#B69121'
        }
    }
}

function voltar() {
    main.style.display = 'none'
}