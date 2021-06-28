const quizData = [
  {
    question: 'Who won th last world cup?',
    a: 'Germany',
    b: 'France',
    c: 'Nigeria',
    d: 'Spain',
    correct: 'd',
  },
  {
    question: 'What language runs on web browsers?',
    a: 'Java',
    b: 'Kotlin',
    c: 'Javascript',
    d: 'Python',
    correct: 'c',
  },
  {
    question: 'Who is the current president of Nigeria?',
    a: 'Abacha',
    b: 'Jonathan',
    c: 'Buhari',
    d: 'Falz',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const answerELs = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question-text');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerELs.forEach(
    (answerEL) => (answerEL.checked = false)
  );
};

const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2>You have answered ${score}/${quizData.length} questions correctly</h2>

           <button onClick='location.reload()'>Reload</button>
           `;
    }
  }
});

const getSelected = () => {
  let answer;

  answerELs.forEach((answerEL) => {
    if (answerEL.checked) {
      answer = answerEL.id;
    }
  });
  return answer;
};
