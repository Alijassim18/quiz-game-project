function init(){
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
    question: `What will be the output of the following code snippet?\n\nlet a = Math.max() < Math.min();\nlet b = Math.max() > Math.min();\nprint(a);\nprint(b);`,
    type: 'Text',
    answer: 'true false',
    audio: '',
    image: ''
  },
  {
    question: `Fill the blank.\n
              function _____(name,time){\n return 'Good'+' '+time+','+' '+name+'!'\n}\n
              console.____('Exercise 5 Result:', greetUser("Sam", "morning"));`,
    type: 'Text',
    answer: 'greetUser,log',
     audio: '',
    image: ''
  },
  {
    question: 'Guess the flag?',
    type: 'MHQ',
    answer: 'Switzerland',
    audio: '',
    image: 'assets/download.jpeg',
    options: [ 'England', 'USA', 'Bahrain','Switzerland']
  },
    {
    question: 'What is the country that makes sushi?',
    type: 'Text',
    answer: 'Japan',
     audio: '',
    image: 'assets/sushi.jpg'
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
const timerElm = document.getElementById('timer')
const scoreElm = document.getElementById('score')
const messageElm = document.getElementById('message')
const submitBtn = document.getElementById('submit')
const restartBtn = document.getElementById('restart')
 const quiz = document.getElementById("quiz")
const startBtn = document.getElementById("startBtn")
const welcomeScreen = document.getElementById("welcome-screen")

let index = 0
let point = 0
let timer
let answered = false



function startTimer() {
  clearInterval(timer)
      
  let remaining = 10
  if(questions[index].type=== 'Text')
      remaining=20
  timerElm.textContent = `Time: ${remaining}`
  timer = setInterval(() => {
    remaining--
    timerElm.textContent = `Time: ${remaining}`
    if (remaining === 0) {
      clearInterval(timer)
      messageElm.textContent = "Time is finished"
      checkAnswer("")
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(timer)
}

function updateScore() {
  scoreElm.textContent = `Score: ${point} / ${questions.length}`
}

function display() {
  answered = false
  const q = questions[index]
  messageElm.textContent = ""
  quElem.textContent = q.question
  imgElm.classList.add('hidden')
  audioElm.classList.add('hidden')
  textElm.classList.add('hidden')
  submitBtn.classList.add('hidden')
  aOp.classList.add('hidden')
  bOp.classList.add('hidden')
  cOp.classList.add('hidden')
  dOp.classList.add('hidden')
  restartBtn.classList.add('hidden')

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
  if (answered) return
  answered = true
  stopTimer()

  const correct = questions[index].answer.trim().toLowerCase()
  const user = userAns.trim().toLowerCase()

  if (user === correct) {
    point++
    messageElm.textContent = 'Correct'
  } else {
    messageElm.textContent = `Wrong Answer`
    if (point > 0) point--
  }

  updateScore()
  setTimeout(() => {
    nextQuestion()
  }, 3000)
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++
    display()
  } else {
    endQuiz()
  }
}

function endQuiz() {
  stopTimer()
  messageElm.textContent = `Quiz completed. Final Score: ${point} / ${questions.length}`
  restartBtn.classList.remove('hidden')
  submitBtn.classList.add('hidden')
}

function restartQuiz() {
  index = 0
  point = 0
  updateScore()
  messageElm.textContent = ''
  restartBtn.classList.add('hidden')
  quiz.classList.add('hidden')
  welcomeScreen.classList.remove('hidden')
}

aOp.addEventListener('click', () => checkAnswer(aOp.textContent))
bOp.addEventListener('click', () => checkAnswer(bOp.textContent))
cOp.addEventListener('click', () => checkAnswer(cOp.textContent))
dOp.addEventListener('click', () => checkAnswer(dOp.textContent))
submitBtn.addEventListener('click', () => {
  const userAnswer = textElm.value
  checkAnswer(userAnswer)
})
restartBtn.addEventListener('click', restartQuiz)

startBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden') 
  quiz.classList.remove('hidden')        
  display()                            
  updateScore()                      
});
}
document.addEventListener('DOMContentLoaded',init)
