function randomValueGrid(){
    this.grid = []
}
randomValueGrid.prototype.gridGenerator = function(){
    let res = 10
    let row = []

    for(let i = 0;i<res;i++){
        let row = []
        for(let j = 0;j<res;j++){
            let value = Math.floor(Math.random() * 2)
            row.push(value)
        }
        this.grid.push(row)
    }
    console.table(grid)
}
