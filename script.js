const questions = [
    {
        question: "最近是否經常覺得疲倦？",
        answers: [
            { text: "是，經常覺得疲倦", score: 2 },
            { text: "偶爾會", score: 1 },
            { text: "幾乎不會", score: 0 }
        ]
    },

    {
        question: "最近是否容易手腳冰冷？",
        answers: [
            { text: "是，經常手腳冰冷", score: 2 },
            { text: "偶爾會", score: 1 },
            { text: "幾乎不會", score: 0 }
        ]
    },

    {
        question: "最近是否容易口渴？",
        answers: [
            { text: "是，經常口渴", score: 2 },
            { text: "偶爾會", score: 1 },
            { text: "幾乎不會", score: 0 }
        ]
    },

    {
        question: "最近是否容易腹脹或消化不良？",
        answers: [
            { text: "是，經常發生", score: 2 },
            { text: "偶爾會", score: 1 },
            { text: "幾乎不會", score: 0 }
        ]
    },

    {
        question: "最近睡眠品質如何？",
        answers: [
            { text: "經常睡不好", score: 2 },
            { text: "偶爾睡不好", score: 1 },
            { text: "大致良好", score: 0 }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

function showQuestion() {

    const questionData = questions[currentQuestion];

    document.getElementById("question").textContent =
        "問題 " + (currentQuestion + 1) + "／" + questions.length;

    document.querySelector("#question-box p").textContent =
        questionData.question;

    const answerArea = document.querySelector("#question-box");

    const oldAnswers = document.querySelectorAll(
        'input[name="answer"]'
    );

    oldAnswers.forEach(function(input) {
        input.parentElement.remove();
    });

    questionData.answers.forEach(function(answer) {

        const label = document.createElement("label");

        label.innerHTML =
            '<input type="radio" name="answer" value="' +
            answer.score +
            '">' +
            answer.text;

        answerArea.insertBefore(
            label,
            answerArea.querySelector("button")
        );

        answerArea.insertBefore(
            document.createElement("br"),
            answerArea.querySelector("button")
        );
    });
}

function nextQuestion() {

    const answer = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!answer) {
        alert("請先選擇一個答案！");
        return;
    }

    totalScore += Number(answer.value);

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        alert(
            "檢測完成！\n\n你的總分是：" +
            totalScore +
            " 分"
        );
    }
}

showQuestion();
