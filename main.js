const gameBoard = (function(){
    let arr = [[],[],[]];
   

    const getBoard=()=>arr;

    const reboard = function(){
        arr=[[],[],[]];
    }


    return {getBoard,reboard};
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

    let t= true;
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
    let win = false;

    const findWin = function(){
        arrn = gameBoard.getBoard();
            //row wise
            for(i=0;i<3;i++){
                let srr = arrn[i];
                if(srr.length===3){
                if(srr.every(v=>(v==srr[1]))){
                    win = true;
                    screenController.decWin();
                }
            }
            }


            //column wise
            for(j=0;j<3;j++){
            let celes = [];
            for(i=0;i<3;i++){
                celes.push(arrn[i][j]);
            }
            
            if(celes.length===3 && celes.every(x=>(x!==undefined))){
                if(celes.every(w=>(w==celes[0]))){
                    win = true;
                    screenController.decWin();
                }
            }}



            //diagonal wise

            
            
            if((arrn[0][0]==arrn[1][1]&&arrn[1][1]==arrn[2][2]&&arrn[1][1]!==undefined)  || (arrn[0][2]==arrn[1][1]&&arrn[1][1]==arrn[2][0]&&arrn[1][1]!==undefined)){
                win = true;
                screenController.decWin();
            }
        

            
            
        }



    const isWin=()=>win;


    const reset = function(){
        
        gameBoard.reboard();
        screenController.arrangefunc()
        console.log(currentPlayerfunc())
        if(currentPlayerfunc().sign === "O"){
            switchTurn(currentPlayerfunc());
        }
        win = false;
    }
    

    return {playerOne,playerTwo,switchTurn,currentPlayerfunc,findTie,findWin,isWin,reset}
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

    const decWin = function(){
        console.log('won')
        let winner = gameController.currentPlayerfunc();
        const divpl = document.querySelector("h1");
        divpl.innerHTML = `Player wins`;
        console.log(winner);
    }

    
        const bt = document.querySelector('button');
        bt.addEventListener('click',gameController.reset)
    


    return {arrangefunc,putMark,disPlayer,decWin};
})();



const game = function(){
    
    player1 = gameController.playerOne;
    player2 = gameController.playerTwo;
   
    turn = gameController.currentPlayerfunc();
    const divs = document.querySelectorAll(".r");
    screenController.disPlayer();
    
    divs.forEach((div)=>{
        div.addEventListener('click',function(e){
            if(!gameController.isWin()){
          let digs=(e.target.classList)[1].toString().split("");
          screenController.putMark(turn,digs[0],digs[1]);
          
          gameController.findWin();
          gameController.findTie();
          turn = gameController.switchTurn(turn);
          screenController.disPlayer()
          
            }
        });

    })

}





game();
