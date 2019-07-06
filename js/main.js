
var div = document.getElementById('canvas')

div.onmousedown = function(aaa){
  var x = aaa.clientX
  var y = aaa.clientY
  console.log(x,y)

  var divB = document.createElement('div')
  divB.style = "width: 6px; height: 6px; background: black"+
    "position: absolute; top: "+
    (y-3)+"px;"+"left: "+(x-3)+"px;"+"border-radius: 3px;"
  
  div.appendChild(divB)
}












































//怎么画点？
function drawCircle(x,y,radius){
	context.beginPath()
	context.fillStyle = 'pink'
	context.arc(x,y,1,0,Math.PI*2) //前两个是位置，中间是半径-radius，后面是角度
	context.fill()
}

//怎么画线/连线？
function drawLine(x1,y1,x2,y2){
	context.beginPath()
	context.strokeStyle = 'black'
	context.moveTo(x1,y1)
	context.lineWidth = 5
	context.lineTo(x2,y2)
	context.stroke()
	context.closePath()
}


