//Click the start button to play game

$(document).ready(function () {
    //count Questions
    var countQuestions = 0;
    var array = [];
    var correct = 0;
    var incorrect = 0;
    var notanswer = 0;

    //setting up countdowntimer
    var timer = {
        time: 30,
        //reset function
        reset: function () {
            this.time = 30;
            $(".timeleft").html("<h2>" + this.time + "seconds left</h2>");

        },
        //start function
        start: function () {
            counter = setInterval(timer.countdown, 1000);
            $(".start").hide();
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
                console.log(notanswer);
            }


        }

    }

    $(".start").on("click", timer.start);

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


    function callQuestion(){
        array = questions[countQuestions];
        $(".questions").html(array.Q);
        $("#a").text(array.a);
        $("#b").text(array.b);
        $("#c").text(array.c);
        $("#d").text(array.d);
        

    };


    $(".container").on("click","button", function(){
        if( this.id == array.answer) {
            alert("Correct!");
            correct++;
            console.log(correct);
            
        } else {
            alert("Wrong!");
            incorrect++;
            console.log(incorrect);
        }
    });



    
    






});

//Push start button to play the game


// var nba = {
    //questions: ["Which of thses players never scored at least 2500 points in a season?",
                //"In 1980, Oscar Robertson was the NBA's all time leader in assists, who was 2nd?",
                //"Which of these players has the most All-NBA 1st team selection?",
                //"Whihc of these players reached 25000 points the fastest?"] 

/*
    //question1: ["a. Rick Barry"
             "b. Bob McAdoo"
             "c. Kevin Durant"
             "d. LeBron James"] answer : d
    
             
    //question2:  ["a.Lenny Wilkens",
                "b. Magic Johnson",
                "c. Bob Cousy"
                "d. Jerry west"] answer: a

    //question3:  ["a. Bill Russell",
                   "b. Charles Barkley",
                   "c. John Stockton",
                   "d. Dolph Schayes"] answer : d

    //question4: ["a. Lebron James",
                  "b. Kareem Abdul-Jabbar"
                  "c. Michael Jordan",
                  "d. Wily Chamberlain"] answer : d

    ]





}*/