/*document.getElementById("backButton").onclick = function () {
    window.location.href = "http://127.0.0.1:5501/homepage.html";
  };
document.getElementById("startbutton").onclick = function () {
    window.location.href = "http://127.0.0.1:5501/quizpage.html";
  };*/
const questioncontainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
//const answerbutton = document.getElementById("answer")
const nextbtn = document.getElementById("nextButton");
const options = document.querySelectorAll(".option-label"); // Select all labels

/*const option1 = document.getElementById("option1-label");
const option2 = document.getElementById("option2-label");
const option3 = document.getElementById("option3-label");
const option4 = document.getElementById("option4-label");*/

let shufleques , currentquestionIndex ,score ;
const questions = [
    {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
      { text: "HyperText Machine Language", correct: false },
      { text: "HighText Markup Language", correct: false },
    ],
  },
  {
    question: "Which property is used to change the background color?",
    answers: [
      { text: "color", correct: false },
      { text: "bgColor", correct: false },
      { text: "background-color", correct: true },
      { text: "background", correct: false },
    ],
  },
    {
      question: "Which keyword is used to define a function in JavaScript?",
      answers: [
        {text: "def", correct: false},
        {text: "function", correct: true},
        {text: "func", correct: false},
        {text: "define", correct: false}
      ]
    },
    {
      question: "Which of the following is a CSS preprocessor?",
      answers: [
        
        {text: "JQuery", correct: false},
        {text: "React", correct: false},
        {text: "Bootstrap", correct: false},
        {text: "SASS", correct: true}
      ]
    },
    {
      question: "What does OOP stand for?",
      answers: [
        {text: "Optimal Object Processing", correct: false},
        {text: "Object-Oriented Programming", correct: true},
        {text: "Object Operation Protocol", correct: false},
        {text: "Order of Operations Programming", correct: false}
      ]
    },
    {
      question: "Which HTTP status code indicates a successful request?",
      answers : [
        {text: "404", correct: false},
        {text: "200", correct: true},
        {text: "500", correct: false},
        {text: "403", correct: false}
      ]
    },
  ]


function startQuiz() {
   score = 0;
    currentquestionIndex = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + ".." + currentQuestion.question;

    // Display answer choices dynamically
    currentQuestion.answers.forEach((answer, index) => {
        options[index].innerHTML = 
            `<input type="radio" name="choice" id="option${index + 1}"> ${answer.text}`;
        
        options[index].dataset.correct = answer.correct; // Store correct answer
        options[index].addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextbtn.style.display = "none"; // Hide next button until an answer is selected
    options.forEach(option => {
        option.classList.remove("correct", "incorrect");
        option.disabled = false;
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        localStorage.setItem("quizScore", score); // Store score in localStorage

    } else {
        selectedBtn.classList.add("incorrect");
    }

    options.forEach(option => {
        if (option.dataset.correct === "true") {
            option.classList.add("correct");
        }
        option.disabled = true; // Disable all options after selection
    });

    nextbtn.style.display = "block"; // Show next button
}

function showScorePage() {

    window.location.href = "http://127.0.0.1:5501/score.html";

}

function showScore() {
    alert(`You scored ${score} out of ${questions.length}`);
}

function handleNextButton() {
    currentquestionIndex++;

    if (currentquestionIndex < questions.length) {
        showQuestion();
    } else if (currentquestionIndex == questions.length) {
        nextbtn.innerHTML = "See Result";
        nextbtn.addEventListener("click", showScorePage);
    }
}

// Event listener for Next button
nextbtn.addEventListener("click", () => {
    if (currentquestionIndex < questions.length) {
        handleNextButton();
    } else {
        showScorePage();
    }
});

// Start the quiz
startQuiz();
export function getScore() {
  return score;
}
export function greet(name) {
  return `Hello, ${name}!`;
}

/*
    
    if(score== questions.lenght){
        const img = document.createElement("img");

       // 2️⃣ Set the image source (replace with your actual image URL)
       img.src = "gif/IMG_2533.gif"; 
       img.width = 200; 
       img.height = 200;
       document.body.appendChild(img);
       nextbtn.innerHTML = "see result";
    }*/
   
/*function startQuiz() {
    score =0 
    //shufleques = questions.sort(() => Math.random() - 0.5);
    currentquestionIndex = 0 ;
    nextbtn.innerHTML = "Next"
    showQuestion();
}
function showQuestion() {
    nextbtn.style.display = "block";
    let currentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + ".." + currentQuestion.question;
    /*option1.innerHTML = 
      `<input type="radio" name="choice" id="option1"> ${currentQuestion.answers[0].text}`;
   
    currentQuestion.answers.forEach((answer, index) => {
    options[index].innerHTML = 
      `<input type="radio" name="choice" id="option${index + 1}"> ${answer.text}`;
 
    });
   
    currentQuestion.answers.forEach((answer, index) => {
        if (answer.correct){
        options[index].dataset.correct = answer.correct;//?????
    }
    options[index].addEventListener("click" , selectAnswer);
    })

function resetState() {
    nextbtn.style.display = "none";
}
function selectAnswer(e){
     const selectedbtn = e.target;
     const iscorrect = selectedbtn.dataset.correct ==="true"
     // show answer result 
     if(iscorrect) {
       selectedbtn.classList.add("correct");
       score ++;
     }else{
        selectedbtn.classList.add("incorrect");
     }
     options.forEach(option => {
        if (option.dataset.correct === "true"){
            option.classList.add("correct");
        }
        option.disabled = true ; 
     })
     nextbtn.style.display ="block";
}
const backbtn = document.querySelectorAll(".back-btn"); // Select all labels

function showScorePage() {
    window.location.href = "http://127.0.0.1:5501/score.html";

}
function showScore(){
    resetState();
     //nextbtn.style.display = "block";
     nextbtn.addEventListener("click", showScorePage);

}

   
function handleNextButton() {
    currentquestionIndex++;

    if (currentquestionIndex < questions.length) {
        showQuestion();
    } else if (currentquestionIndex == questions.length) {
        nextbtn.innerHTML = "See Result";
        nextbtn.addEventListener("click", showScorePage);
    }
}


nextbtn.addEventListener("click" , () => {
    if (currentquestionIndex < questions.length ) {
        handleNextButton();
    }else{
        alert(`you scored ${score} out of ${questions.length}`);
        showScorePage()
    }
})
startQuiz ();*/


