var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var lineWidth = 3
autoSizeCanvas(canvas)
listenToUser(canvas)

function listenToUser(canvas){

  var using = false
  var lastPoint = {"x": undefined, "y": undefined}

  //特性检测，检测的是特性
  if( document.body.ontouchstart !== undefined ){
    var eraserEnabled = false

    var lineWidth = 3

    brush.onclick = function(){
      eraserEnabled = false
      brush.classList.add('active')
      eraser.classList.remove('active')
    }
    eraser.onclick = function(){
      eraserEnabled = true
      eraser.classList.add('active')
      brush.classList.remove('active')
    }

    black.onclick = function(){
      context.fillStyle = 'black'
      context.strokeStyle = 'black'
      black.classList.add('active')
      red.classList.remove('active')
      green.classList.remove('active')
      brown.classList.remove('active')
    }
    red.onclick = function(){
      context.fillStyle = 'red'
      context.strokeStyle = 'red'
      red.classList.add('active')
      green.classList.remove('active')
      brown.classList.remove('active')
      black.classList.remove('active')
    }
    green.onclick = function(){
      context.fillStyle = 'green'
      context.strokeStyle = 'green'
      green.classList.add('active')
      red.classList.remove('active')
      brown.classList.remove('active')
      black.classList.remove('active')
    }
    brown.onclick = function(){
      context.fillStyle = 'brown'
      context.strokeStyle = 'brown' 
      brown.classList.add('active')
      red.classList.remove('active')
      green.classList.remove('active')
      black.classList.remove('active')
    }

    
    // eraser.onclick = function(){
    //   eraserEnabled = true
    //   actions.className = 'actions x'
    // }
    // brush.onclick = function(){
    //   eraserEnabled = false
    //   actions.className = 'actions'
    // }

    //触屏设备
    canvas.ontouchstart = function(a){
      var x = a.touches[0].clientX
      var y = a.touches[0].clientY
      using = true
      if(eraserEnabled){
        context.clearRect(x-5,y-5,20,20)
      }else{
        lastPoint = {"x":x,"y":y}
      }
    }
    canvas.ontouchmove = function(a){
      var x = a.touches[0].clientX
      var y = a.touches[0].clientY

      if(!using){return}

      if(eraserEnabled){
          context.clearRect(x-5,y-5,20,20)
      }else{
        var newPoint = {"x":x,"y":y}
          drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
          lastPoint = newPoint
      }
    }
    canvas.ontouchend = function(){
      using = false
    }
  }else{
    //非触屏设备
    var eraserEnabled = false
    // eraser.onclick = function(){
    //   eraserEnabled = true
    //   actions.className = 'actions x'
    // }
    // brush.onclick = function(){
    //   eraserEnabled = false
    //   actions.className = 'actions'
    // }

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
}

thin.onclick = function(){
  lineWidth = 3
}
medium.onclick = function(){
  lineWidth = 7
}
thick.onclick = function(){
  lineWidth = 12
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
  context.lineWidth = lineWidth
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
