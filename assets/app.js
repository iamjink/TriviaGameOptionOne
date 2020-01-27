$(document).ready(function () {
    var QOptions = [
        {
            question: "Which river goes through London?",
            choices: ["Thames", "Ganges", "Yellow River", "River Severn"],
            answer: 1
        },
        {
            question:"When was President Kennedy killed?",
            choices: ["1942", "1961", "1963", "1955"],
            answer: 3
        },
        { 
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 3
        },
    ];

    //setting variables
    var clockRunning = false;
    var time = 15;
    var intervalId;



    //start button
    function reset() {

        //shows start button 

        var startButton = $("<img>")
        startButton.attr("src", "assets/images/startButton.png");
        startButton.attr("id", "start-button")
        $("#questionText").append(startButton);

        //user clicks start button, and first question shows in div

        $("#start-button").on("click", gameStart);

    };

    //start button on click function; starts the questions
    function gameStart() {
        timerStart();
        questionDisplay();

    }

    function questionDisplay() {

        //randomizing objects in question array and creating a new randomized question array called current question
        newIndex = Math.floor(Math.random()*QOptions.length);
        currentQuestion = QOptions[newIndex];

        //displaying new question

        $("#questionText").text(currentQuestion.question);

        
    }

    //timer functions
    function timerStart() {
        clearInterval(intervalId);
        if (!clockRunning) {
            intervalId = setInterval(decrement, 1500);
            console.log("time countdonw starts now");
            clockRunning = true;
        }


    }

    function decrement() {
        time--;
        $("#timerText").text(time);
        if (time === 0) {
            stop();
            console.log("time is up! next question");
        }
    }

    function stop() {
        clockRunning = false;
        clearInterval(intervalId);
    }




    reset();






    //show question in quest{ionText div


    //make buttons for answerChoices

    //if onclick === answers, then show "correct!", then go to the next question

    //when all the questions are answered, then show # of wrongs and # of corrects, 

    //then display play again button





});