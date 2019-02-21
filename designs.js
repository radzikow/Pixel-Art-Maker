$(document).ready(function () {

// variables
const grid = $("#pixel_canvas");

//function to make a grid
function makeGrid() {
let height = $("#input_height").val();
let width = $("#input_width").val();
  for (let rows = 0; rows < height; rows++){
    grid.append("<tr></tr>");                   //add rows
  for(let columns = 0; columns < width; columns++){
    grid.children().last().append("<td></td>");  //add cells
  }
}
};

//function to clear grid
function clearGrid(){
grid.empty();
};

//call clear and make grid functions
$("form").submit(function(event){
clearGrid();
event.preventDefault();
makeGrid();
});

//change color
grid.on("click", "td", function (){
let color = $("#colorPicker").val();
$(this).css("background-color", color);
});

//clear color
grid.on("dblclick", "td", function (){
$(this).css("background-color", "");
});

//drag and draw
grid.on("mouseover", "td", function (event){
let dragColor = $("#colorPicker").val();
if (event.buttons) {
$(this).css("background-color", dragColor);
$(this).css("cursor", "pointer");
}
});

});
