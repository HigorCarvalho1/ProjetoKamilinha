const anterior = document.querySelector('.anterior')
const proximo = document.querySelector('.proximo')
const anterior2 = document.querySelector('.anterior2')
const proximo2 = document.querySelector('.proximo2')
const anterior3 = document.querySelector('.anterior3')
const proximo3 = document.querySelector('.proximo3')
const anterior4 = document.querySelector('.anterior4')
const proximo4 = document.querySelector('.proximo4')
const anterior5 = document.querySelector('.anterior5')
const proximo5= document.querySelector('.proximo5')
const anterior6 = document.querySelector('.anterior6')
const proximo6 = document.querySelector('.proximo6')
const anterior7 = document.querySelector('.anterior7')
const proximo7 = document.querySelector('.proximo7')
const body =  document.querySelector('body')

const audio = document.querySelector('.audio')
const notaudio = document.querySelector('.notaudio')
const newaudio = new Audio('./audio/audio.mp3')
const newaudio2 = new Audio('./audio/button.wav')

const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")
const img5 = document.querySelector(".img5")
const img6 = document.querySelector(".img6")
const img7 = document.querySelector(".img7")

audio.addEventListener('click', audios2)
notaudio.addEventListener('click', audios)
proximo.addEventListener('click', btn1)
anterior2.addEventListener('click', btn1)
proximo2.addEventListener('click', btn2)
anterior3.addEventListener('click', btn2)
proximo3.addEventListener('click', btn3)
anterior4.addEventListener('click', btn3)
proximo4.addEventListener('click', btn4)
anterior5.addEventListener('click', btn4)
proximo5.addEventListener('click', btn5)
anterior6.addEventListener('click', btn5)
proximo6.addEventListener('click', btn6)
anterior7.addEventListener('click', btn6)
proximo7.addEventListener('click', btn7)

function btn1(){
    body.classList.toggle('light2')
    anterior.classList.toggle('light')
    anterior2.classList.toggle('light')
    proximo.classList.toggle('light')
    proximo2.classList.toggle('light')
    img1.classList.toggle('light')
    img2.classList.toggle('light')
    newaudio2.play()
    
}
function btn2(){
    body.classList.toggle('light2')
    anterior2.classList.toggle('light')
    anterior3.classList.toggle('light')
    proximo2.classList.toggle('light')
    proximo3.classList.toggle('light')
    img2.classList.toggle('light')
    img3.classList.toggle('light')
    newaudio2.play()
}
function btn3(){
    body.classList.toggle('light2')
    anterior3.classList.toggle('light')
    anterior4.classList.toggle('light')
    proximo3.classList.toggle('light')
    proximo4.classList.toggle('light')
    img3.classList.toggle('light')
    img4.classList.toggle('light')
    newaudio2.play()
}
function btn4(){
    body.classList.toggle('light2')
    anterior4.classList.toggle('light')
    anterior5.classList.toggle('light')
    proximo4.classList.toggle('light')
    proximo5.classList.toggle('light')
    img4.classList.toggle('light')
    img5.classList.toggle('light')
    newaudio2.play()
}
function btn5(){
    body.classList.toggle('light2')
    anterior5.classList.toggle('light')
    anterior6.classList.toggle('light')
    proximo5.classList.toggle('light')
    proximo6.classList.toggle('light')
    img5.classList.toggle('light')
    img6.classList.toggle('light')
    newaudio2.play()
}
function btn6(){
    body.classList.toggle('light2')
    anterior6.classList.toggle('light')
    anterior7.classList.toggle('light')
    proximo6.classList.toggle('light')
    proximo7.classList.toggle('light')
    img6.classList.toggle('light')
    img7.classList.toggle('light')
    newaudio2.play()
}
function btn7(){
    body.classList.toggle('light2')
    anterior7.classList.toggle('light')
    anterior.classList.toggle('light')
    proximo7.classList.toggle('light')
    proximo.classList.toggle('light')
    img7.classList.toggle('light')
    img1.classList.toggle('light')
    newaudio2.play()
}
function  audios(){
    audio.classList.remove('light')
    notaudio.classList.add('light')
    newaudio.play()
}
function audios2(){
    audio.classList.add('light')
    notaudio.classList.remove('light')
    newaudio.pause()
}



