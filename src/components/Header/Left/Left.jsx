import React from 'react'

const Left = () => {
    
  return (
    <div>
        function calculateResult() {
      let score = 0;
      const form = document.forms['quizForm'];
      for (let i = 1; i <= 10; i++) {
        const q = form['q' + i];
        if (q.value === "") {
          alert("Будь ласка, відповідай на всі питання.");
          return;
        }
        score += parseInt(q.value || 0);
      }

      let resultText = "";
      if (score >= 8) {
        resultText = "🔥 Вітаю! У тебе є всі задатки успішного бізнесмена.";
      } else if (score >= 5) {
        resultText = "⚖️ Ти маєш потенціал, але варто розвивати навички та впевненість.";
      } else {
        resultText = "❌ Поки що бізнес — не твоя сильна сторона. Спробуй попрацювати над мисленням.";
      }

      document.getElementById('result').style.display = "block";
      document.getElementById('result').innerText = `Твій результат: ${score}/10\n${resultText}`;
    }
    </div>
  )
}

export default Left
