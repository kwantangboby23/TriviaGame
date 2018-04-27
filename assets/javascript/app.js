//Click the start button to play game

$(document).ready(function () {
    //set variables
    var countQuestions = 0;
    var array = [];
    var correct = 0;
    var incorrect = 0;
    var notanswer = 0;
    $("button").hide();


    //setting up countdowntimer
    var timer = {
        time: 30,
        //reset all
        reset: function () {
            this.time = 30;
            $(".timeleft").html("<h2>" + this.time + "seconds left</h2>");








        },
        //start timer function
        start: function () {
            counter = setInterval(timer.countdown, 1000);
            $(".start").hide();
            $("button").show();
            callQuestion();

        },
        //stop funtion
        stop: function () {
            clearInterval(counter);
        },
        //countdown function
        countdown: function () {
            timer.time--;
            $(".timeleft").html("<h2>" + timer.time + "seconds left</h2>");
            if (timer.time <= 0) {
                alert("Time is over");
                timer.reset();
                notanswer++;
                console.log("notanswer: " + notanswer);
                nextQuestion();
            }


        }

    }
    //Push start button to play game.

    $(".start").on("click", timer.start);




    //Questions & choices

    var questions = [
        {
            Q: "Which of thses players never scored at least 2500 points in a season?",
            a: "a. Ricky Berry",
            b: "b. Bob McAdoo",
            c: "c. Kevin Durant",
            d: "d. Lebron James",
            answer: "d"
        },

        {
            Q: "In 1980, Oscar Robertson was the NBA's all time leader in assists, who was 2nd?",
            a: "a.Lenny Wilkens",
            b: "b. Magic Johnson",
            c: "c. Bob Cousy",
            d: "d. Jerry west",
            answer: "d"
        },

        {
            Q: "Which of these players has the most All-NBA 1st team selection?",
            a: "a. Bill Russell",
            b: "b. Charles Barkley",
            c: "c. John Stockton",
            d: "d. Dolph Schayes",
            answer: "d"
        },

        {
            Q: "Which of these players reached 25000 points the      fastest?",
            a: "a. Lebron James",
            b: "b. Kareem Abdul-Jabbar",
            c: "c. Michael Jordan",
            d: "d. Wily Chamberlain",
            answer: "d"
        }
    ];

    //call questions

    function callQuestion() {
        array = questions[countQuestions];
        $("#q").text(array.Q);
        $("#a").text(array.a);
        $("#b").text(array.b);
        $("#c").text(array.c);
        $("#d").text(array.d);


    };

    //count correct numbers and incorrect numbers.

    $(".container").on("click", "button", function () {
        if (this.id == array.answer) {
            alert("Correct!");
            correct++;
            console.log("correct: " + correct);


        } else {
            alert("Wrong!");
            incorrect++;
            console.log("incorrect: " + incorrect);
        }

        nextQuestion();
        console.log("countQuestion: " + countQuestions);
    });
    // return corrent, incorrent, unanswered numbers.
    function nextQuestion() {
        countQuestions++;
        console.log("count: " + countQuestions);
        if (countQuestions == questions.length) {
            alert("Correct number: " + correct + "\n" +
                "Incorrect number: " + incorrect + "\n" +
                "Unanswered number: " + notanswer);

            timer.reset();
            timer.stop();
            $("#q").text("Questions");
            allreset();
            $(".start").show();
            $("button").hide();



        }

        else {
            callQuestion();

        }



    }
    // reset all 
    function allreset() {
        countQuestions = 0;
        array = [];
        correct = 0;
        incorrect = 0;
        notanswer = 0;


    }



});

