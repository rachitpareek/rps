var hand = ["rock", "paper", "scissors"];

function rock() {
    $("#player").html("<i class='symbol far fa-hand-rock'></i>");
    rockPaperScissors();
}
function paper() {
    $("#player").html("<i class='symbol far fa-newspaper'></i>");
    rockPaperScissors();
}
function scissors() {
    $("#player").html("<i class='symbol far fa-hand-scissors'></i>");
    rockPaperScissors();
}

function rockPaperScissors() {
    var symbol = arguments.callee.caller.name;
    var rand = hand[Math.floor(Math.random() * 3)];

    switch (rand) {
        case "rock":
            $("#computer").html("<i class='symbol far fa-hand-rock'></i>");
            console.log(symbol == "scissors" ? denoteLoser() : symbol == "paper" ? denoteWinner() : denoteDraw());
            break;
        case "paper":
            $("#computer").html("<i class='symbol far fa-newspaper'></i>");
            console.log(symbol == "rock" ? denoteLoser() : symbol == "scissors" ? denoteWinner() : denoteDraw())
            break;
        case "scissors":
            $("#computer").html("<i class='symbol far fa-hand-scissors'></i>");
            console.log(symbol == "paper" ? denoteLoser() : symbol == "rock" ? denoteWinner() : denoteDraw())
            break;
    }
}

function denoteWinner() {
    $("#result").html("<h1 class='alert alert-success'>You Win!</h1>")
}
function denoteLoser() {
    $("#result").html("<h1 class='alert alert-danger'>You Lose!</h1>")
}
function denoteDraw() {
    $("#result").html("<h1 class='alert alert-info'>You Draw!</h1>")
}