var escJog = document.getElementsByName('selec')

var main1 = document.querySelector('.conteudo_principal')
var main2 = document.querySelector('.main_resultado')

var jog1 = document.getElementById('jog1')
var jog2 = document.getElementById('jog2')

var res = document.querySelector('.res')
var sit = document.querySelector('.sit')

var jogpont = document.querySelector('.jogpont')
var comppont = document.querySelector('.comppont')

var jogpont0 = 0
var comppont0 = 0

function verm() {
    document.body.style.backgroundColor = '#581818'
}
function verd() {
    document.body.style.backgroundColor = '#3fb13f'
}
function azul() {
    document.body.style.backgroundColor = '#419aff'
}
function rosa() {
    document.body.style.backgroundColor = '#d87093'
}
function blac() {
    document.body.style.backgroundColor = '#242424'
}

function jogar() {
    main1.style.display = 'none'
    main2.style.display = 'block'
    var computador = Math.floor(Math.random() * 3)

    if (computador == 0) {
        if (escJog[0].checked) {
            jog1.src = 'pedra1.png'
            jog2.src = 'pedra1.png'
            res.innerHTML = 'Você escolheu <strong>PEDRA</strong> e o computador <strong>PEDRA</strong>'
            sit.innerHTML = '<strong>EMPATE</strong>'
            sit.style.color = '#B69121'
        }
        else if (escJog[1].checked) {
            jog1.src = 'papel1.png'
            jog2.src = 'pedra1.png'
            res.innerHTML = 'Você escolheu <strong>PAPEL</strong> e computador <strong>PEDRA</strong>'
            sit.innerHTML = '<strong>VOCÊ VENCEU</strong>'
            sit.style.color = 'green'
            jogpont0++
            jogpont.innerHTML = `${jogpont0}`
        }
        else if (escJog[2].checked) {
            jog1.src = 'tesoura1.png'
            jog2.src = 'pedra1.png'
            res.innerHTML = 'Você escolheu <strong>TESOURA</strong> e o computador <strong>PEDRA</strong>'
            sit.innerHTML = '<strong>VOCÊ PERDEU</strong>'
            sit.style.color = 'red'
            comppont0++
            comppont.innerHTML = `${comppont0}`
        }
    }
    else if (computador == 1) {
        if (escJog[0].checked) {
            jog1.src = 'pedra1.png'
            jog2.src = 'papel1.png'
            res.innerHTML = 'Você escolheu <strong>PEDRA</strong> e o computador <strong>PAPEL</strong>'
            sit.innerHTML = '<strong>VOCÊ PERDEU</strong>'
            sit.style.color = 'red'
            comppont0++
            comppont.innerHTML = `${comppont0}`
        }
        else if (escJog[1].checked) {
            jog1.src = 'papel1.png'
            jog2.src = 'papel1.png'
            res.innerHTML = 'Você escolheu <strong>PAPEL</strong> e o computador <strong>PAPEL</strong>'
            sit.innerHTML = '<strong>EMPATE</strong>'
            sit.style.color = '#B69121'
        }
        else if (escJog[2].checked) {
            jog1.src = 'tesoura1.png'
            jog2.src = 'papel1.png'
            res.innerHTML = 'Você escolheu <strong>TESOURA</strong> e o computador <strong>PAPEL</strong>'
            sit.innerHTML = '<strong>VOCÊ VENCEU</strong>'
            sit.style.color = 'green'
            jogpont0++
            jogpont.innerHTML = `${jogpont0}`
        }
    }
    else if (computador == 2) {
        if (escJog[0].checked) {
            jog1.src = 'pedra1.png'
            jog2.src = 'tesoura1.png'
            res.innerHTML = 'Você escolheu <strong>PEDRA</strong> e o computador <strong>TESOURA</strong>'
            sit.innerHTML = '<strong>VOCÊ VENCEU</strong>'
            sit.style.color = 'green'
            jogpont0++
            jogpont.innerHTML = `${jogpont0}`
        }
        else if (escJog[1].checked) {
            jog1.src = 'papel1.png'
            jog2.src = 'tesoura1.png'
            res.innerHTML = 'Você escolheu <strong>PAPEL</strong> e o computador <strong>TESOURA</strong>'
            sit.innerHTML = '<strong>VOCÊ PERDEU</strong>'
            sit.style.color = 'red'
            comppont0++
            comppont.innerHTML = `${comppont0}`
        }
        else if (escJog[2].checked) {
            jog1.src = 'tesoura1.png'
            jog2.src = 'tesoura1.png'
            res.innerHTML = 'Você escolheu <strong>TESOURA</strong> e o computador <strong>TESOURA</strong>'
            sit.innerHTML = '<strong>EMPATE</strong>'
            sit.style.color = '#B69121'
        }
    }
}

function voltar() {
    main1.style.display = 'block'
    main2.style.display = 'none'
}

function resetar() {
    var confirm = window.confirm('Deseja mesmo ZERAR as pontuações?')
    if (confirm == true) {
        jogpont0 = 0
        jogpont.innerHTML = `${jogpont0}`
        comppont0 = 0
        comppont.innerHTML = `${comppont0}`
    }
}