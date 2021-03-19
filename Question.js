class Question{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }
      display(){
        this.title.html("My Quiz Game")                              
        this.title.position(350,0)
        this.question.html("Question:- What starts and end with letter'E',but has only one letter ?")
        this.question.position(150,80)
        this.option.html("1: Everyone")
        this.option.position(150,100)
        this.option.html("2: Envlope")
        this.option.position(150,120)
        this.option.html("3: Estimate")
        this.option.position(150,140)
        this.option.html("4: Example")
        this.option.position(150,180)
        this.input.position(150,230)
      }
}