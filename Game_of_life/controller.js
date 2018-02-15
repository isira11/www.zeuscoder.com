window.onload = function(){
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")

    let grid = []
    let details = []

    let res = 60
    let l =  600/(res+2)
    randomValueGrid()
    
    grid = format(grid)
 
    draw()
    myLoop()
    var i = 1;                    

function myLoop () {           
    setTimeout(function () {
    grid = format(reCalculate())
    draw()        
      i++;                 
      myLoop()                       
   },)
}

myLoop();    


    function randomValueGrid(){

        for(let i = 0;i<res;i++){
            let row = []
            let value
            for(let j = 0;j<res;j++){

                value = Math.floor(Math.random() * 2)
                
                row.push(value)
            }
            grid.push(row)
        }
    }
    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        for(let j = 0;j<res+2;j++){
            let c = grid[j]
            for(let i = 0;i<res+2;i++){
                if(c[i]==0){
                    ctx.fillStyle = "#000000";
                }else{
                    ctx.fillStyle = "#7d0082";
                }  
                ctx.strokeStyle="#000000";
                ctx.fillRect(i*l, j*l, l, l);
                ctx.strokeRect(i*l, j*l, l, l);
                ctx.stroke(); 
        }
    }
}

function reCalculate(){
    let nextgenGrid = []
    
    let i = 1
    for(i=1;i<res+1;i++){
        let row = []
        let r = grid[i]
        let aliveCells =0;
        
        for(let j = 1;j<res+1;j++){
            let state = r[j]
            let imax = i+1
            let imin = i-1
            let jmax = j+1
            let jmin = j-1
            let a = []
            let totalCells = 0

            for(let k = 0;k<8;k++){
                if(k<3){
                    
                    aliveCells = grid[imin][jmin+k]
                }else if(k>=3 && k<6){
                    aliveCells = grid[imax][jmin+k-3]
                }else if(k>=6 && k<7){
                    aliveCells = grid[i][jmin]
                }else{
                    aliveCells = grid[i][jmax]
                }
                a.push(aliveCells)
                totalCells +=aliveCells
                }

                if(totalCells < 2){
                    value = 0
                }else if(totalCells ==2 || totalCells ==3 && state ==1){
                    value = state
                }else if(totalCells>3){
                    value = 0
                }else if (totalCells ==3 && state == 0){
                    value = 1
                }
                row.push(value)
            }
            nextgenGrid.push(row)
            }
            return nextgenGrid;

        }

        function format(g){
        
            let r = []
            let gr =[]
            for(let i=0;i<res+2;i++){
                r.push(0)
            }
       
            gr.push(r)
     
            let i
            for(i = 0;i<res;i++){
                r = []
                r.push(0)
                for(j=0;j<res;j++){
               
                r.push(g[i][j])
                }
                r.push(0)
                gr.push(r)
            }
            r = []
            for(let i=0;i<res+2;i++){
                r.push(0)
            }
            gr.push(r)
            return gr
        }



    
}



    
