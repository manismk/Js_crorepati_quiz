const chalk = require('chalk');
console.log("Welcome to "+chalk.bold.bgYellow('Javascript crorepati')+" game");
console.log('Game rules:- 16 questions to win'+chalk.bold.bgYellow(' 7 crore'));
console.log('you have 3 places of assured amount with 10000 at 5th question and with 320000 at 10th question and with 1 crore at 15th question');
console.log('You have 2 lifeline option in the whole game (You can use lifeline by pressing 0 in any question or If you made wrong answer we will detect one lifeline)')
console.log('The prize amount with question no');
console.log('1---'+chalk.bold.bgYellow('1000'))
console.log('2---'+chalk.bold.bgYellow('2000'))
console.log('3---'+chalk.bold.bgYellow('3000'))
console.log('4---'+chalk.bold.bgYellow('5000'))
console.log('5---'+chalk.bold.bgYellow('10000')+' Becomes your assured amount')
console.log('6---'+chalk.bold.bgYellow('20000'))
console.log('7---'+chalk.bold.bgYellow('40000'))
console.log('8---'+chalk.bold.bgYellow('80000'))
console.log('9---'+chalk.bold.bgYellow('160000'))
console.log('10---'+chalk.bold.bgYellow('320000')+' Becomes your assured amount')
console.log('11---'+chalk.bold.bgYellow('625000'))
console.log('12---'+chalk.bold.bgYellow('1250000'))
console.log('13---'+chalk.bold.bgYellow('2500000'))
console.log('14---'+chalk.bold.bgYellow('5000000'))
console.log('15---'+chalk.bold.bgYellow('10000000')+' Becomes your assured amount')
console.log('16---'+chalk.bold.bgYellow('70000000'))

var score=0;
var lifeline=2;
var currentAmount=0;
var assuredAmount=0;
var isPlaying=true;
var readlineSync = require('readline-sync')
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome '+chalk.bgMagenta(userName)+"! to Javascript crorepati");

if (!readlineSync.keyInYN('Are you ready to start the game?')) {
  console.log(chalk.bgYellow.bold('Thank you! Bye!!'))
  process.exit();
}

function questionAsker(answers,question,correctAnswer,questionNo){
  index=readlineSync.keyInSelect(answers, question,{cancel: chalk.bgRed('Use lifeline')});
  if(index===(correctAnswer-1) ){
    score=score+1;
    console.log(chalk.bgGreen('correct'))
  }
  else if(index===-1){
   lifeline=lifeline-1;
    console.log(chalk.bgRed('Used lifeline'))
  }
  else{
     lifeline=lifeline-1;
    console.log(chalk.bgRed('Wrong! used auto lifeline'))
  }
  scoreUpdater(questionNo);

}

function scoreUpdater(number){
  var prize=[1000,2000,3000,5000,10000,20000,40000,80000,160000,320000,640000,1250000,2500000,5000000,10000000,70000000];
  currentAmount=prize[score-1];
  if(score%5===0 && score>0){
    assuredAmount=prize[score-1];
  }
  if(!score>=1){
    currentAmount=0;
  }
  if(score===16){
    console.log('You are in top 1%.Who made this game upto this...')
    console.log('Well played '+userName+', Your take home amount is Rs.'+prize[15])
    process.exit();
  }
  if(number===16){
    isPlaying=false;
    console.log('Well played '+userName+', Your take home amount is Rs.'+assuredAmount)
    process.exit();
  }
  console.log(chalk.blue('----------------------'))
  console.log('Current Amount: '+currentAmount)
  console.log('Assured Amount: '+assuredAmount)
  console.log('Lifeline remaining: '+lifeline)
  console.log('Question remaining: '+(16-number))
  console.log(chalk.blue('----------------------'))
  if(lifeline<=0){
    isPlaying=false;
    console.log('Well played '+userName+', Your take home amount is Rs.'+assuredAmount)
    process.exit();
  }

}

var questions=[{
  answers:["JavaScript is a lightweight, interpreted programming language.","JavaScript is designed for creating network-centric applications.","JavaScript is complementary to and integrated with Java.","All of the above."],
  question:"Which of the following is correct about features of JavaScript?",
  correctAnswer:4
},
{
  answers:["window.print()","browser.print()","navigator.print()","document.print()"],
  question:"Which of the following is the correct syntax to print a page using JavaScript?",
  correctAnswer:1
},{
  answers:["charecterAt()","getCharAt()","charAt()","none"],
  question:"Which built-in method returns the character at the specified index?",
  correctAnswer:3
},{
  answers:["toLower()","toLowerCase()","lower()","none"],
  question:"Which built-in method returns the calling string value converted to lower case?",
  correctAnswer:2
},{
  answers:["toString()","toBool()","valueOf()","none"],
  question:" Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  correctAnswer:3
},
{
  answers:["blad()","bold()","anchor()","blink()"],
  question:"Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
  correctAnswer:2
}
,{
  answers:["fixed()","fontsize()","sizeOf()","size()"],
  question:"Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
  correctAnswer:2
},{
  answers:["indexx()","size()","indexOf()","none"],
  question:"Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
  correctAnswer:3
},{
  answers:["slice()","remove()","shift()","none"],
  question:"Which of the following function of Array object removes the first element from an array and returns that element?",
  correctAnswer:3
},{
  answers:["slice()","split()","removeBy()","none"],
  question:"Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
  correctAnswer:2
},{
  answers:["client","server","both","none"],
  question:"JavaScript is a ___ -side programming language.",
  correctAnswer:3
},{
  answers:["true","false"],
  question:"If you type the following code in the console window, what result will you get?3 > 2 > 1 === false;",
  correctAnswer:1
},{
  answers:["min(x,y)","min(xy)","Math.min(x,y)","none"],
  question:"How do you find the minimum of x and y using JavaScript?",
  correctAnswer:3
},{
  answers:["default","base","log","try"],
  question:"Which JavaScript label catches all the values, except for the ones specified?",
  correctAnswer:1
},{
  answers:["if(x=2)","if(x!=2)","if(x==2)","none"],
  question:"Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
  correctAnswer:3
},{
  answers:["true","false","syntax error","reference error"],
  question:"Determine the result – String(“Hello”) === “Hello”;",
  correctAnswer:1
}]

for(var i=0;i<questions.length;i++){
  if(isPlaying){
    questionAsker(questions[i].answers,questions[i].question,questions[i].correctAnswer,i+1)
  }
}

