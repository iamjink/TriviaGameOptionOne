$(document).ready(function () {

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

    //start button on click function
    function gameStart() {
        $("#questionText").text("Question One");
        timerStart();
    }

    //timer functions
    function timerStart() {
        clearInterval(intervalId);

        intervalId = setInterval(decrement, 1500);
        console.log("time countdonw starts now");

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
        clearInterval(intervalId);
    }




    reset();






    //show question in quest{ionText div


    //make buttons for answerChoices

    //if onclick === answers, then show "correct!", then go to the next question

    //when all the questions are answered, then show # of wrongs and # of corrects, 

    //then display play again button





});