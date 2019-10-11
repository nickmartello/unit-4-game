function score() {
    return Math.floor(Math.random() * (120)) + 19;
}
function animalScore() {
    return Math.floor(Math.random() * (12)) + 1;
}
$(".randomNumber").text(score());
var goal = 0;
var wins = 0;
var losses = 0;
function changeScore() {
    goal += parseInt($(this).text());

    $(".scoreCounter").text(goal);

    if (parseInt($(".randomNumber").text()) === goal) {
        wins++;
        $(".status").text("You Won!");
        $(".wins").text("Wins: " + wins);
        setDefaultValues();
    } else if (parseInt($(".randomNumber").text()) < goal) {
        $(".status").text("You Lost!");
        losses++;
        $(".losses").text("Losses: " + losses);
        setDefaultValues();
       
    }
}
$("#chipmunkPic").text(animalScore());
$("#dogPic").text(animalScore());
$("#hippoPic").text(animalScore());
$("#pigPic").text(animalScore());


$("#chipmunkPic").on("click", changeScore);
$("#dogPic").on("click", changeScore);
$("#hippoPic").on("click", changeScore);
$("#pigPic").on("click", changeScore);

function setDefaultValues() {
    $(".scoreCounter").text("0");
    goal = 0;
    $(".randomNumber").text(score());
    $("#chipmunkPic").text(animalScore());
    $("#dogPic").text(animalScore());
    $("#hippoPic").text(animalScore());
    $("#pigPic").text(animalScore());
}















