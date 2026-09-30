let score = 0;

function nextQuestion() {

    const answer = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!answer) {
        alert("請先選擇一個答案！");
        return;
    }

    score += Number(answer.value);

    alert("答案已記錄！目前分數：" + score);
}
