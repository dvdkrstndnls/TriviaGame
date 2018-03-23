// # TriviaGame
// * create a trivia form with multiple choice DONE html
//Don't let the player pick more than one answer per question. DONE html
//Don't forget to include a countdown timer.

//   //  Variable that will hold the button alert's timeout when it is clicked.


var delayButtonAlert;

var displayResult;
// //    Timeouts in JavaScript
// //    Set our window alert to run one second after the function's called.
//   var windowTimeout = setTimeout(function() {
//     alert("The Game Begins!");
//     $('#time-left').html = ;
//         // $(document).ready(function(){
//         //     $("#hide").click(function(){
//         //         $("p").hide();
//         //     });
//         //     $("#show").click(function(){
//         //         $("p").show();
//         //     });
//         // });
//   }, 1000);

//   //  Start on click.
//   $("#start").on("click", function() {
    document.getElementById("start").addEventListener("click", myFunction);

    function myFunction() {
        document.getElementById("start").innerHTML = "YOU CLICKED ME!";
    }
    
    var seconds_left = 30;
    var interval = setInterval(function() {
        document.getElementById('timer_div').innerHTML = --seconds_left;
    
        if (seconds_left <= 0)
        {
           document.getElementById('timer_div').innerHTML = "Times Up!";
           clearInterval(interval);
        }
    }, 1000);
    
  
// }
 //The player will have a limited amount of time to finish the quiz. 

//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
    
















// this is probly the advanced stuff, complete later maybe
//only one answer is allowed  
//  * If the player selects the correct answer, 
//  * show a screen congratulating them for choosing the right option. 
//  * After a few seconds, 
//  * display the next question -- 
//  * do this without user input.  
//  * * The scenario is similar for wrong answers 
//  * and time-outs.    
//  * * If the player runs out of time, 
//  * tell the player that time's up 
//  * and display the correct answer. 
//  * Wait a few seconds, 
//  * then show the next question.   
//  * * If the player chooses the wrong answer, 
//  * tell the player they selected the wrong option 
//  * and then display the correct answer. 
//  * Wait a few seconds, 
//  * then show the next question.  
//  * * On the final screen, 
//  * show the number of correct answers, 
//  * incorrect answers, 
//  * and an option to restart the game (without reloading the page).







