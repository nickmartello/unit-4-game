to play:  https://nickmartello.github.io/unit-4-game/


# FARM GAME

In this game each animal is randomly generated and the goal number is also randomly generated. To start, you click on an animal and a number will appear towards the goal. Each animal has a specified random value. Hit the goal exactly and you win, go over and you LOSE!

```javascript
function changeScore() {
    goal += parseInt($(this).text());

    $(".scoreCounter").text(goal);

    if (parseInt($(".randomNumber").text()) === goal) {
        wins++;
        $(".results").text("You Won!");
        $(".wins").text("Wins: " + wins);
        setDefaultValues();
    } else if (parseInt($(".randomNumber").text()) < goal) {
        $(".results").text("You Lost!");
        losses++;
        $(".losses").text("Losses: " + losses);
        setDefaultValues();
    }
}
     

