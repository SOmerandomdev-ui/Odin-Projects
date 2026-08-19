let isHovered;
let Down = false;
let button = document.querySelector(".change-grid")
let grid = document.querySelector(".Container")

//Makes a listener to if the button is clicked, depending on what the number is excuetes the make grid function 
button.addEventListener("click", () => {
let amount = prompt("What grid length do you want (Enter one number)");

while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

for (i = 1; i <= amount; i++) {
    let row = document.createElement("div")
    row.className = ("row")
    grid.appendChild(row)

    for (j = 0; j < amount; j++) {
        let tiles = document.createElement("div")
        tiles.className = "tiles"
        row.appendChild(tiles)
       
    }       

    grid.style.width = "(20*amount)px";
    grid.style.height = "(20*amount)px";
    grid.style.border = "3px black solid";
}

let tiles = document.querySelectorAll(".tiles");




tiles.forEach(tile => {

    tile.addEventListener("mousedown", () => {
        Down = true;
    });

    tile.addEventListener("mouseup", () => {
        Down = false;
    });

    tile.addEventListener("mouseenter", () => {
        isHovered = true;
    });

    tile.addEventListener("mouseleave", () => {
        isHovered = false;
    });
    
    tile.addEventListener("mousedown", () => {
        //rgb generator
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        color = `rgb(${r},${g},${b})`;
        tile.style.backgroundColor = color;  
    })
        
    tile.addEventListener("mouseenter", () => {
        if (Down) {
            const r = Math.floor(Math.random() * 256); 
            const g = Math.floor(Math.random() * 256); 
            const b = Math.floor(Math.random() * 256); 
            const color = `rgb(${r},${g},${b})`;
            tile.style.backgroundColor = color;
        }})

})})



//For when the person hovers over the tiles






