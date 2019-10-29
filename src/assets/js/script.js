function gradeQuiz(event) {
    event.preventDefault(); // prevent actual form submission (so we don't cause the page to reload)

    const submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', () => {location.reload(true)}); // reload page
    submitBtn.innerText = 'Start Over';

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
        
    const results = document.getElementById('results');
    results.innerHTML = `${begin} You've completed your financial knowledge assessment! You got <strong>${score}/5</strong> correct which means your financial knowledge is ${compare}. This score will help us develop your personalized plan to get your financial knowledge right.`;
    results.style.display = 'block';
}
