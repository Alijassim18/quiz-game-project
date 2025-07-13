
const questions=[
    {question:'Who is this?',type:'MHQ',answer:'Mohammed Salah',audio:'assets/mixkit-rooster-crowing-in-the-morning-2462.wav',image:'assets/licensed-image.webp',option:['Mohammed Salah','Leo Messi','Erling Haaland','Kylian Mphappe']},
    {question:`What will be the output of the following code snippet?
print(typeof(NaN))`,type:'MHQ',answer:'Number',audio:'',image:'',options:['Object','Number','String','None of the above']} ,
    {question:'Guess the animal?',type:'MHQ',answer:'Rooster',audio:'assets/mixkit-rooster-crowing-in-the-morning-2462.wav',image:'',option:['Rooster','Donkey','Monkey','Cow']},

     {question:`What will be the output of the following code snippet?

var a = Math.max() < Math.min();
var b = Math.max() > Math.min();
print(a);
print(b);`,type:'Text',answer:'true false',audio:'',image:''},
      {question:`Fill the black. function _____(name,time){
return 'Good'+' '+time+','+' '+name+'!'
}
console.____('Exercise 5 Result:', greetUser("Sam", "morning"));`,type:'Text',answer:'greetUser,log',audio:'',image:''},
  ,
]

const quElem=document.getElementById('qq')
const imgElm=document.getElementById('im')
const audioElm=document.getElementById('quizAudio')
let index 
let timer






