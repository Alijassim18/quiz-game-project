const questions = [
  {
    question: 'Who is this?',
    type: 'MHQ',
    answer: 'Mohammed Salah',
    audio: '',
    image: 'assets/licensed-image.webp',
    options: ['Mohammed Salah', 'Leo Messi', 'Erling Haaland', 'Kylian Mphappe']
  },
  {
    question: `What will be the output of the following code snippet?\nprint(typeof(NaN))`,
    type: 'MHQ',
    answer: 'Number',
    audio: '',
    image: '',
    options: ['Object', 'Number', 'String', 'None of the above']
  },
  {
    question: 'Guess the animal?',
    type: 'MHQ',
    answer: 'Rooster',
    audio: 'assets/mixkit-rooster-crowing-in-the-morning-2462.wav',
    image: '',
    options: ['Rooster', 'Donkey', 'Monkey', 'Cow']
  },
  {
    question: `What will be the output of the following code snippet?\n\nvar a = Math.max() < Math.min();\nvar b = Math.max() > Math.min();\nprint(a);\nprint(b);`,
    type: 'Text',
    answer: 'true false',
    audio: '',
    image: ''
  },
  {
    question: `Fill the blank. \nfunction _____(name,time){\n  return 'Good'+' '+time+','+' '+name+'!'\n}\nconsole.____('Exercise 5 Result:', greetUser("Sam", "morning"));`,
    type: 'Text',
    answer: 'greetUser,log',
    audio: '',
    image: ''
  }
]

const quElem = document.getElementById('qq')
const imgElm = document.getElementById('im')
const audioElm = document.getElementById('quizAudio')
const aOp = document.getElementById('a')
const bOp = document.getElementById('b')
const cOp = document.getElementById('c')
const dOp = document.getElementById('d')
const textElm = document.getElementById('text')
const timerElm=document.getElementById('timer')
const scoreElm=document.getElementById('score')

let index = 0
let point=0
let time = 0
let timer
let userAnswer = ""
function startTimer(){
  clearInterval(timer)
  time=0
  timerElm.textContent='Time:0'
  timer=setInterval(()=>{
    time++ 
    timer.textContent=`Time:${time}`
  },1000)
}

function stopTimer(){
  clearInterval(timer)
}

function updateScore() {
  scoreElm.textContent = `Score: ${point} / ${questions.length}`
}


function display() {
  const q = questions[index]
  userAnswer = ''
  quElem.textContent = q.question
  imgElm.classList.add('hidden')
  audioElm.classList.add('hidden')
  textElm.classList.add('hidden')
  submitBtn.classList.add('hidden')
  aOp.classList.add('hidden')
  bOp.classList.add('hidden')
  cOp.classList.add('hidden')
  dOp.classList.add('hidden')
  if (q.image) {
    imgElm.src = q.image
    imgElm.classList.remove('hidden')
  } else if (q.audio) {
    audioElm.src = q.audio
    audioElm.classList.remove('hidden')
  }
  if (q.type === 'MHQ') {
    aOp.textContent = q.options[0]
    bOp.textContent = q.options[1]
    cOp.textContent = q.options[2]
    dOp.textContent = q.options[3]
    aOp.classList.remove('hidden')
    bOp.classList.remove('hidden')
    cOp.classList.remove('hidden')
    dOp.classList.remove('hidden')
  } else if (q.type === 'Text') {
    textElm.value = ''
    textElm.classList.remove('hidden')
    submitBtn.classList.remove('hidden')
  }

  startTimer()
}

function checkAnswer(userAns) {
  stopTimer()
  const correct = questions[index].answer.trim().toLowerCase()
  const user = userAns.trim().toLowerCase()

  if (user === correct) {
    point++
    alert(' Correct!')
  } else {
    alert(`Wrong! Correct: ${questions[index].answer}`)
  }

  updateScore()
  setTimeout(() => {
    nextQuestion()
  }, 5000)
}

display()



aOp.addEventListener('click', () => checkAnswer(aOp.textContent))
bOp.addEventListener('click', () => checkAnswer(bOp.textContent))
cOp.addEventListener('click', () => checkAnswer(cOp.textContent))
dOp.addEventListener('click', () => checkAnswer(dOp.textContent))












