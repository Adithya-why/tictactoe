const gameBoard = (function(){
    let arr = [[],[],[]];
   

    const getBoard=()=>arr;


    return {getBoard};
})();





const gameController = (function(){

    
    const createPlayer = (sign)=>{
        return{sign};
    }
    
    const playerOne = createPlayer("X");
    const playerTwo = createPlayer("O");
    

    let currentPlayer = playerOne;
    const switchTurn = function(turn){
        if(turn===playerOne){
            currentPlayer=playerTwo;
            return playerTwo;
            
        }

        else{
            currentPlayer=playerOne;
            return playerOne;
        }
    }


    const currentPlayerfunc = ()=>currentPlayer;

    const findTie = function(){
        let t = true;
        arrn = gameBoard.getBoard();
        for(i=0;i<arrn.length;i++){
            for(j=0;j<arrn[0].length;j++){
                if(arrn[i][j]===undefined){
                    t = false;
                }
            }
        }

    };


    let findWin = function(){
        for(i=0;i<arr.length;i++){
            for(j=0;j<arr[0].length;j++){
               
            }
        }
    }

    return {playerOne,playerTwo,switchTurn,currentPlayerfunc,findTie,findWin}
})();


const screenController = (function(){
    const arrangefunc = function(){
        const divs= document.querySelectorAll(".r");
        divs.forEach((div)=>{
            let divcl = (div.classList)[1];
            let digs = (divcl.toString().split(''));
            let i,j;
            i = digs[0];
            j=digs[1];
            div.innerHTML = gameBoard.getBoard()[i][j];
            
        });
    };


    const putMark = function(player,i,j){
        gameBoard.getBoard()[i][j]=gameController.currentPlayerfunc().sign;
        arrangefunc();
    };

    const disPlayer = function(){
        const divpl = document.querySelector("h1");
        divpl.innerHTML = `Player ${gameController.currentPlayerfunc().sign}`
    }


    return {arrangefunc,putMark,disPlayer};
})();



const game = function(){
    
    player1 = gameController.playerOne;
    player2 = gameController.playerTwo;
   
    turn = player1;
    const divs = document.querySelectorAll(".r");
    screenController.disPlayer();
    divs.forEach((div)=>{
        div.addEventListener('click',function(e){
          let digs=(e.target.classList)[1].toString().split("");
          screenController.putMark(turn,digs[0],digs[1]);
          gameController.findTie();
          turn = gameController.switchTurn(turn);
          screenController.disPlayer()
        });

    })
}





game();
