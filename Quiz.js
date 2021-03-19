class Quiz{
    constructor(){
    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
       
         }
      }
      
      play(){
        question.hide();
        background("yellow")
        fill (0);
        textSize(30);
        text("Result of the Quiz",340,50)
        text("-----------------------------",320,65)
        Contestant.getPlayerInfo();
        if(allContestant!==undefined){
        var display_answer=230
        fill ("blue")
        textSize(20)
        text("Contestant who answered correct are highlghted in green colour",130,230)
        for(var plr in allCotestant){
          var correctAns="2"
          if (correctAns===allContestant[plr].answer)
          fill ("Green")
          else{
            fill ("red")
          }
          display_answer+=30
          textSize(20)
           text(allCotestants[plr].name+": "+allContestants[plr.answer,250,display_answer])
        }
        }
      }
      display(){
        
        question = new Question()
        question.display();
      }
}