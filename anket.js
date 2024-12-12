/* Soruları ve seçenekleri içeren bir array oluştur.
Kullanıcıdan her soru için cevap al ve sonuçları obje olarak tut.*/

let questions = [
  "You regularly make new friends.",
  "You usually feel more persuaded by what resonates emotionally with you than by factual arguments.",
  "Your living and working spaces are clean and organized.",
];
let choices = ["Agree", "Disagree"];

let answers = [];

for (let i = 0; i < questions.length; i++) {
  alert(`Question ${i + 1}: ${questions[i]}`);
  alert(`Choices: ${choices.join("/")}`);
  let answer = prompt("Your answer: ");

  answers.push({
    question: questions[i],
    answer: answer,
  });
}

console.log(answers);
