var mouseEvent = "empty"
canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
canvas.addEventListener("mousedown", My_mousedown)
function My_mousedown(e)
{
   mouseEvent="mouseDown"
   color = document.getElementById("color").value
   lineWidth= document.getElementById("width").value
   radius= document.getElementById("radius").value
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    console.log("Current positionof x and y coordinates= ");
    console.log("x= " + current_position_of_mouse_x,"y= " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth = lineWidth
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
    }
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
