//JS BEGINS
var panel = $('#quiz-area');


///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS

///////////////////////////////////////////////////////////////////////////////


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});
/////////////
//work into below


// <p class="question">1. Globally, Robot-to-Worker ratios are rising rapidy in factories around the world. In 2017, per every 100 US workers there were...?</p>        

// <ul class="answers">            
// <input type="radio" name="q1" value="a" id="q1a"><label for="q1a">50 robots  </label>          
// <input type="radio" name="q1" value="b" id="q1b"><label for="q1b">0.0000067 robots   </label>           
// <input type="radio" name="q1" value="c" id="q1c"><label for="q1c">1.64 robots    </label>            
// <input type="radio" name="q1" value="d" id="q1d"><label for="q1d">10 robots</label>       
// </ul>        
// <br>
// <p class="question">2. As their numbers grow, the cost of robots' implementation...?</p>        

// <ul class="answers">            
// <input type="radio" name="q2" value="a" id="q2a"><label for="q2a">grows in lock step</label><br/>           
// <input type="radio" name="q2" value="b" id="q2b"><label for="q2b">shrinks</label><br/>            
// <input type="radio" name="q2" value="c" id="q2c"><label for="q2c">stays the same</label><br/>           
// <input type="radio" name="q2" value="d" id="q2d"><label for="q2d">has no relation to their number</label><br/>       
// </ul> 
// <br>
// <p class="question">3. The Developing World is most at risk. For example in Ethiopia, what percantage of jobs are at risk of being automated?</p>
      
// <ul class="answers">            
// <input type="radio" name="q3" value="a" id="q3a"><label for="q3a">5%</label>            
// <input type="radio" name="q3" value="b" id="q3b"><label for="q3b">100%</label>           
// <input type="radio" name="q3" value="c" id="q3c"><label for="q3c">34%</label>           
// <input type="radio" name="q3" value="d" id="q3d"><label for="q3d">88%</label>       
// </ul>        


// <br>
// <p class="question">4. The Developed World is not much better off. The percentage of jobs in Houston, TX at risk of being automated is...?</p>    

// <ul class="answers">           
// <input type="radio" name="q4" value="a" id="q4a"><label for="q4a">92.35%</label>            
// <input type="radio" name="q4" value="b" id="q4b"><label for="q4b">3.7%</label>           
// <input type="radio" name="q4" value="c" id="q4c"><label for="q4c">45.8%</label>           
// <input type="radio" name="q4" value="d" id="q4d"><label for="q4d">10.2%</label>      
// </ul>        


// <br>
// <p class="question">5.The problem is bigger than manufacturing. The liklihood of an Insurance Underwriting job being automated is...?</p>
       
// <ul class="answers">            
// <input type="radio" name="q5" value="a" id="q5a"><label for="q5a">99%</label>           
// <input type="radio" name="q5" value="b" id="q5b"><label for="q5b">72%</label>            
// <input type="radio" name="q5" value="c" id="q5c"><label for="q5c">46%</label>          
// <input type="radio" name="q5" value="d" id="q5d"><label for="q5d">1%</label>       
// </ul> 

///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "1. Globally, Robot-to-Worker ratios are rising rapidy in factories around the world. In 2017, per every 100 US workers there were...?",
  answers: ["50 robots", "0.0000067 robots", "1.64 robots", "10 robots"],
  correctAnswer: "1.64 robots"
}, {
  question: "2. As their numbers grow, the cost of robots' implementation...?",
  answers: ["grows in lock step", "shrinks", "stays the same", "has no relation to their number"],
  correctAnswer: "shrinks"
}, {
  question: "3. The Developing World is most at risk. For example in Ethiopia, what percantage of jobs are at risk of being automated?",
  answers: ["5%", "100%", "34%", "88%"],
  correctAnswer: "88%"
}, {
  question: "4. The Developed World is not much better off. The percentage of jobs in Houston, TX at risk of being automated is...?",
  answers: ["92.35%", "3.7%", "45.8%", "10.2"],
  correctAnswer: "45.8%"
}, {
  question: "5.The problem is bigger than manufacturing. The liklihood of an Insurance Underwriting job being automated is...?",
  answers: ["99%", "72%", "46%", "1%"],
  correctAnswer: "99%"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:30,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">');
        panel.append('<label for="question-' + i + '">' + questions[i].answers[j] + '</label>')
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('.w3-container').remove();
    panel.html('Ok, you are all done!');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};
