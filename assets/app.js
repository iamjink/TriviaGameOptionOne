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
            question: " Which is the only mammal that can’t jump?",
            choices: ["Gorilla", "Dolphin", "Kangaroo", "Elephant"],
            answer: 3
        },
        {
            question: "Which country consumes the most chocolate per capita?",
            choices: ["Sweden", "Switzerland", "Denamrk", "Belgium"],
            answer: 1
        },
        {
            question: "Which two U.S. states don't observe Daylight Saving Time?",
            choices: ["Alaska and Hawaii", "Washington and New York", "Arizona and Hawaii", "Arizona and California"],
            answer: 2
        },
        {
            question: "What was the first toy to be advertised on television?",
            choices: ["Hot Wheels", "Cabbage Patch Kids", "Woody", "Mr. Potato Head"],
            answer: 3
        },
        {
            question: "What is the loudest animal on Earth?",
            choices: ["Sperm whale", "Cheetah", "Elephant", "Dogs"],
            answer: 2
        },
        {
            question: "Which planets in our solar system do not have moons?",
            choices: ["Jupiter and Mercury", "Mercury and Venus", "Saturn and Jupiter", "Neptune and Uranus"],
            answer: 1
        },
        {
            question: "How many languages are written from right to left?",
            choices: ["12", "22", "15", "5"],
            answer: 0
        },
    ];

    //setting variables
    var clockRunning = false;
    var time = 16;
    var intervalId;
    var newIndex;
    var currentQuestion;
    var userGuess = "";
    var correctCount = 0;
    var wrongCount = 0;



    var startButton = $("<img>")
    startButton.attr("src", "assets/images/startButton.png");
    startButton.attr("id", "start-button")
    $("#questionText").append(startButton);
    $("#start-button").on("click", questionDisplay);


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
                console.log((correctCount + wrongCount));


                $("#questionText").text("Correct!");
                $("#answerChoices").empty();

                setTimeout(function () {
                    questionDisplay()
                }, 2000);



            } else {
                stop();
                wrongCount++;
                console.log((correctCount + wrongCount));
                var j = currentQuestion.answer;
                $("#questionText").text("Wrong! The correct answer is " + currentQuestion.choices[j] + "!");
                $("#answerChoices").empty();
                setTimeout(function () {
                    questionDisplay();
                }, 2000);

            }




        });

        if ((correctCount + wrongCount) === QOptions.length) {
            stop();
            $("#questionText").text("You answered " + correctCount + " correct!")
            $("#answerChoices").empty();
            //reset button
            var resetButton = $("<img>")
            resetButton.attr("src", "assets/images/resetButton.png");
            resetButton.attr("id", "reset-button")
            resetButton.attr("class", "reset")
            $("#questionText").append(resetButton);
            $(".reset").on("click", questionDisplay);
        }

    }


    //start button
    function reset() {
        //shows start button 

        var startButton = $("<img>")
        startButton.attr("src", "assets/images/startButton.png");
        startButton.attr("id", "start-button")
        $("#questionText").append(startButton);
        $("#start-button").on("click", questionDisplay);


    };


    //timer functions
    function timerStart() {
        clearInterval(intervalId);
        if (!clockRunning) {
            intervalId = setInterval(decrement, 1600);
            console.log("time countdonw starts now");
            clockRunning = true;
        }
    }

    function decrement() {
        time--;
        $("#timerText").text(time);
        if (time === 0) {
            stop();
            wrongCount++;
            console.log((correctCount + wrongCount));
            $("#questionText").text("The correct answer is " + currentQuestion.choices[currentQuestion.answer] + "!");
            $("#answerChoices").empty();
            setTimeout(function () {
                questionDisplay();
            }, 2000);
        }
    }

    function stop() {
        clockRunning = false;
        clearInterval(intervalId);
        time = 16;
    }



});