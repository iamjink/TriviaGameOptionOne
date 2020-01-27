$(document).ready(function () {

    var QOptions = [{
            question: "Which river goes through London?",
            choices: ["Thames", "Ganges", "Yellow River", "River Severn"],
            answer: 0
        },
        {
            question: "When was President Kennedy killed?",
            choices: ["1942", "1961", "1963", "1955"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
        {
            question: "What’s the smallest type of tree in the world?",
            choices: ["Ash", "Birch", "Bonsai", "Acacia"],
            answer: 2
        },
    ];

    //setting variables
    var clockRunning = false;
    var time = 15;
    var intervalId;
    var newIndex;
    var currentQuestion;
    var userGuess = "";
    var correctCount = 0;
    var wrongCount = 0;

    //start button
    function reset() {
        //shows start button 

        var startButton = $("<img>")
        startButton.attr("src", "assets/images/startButton.png");
        startButton.attr("id", "start-button")
        $("#questionText").append(startButton);

        //user clicks start button, and first question shows in div

        $("#start-button").on("click", questionDisplay);

    };


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
        time = 15;
    }



    function questionDisplay() {

        //randomizing objects in question array and creating a new randomized question array called current question
        newIndex = Math.floor(Math.random() * QOptions.length);
        currentQuestion = QOptions[newIndex];

        //displaying new question
        timerStart();

        $("#questionText").text(currentQuestion.question);

        $("#answerChoices").empty();


        for (var i = 0; i < currentQuestion.choices.length; i++) {

            var userGuess = $("<div>");
            userGuess.addClass("answerBlock");
            userGuess.html(currentQuestion.choices[i]);
            userGuess.attr("value", i);
            $("#answerChoices").append(userGuess);
        }

        $(".answerBlock").on("click", function () {

            userGuess = ($(this).attr("value"));

            if (userGuess == currentQuestion.answer) {
                stop();
                correctCount++;
                console.log("correct!")
                questionDisplay();

            } else {
                stop();
                wrongCount++;
                console.log("incorrect!")
                questionDisplay();
            }

            if ((correctCount + wrongCount) == QOptions.length) {
                $("#questionText").text("You answered " + correctCount + " correct!")
                $("#answerChoices").empty();

                //reset button
                var startButton = $("<img>")
                startButton.attr("src", "assets/images/resetButton.png");
                startButton.attr("id", "start-button")
                $("#questionText").append(startButton);
                $("#start-button").on("click", questionDisplay);
            }

        });

    }


    reset();




});