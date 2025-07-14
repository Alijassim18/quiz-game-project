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
const nextOp = document.getElementById('next')
const preOp = document.getElementById('pre')
const textElm = document.getElementById('text')
const submitBtn = document.getElementById('submit')
let index = 0

function display() {
  const q = questions[index]
  quElem.textContent = q.question

  imgElm.classList.add('hidden')
  audioElm.classList.add('hidden')
  textElm.classList.add('hidden')
  aOp.classList.add('hidden')
  bOp.classList.add('hidden')
  cOp.classList.add('hidden')
  dOp.classList.add('hidden')

  if (q.type === 'MHQ') {
    if (q.image !== '' && q.audio === '') {
      imgElm.src = q.image
      imgElm.classList.remove('hidden')
    } else if (q.audio !== '' && q.image === '') {
      audioElm.src = q.audio
      audioElm.classList.remove('hidden')
    }

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
  }
}

nextOp.addEventListener('click', () => {
  if (index < questions.length - 1) {
    index++
    display()
  }
})

preOp.addEventListener('click', () => {
  if (index > 0) {
    index--
    display()
  }
})

function checkAnswer(userAnswer){
  const correct=questions[index].answer.trim().toLowerCase()
  const user = userAnswer.trim().toLowerCase()

  if(user=== correct){
        alert(' Correct!')
  } else {
    alert(' Incorrect. Try again.')
  }
  }







display()
