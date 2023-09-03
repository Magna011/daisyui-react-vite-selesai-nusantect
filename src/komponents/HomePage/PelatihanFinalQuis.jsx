import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  { 
    question: 'Apa ibukota dari Indonesia?',
    answers: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'],
    correct: 0,
  },
  {
    question: 'Siapakah penemu relativitas umum dan khusus?',
    answers: ['Isaac Newton', ' Albert Einstein', ' Galileo Galilei', 'Nikola Tesla'],
    correct: 1,
  },
  {
    question: 'Berapa banyak planet dalam tata surya kita?',
    answers: ['7', '8', '9', '10'],
    correct: 1,
  },
  {
    question: 'Apa warna yang dihasilkan ketika merah dan biru dicampur?',
    answers: ['Kuning', 'Pink', 'Hitam', 'Ungu'],
    correct: 3,
  },
  {
    question: 'Siapakah pelukis terkenal yang menciptakan Mona Lisa?',
    answers: [' Vincent van Gogh', 'Michelangelo', ' Pablo Picasso', 'Leonardo da Vinci'],
    correct: 3,
  },
  {
    question: 'Apa bahasa yang paling banyak digunakan di seluruh dunia?',
    answers: ['Jepang', 'Inggris', 'China(Mandarin)', 'Indonesia'],
    correct: 1,
  },
  {
    question: 'Molekul air terdiri dari berapa atom?',
    answers: ['1', '2', '3', 'Unlimited Edition'],
    correct: 1,
  },
  {
    question: 'Apa nama benua terbesar di dunia?',
    answers: ['Asia', 'Atlantik', 'Amerika', 'Pangea'],
    correct: 3,
  },
  // ... Isi pertanyaan lainnya
];

function PelatihanFinalQuis() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(210); // 3 menit 30 detik
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning) {
      if (timeLeft === 0) {
        finishQuiz();
      } else {
        const timerInterval = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerInterval);
      }
    }
  }, [timeLeft, timerRunning]);

  const startQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResults(false);
    setScore(0);
    setTimeLeft(210);
    setTimerRunning(true);
  };

  const finishQuiz = () => {
    setTimerRunning(false);
    setShowResults(true);
  };

  const handleAnswerClick = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      if (index === questions[currentQuestion].correct) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const prevQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-left items-left p-5 m-2 font-bold ">
        <p>Final Quis</p>
      </div>
      <div className=" flex justify-center items-center">
        <div className="card p-5 mb-5 w-[1250px] h-[400px] bg-base-400 shadow-xl border border-black border-t-1">
          <div className="card-body">
            <div className="App">
              <div className="quiz-container">
                {timerRunning ? (
                  <div className="timer">
                    <p>{`${String(Math.floor(timeLeft / 60)).padStart(
                      2,
                      '0'
                    )}:${String(timeLeft % 60).padStart(2, '0')}`}</p>
                  </div>
                ) : (
                  <div className="start-button">
                    <button onClick={startQuiz}>Mulai Kuis</button>
                  </div>
                )}

                {showResults ? (
                  <div className="results">
                    <h2>Hasil Kuis</h2>
                    <p>Skor Anda: {score}</p>
                    <button onClick={startQuiz}>Coba Lagi</button>
                  </div>
                ) : (
                  <div>
                    <div className="question">
                      <p>{questions[currentQuestion].question}</p>
                    </div>
                    <div className="answers">
                      {questions[currentQuestion].answers.map(
                        (answer, index) => (
                          <button
                            key={index}
                            className={`answer ${
                              selectedAnswer === index && 'selected'
                            }`}
                            onClick={() => handleAnswerClick(index)}
                            disabled={selectedAnswer !== null}
                          >
                            {answer}
                          </button>
                        )
                      )}
                    </div>
                    <div className="pagination">
                      <button
                        className="px-3"
                        onClick={prevQuestion}
                        disabled={currentQuestion === 0}
                      >
                        Sebelumnya
                      </button>

                      <button
                        className="px-3"
                        onClick={nextQuestion}
                        disabled={currentQuestion === questions.length - 1}
                      >
                        Selanjutnya
                      </button>

                      {currentQuestion === questions.length - 1 && (
                        <button className="px-3" onClick={finishQuiz}>
                          Kumpulkan
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PelatihanFinalQuis;
