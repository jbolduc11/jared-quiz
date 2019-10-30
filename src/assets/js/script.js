function gradeQuiz(event) {
    event.preventDefault(); // prevent actual form submission (so we don't cause the page to reload)

    // DOM elements we care about
    const submitBtn = document.getElementById('submit-btn');
    const training = document.getElementById('training');
    const h1 = document.getElementsByTagName('h1')[0];
    const quiz = document.getElementById('quiz-form');
    const nextBtn = document.getElementById('next-btn');
    const results = document.getElementById('results');
    const trainingParagraph = document.querySelector('#training p');
    const restartBtn = document.getElementById('restart-btn');

    /*** Begin Quiz Stuff ***/
    const answerKey  = ['c', 'c', 'a', 'a', 'b'],
          answers = document.querySelectorAll('input:checked');
    let score = 0;

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].value !== answerKey[i]) {
            answers[i].parentElement.className = 'incorrect';
        } else {
            score++;
        }
    }

    let begin = '',
        compare = '';

    switch (score) {
        case 0:
            begin = 'Ouch!';
            compare = 'We have some work to do';
            break;
        case 1:
            begin = 'Great Effort!';
            compare = 'Below Average';
            break;
        case 2:
            begin = 'Great!';
            compare = 'Average';
            break;
        case 3:
            begin = 'Great!';
            compare = 'Average';
            break;
        case 4:
            begin = 'Well done!';
            compare = 'Above Average';
            break;
        case 5:
            begin = 'Well done!';
            compare = 'Above Average';
            break;
    } 

    results.innerHTML = `${begin} You've completed your financial knowledge assessment! You got <strong>${score}/5</strong> correct which means your financial knowledge is ${compare}. This score will help us develop your personalized plan to get your financial knowledge right.`;
    results.style.display = 'block';
    /*** End Quiz Stuff ***/


    /*** Begin Training Stuff ***/
    const trainingMaterial = [
        "This training material 1",
        "This training material 2<br>This one has 2 lines",
        "This training material 3",
        "This training material 4",
        "This training material 5",
        "You've completed the training material."
    ];

    submitBtn.innerText = 'Start Training';
    submitBtn.addEventListener('click', () => {
        h1.innerHTML = 'SoFi Financial Literacy Training';
        quiz.style.display = 'none'; 
        training.style.display = 'block';

        let clickCount = 0;
        trainingParagraph.innerHTML = trainingMaterial[clickCount];
        
        nextBtn.addEventListener('click', () => {
            clickCount++;
            trainingParagraph.innerHTML = trainingMaterial[clickCount];
            if (clickCount === trainingMaterial.length - 1) { // We're out of training material
                nextBtn.style.display = 'none';
                restartBtn.style.display = 'inline-block';
            }
        });

        restartBtn.addEventListener('click', () => {
            location.reload(true); // Refresh page to start quiz over
        });
    });
    /*** End Training Stuff ***/
}
