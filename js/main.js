var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
autoSizeCanvas(canvas)
listenToMouse(canvas)

function listenToMouse(canvas){

  var using = false
  var lastPoint = {"x": undefined, "y": undefined}
  var eraserEnabled = false
  eraser.onclick = function(){
    eraserEnabled = true
    actions.className = 'actions x'
  }
  brush.onclick = function(){
    eraserEnabled = false
    actions.className = 'actions'
  }

  canvas.onmousedown = function(a){
    var x = a.clientX
    var y = a.clientY
    using = true
    if(eraserEnabled){
      context.clearRect(x-5,y-5,20,20)
    }else{
      lastPoint = {"x":x,"y":y}
    }
    
  }
  canvas.onmousemove = function(a){
    var x = a.clientX
    var y = a.clientY

    if(!using){return}

    if(eraserEnabled){
        context.clearRect(x-5,y-5,20,20)
    }else{
      var newPoint = {"x":x,"y":y}
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint
    }
    
  }
  canvas.onmouseup = function(){
    using = false
  }

}








//页面宽度
function autoSizeCanvas(canvas){
  viewPortSize()
  //如果用户更改了视口宽度，那就重新获取宽高。
  window.onresize = function(){
    viewPortSize()
  }
  function viewPortSize(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
  }

}

// 画圆函数
function drawCircle(x,y,radius){
  context.beginPath()
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill()
}

//划线函数
function drawLine(x1,y1,x2,y2){
  context.beginPath()
  context.moveTo(x1,y1)
  context.lineTo(x2,y2)
  context.lineWidth = 2
  context.stroke()
  context.closePath()
}

// 画矩形
// context.fillStyle = 'red'
// context.fillRect(100,100,300,300)
// context.strokeStyle = 'green'
// context.strokeRect(20,20,30,30)

// 画三角形
// context.fillStyle = 'red'
// context.beginPath()
// context.moveTo(10,10)
// context.lineTo(30,30)
// context.lineTo(100,40)
// context.fill()

//canvas 可以在点与点之间划线
