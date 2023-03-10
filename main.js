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

    let findTie = function(){
        let t = true;
        for(i=0;i<arr.length;i++){
            for(j=0;j<arr[0].length;j++){
                if(arr[i][j]===undefined){
                    t = false;
                }
            }
        }

        console.log(t);



    };


    let findWin = function(){
        
    }

    return {arr,arrangefunc,putMark,findTie};
})();



const game = function(player1,player2,gameBoard){
    turn = player1;
    console.log(turn);
    const divs = document.querySelectorAll(".r");
    divs.forEach((div)=>{
        div.addEventListener('click',function(e){
          let digs=(e.target.classList)[1].toString().split("");
          gameBoard.putMark(turn,digs[0],digs[1]);
          gameBoard.findTie();

          if(turn == player1){
            turn = player2;
            console.log(turn);
          } 

          else{
            turn=player1;
            console.log(turn);
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
