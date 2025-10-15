let questions = [];
let currentQuestion = 0;
let score = 0;
let totalScore = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const restartBtn = document.getElementById("restartBtn");
const progressBar = document.getElementById("progress-bar");
const totalScoreEl = document.getElementById("totalScore");

// Educational Categories
const categories = {
 17: "Science & Nature",
 18: "Science: Computers",
 19: "Science: Mathematics",
 22: "Geography",
 23: "History",
 27: "Animals",
 9: "General Knowledge" // English / Literature
};

// Fetch questions from random educational category
async function fetchQuestions() {
 try {
   const categoryIds = Object.keys(categories);
   const randomCategory = categoryIds[Math.floor(Math.random() * categoryIds.length)];
   const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${randomCategory}&type=multiple`);
   const data = await res.json();
   questions = data.results.map(q => {
     let options = [...q.incorrect_answers, q.correct_answer];
     options = shuffle(options.map(opt => decodeHTML(opt))); // shuffle options
     return {
       question: decodeHTML(q.question),
       options: options,
       answer: decodeHTML(q.correct_answer)
     };
   });
   currentQuestion = 0;
   score = 0;
   showQuestion();
 } catch (err) {
   questionEl.textContent = "Failed to load questions. Please refresh.";
   console.error(err);
 }
}

// Helper: decode HTML entities
function decodeHTML(html) {
 const txt = document.createElement("textarea");
 txt.innerHTML = html;
 return txt.value;
}

// Shuffle array
function shuffle(array) {
 return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
 if (currentQuestion >= questions.length) {
   totalScore += score;
   totalScoreEl.textContent = totalScore;
   fetchQuestions(); // Automatically fetch next batch
   return;
 }

 const q = questions[currentQuestion];
 questionEl.textContent = q.question;
 optionsEl.innerHTML = "";

 // Shuffle options again each time for safety
 const shuffledOptions = shuffle([...q.options]);

 shuffledOptions.forEach(option => {
   const btn = document.createElement("button");
   btn.textContent = option;
   btn.addEventListener("click", () => checkAnswer(option, btn));
   optionsEl.appendChild(btn);
 });

 progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function checkAnswer(option, btn) {
 const q = questions[currentQuestion];
 const buttons = Array.from(optionsEl.children);

 buttons.forEach(b => {
   if (b.textContent === q.answer) {
     b.style.backgroundColor = "green";
     b.style.color = "white";
   } else if (b.textContent === option) {
     b.style.backgroundColor = "red";
     b.style.color = "white";
   }
   b.disabled = true;
 });

 if (option === q.answer) score++;

 currentQuestion++;
 setTimeout(() => showQuestion(), 1200); // show next question after delay
}

// Restart button
restartBtn.addEventListener("click", () => fetchQuestions());

// Start quiz
fetchQuestions();
