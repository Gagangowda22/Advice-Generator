// https://api.adviceslip.com

const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");
const adviceId = document.querySelector(".title");

let adviceNo = 1;

async function adviceData() {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/${adviceNo}`
    );

    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.error(error);
  }
}

async function updateAdvice() {
  const adviceText = await adviceData();
  adviceId.textContent = `Advice #${adviceNo}`;
  advice.textContent = `"${adviceText}"`;
}

updateAdvice();

dice.addEventListener("click", () => {
  adviceNo++;
  updateAdvice();
});
