const gameBoard = (function(){
    let arr = [[],[],[]];
    let arrangefunc = function(){
        const divs= document.querySelectorAll(".r");
        divs.forEach((div)=>{
            let divcl = (div.classList)[1];
            let digs = (divcl.toString().split(''));
            let i,j;
            i = digs[0];
            j=digs[1];
            div.innerHTML = arr[i][j]
        });
    };

    let putMark = function(player,i,j){
        arr[i][j]=player.sign;
        arrangefunc();
    };

    return {arr,arrangefunc,putMark};
})();





const game = function(player1,player2,gameBoard){
    turn = player1;
    const divs = document.querySelectorAll(".r");
    divs.forEach((div)=>{
        div.addEventListener('click',function(e){
          let digs=(e.target.classList)[1].toString().split("");
            console.log(turn.sign)
          gameBoard.putMark(turn,digs[0],[digs[1]]);
          if(turn == player1){
            turn = player2;
          } 

          else{
            turn=player1;
          }
        });

    })
}


const player = (sign)=>{
    return{sign};
}

const playerOne = player("X");
const playerTwo = player("O");



gameBoard.arrangefunc();
game(playerOne,playerTwo,gameBoard);
