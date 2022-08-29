
document.getElementById('btn-wish').addEventListener('click',()=>{
    document.getElementById('wish').style.display='none';
    document.getElementById('card').style.display='block';
    console.log('dsvk')
})
document.getElementById('btn-card').addEventListener('click',()=>{
    document.getElementById('card').style.display='none'
    document.getElementById('wish').style.display='block'
   // document.getElementById('wish').style.display='block';
    console.log(document.getElementById('card'))
    console.log('dvod')
    document.getElementById('odn').style.display = 'none';
    document.getElementById('odn-2').style.display = 'none'

})

document.getElementById('check').addEventListener('click',()=>{
    document.getElementById('odn').style.backgroundImage = 'url(giphy.gif)'
    document.getElementById('odn').style.display = 'block'
    document.getElementById('odn-2').style.backgroundImage = 'url(giphy.gif)'
    document.getElementById('odn-2').style.display = 'block'
    document.getElementById('buld1').className = 'buld-orn';
    document.getElementById('buld2').className = 'buld-orn';
    document.getElementById('buld3').className = 'buld-orn';
    document.getElementById('buld4').className = 'buld-orn';
    document.getElementById('buld5').className = 'buld-orn';
    document.getElementById('buld6').className = 'buld-orn';
    document.getElementById('buld7').className = 'buld-orn';

    run();
})


const can=()=>{
    const canvas=document.getElementById('orp');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    return{
        canvas,
        canvasContext:canvas.getContext('2d'),
        numberOfsnowball:100
    }

}
const random=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
 }


const creat=(canvas,numberOfsnowball)=>{
 return [...Array(numberOfsnowball)].map(()=> {
      return{
          x:random(0,canvas.width),
          y:random(0,canvas.height),
          size:random(2,4),
          shine:random(0.5,1),
          movex:random(-5,5),
          movey:random(1,3)
         
      }
  });
}

 function draw(canvasContext,snowball){
    canvasContext.beginPath();
    canvasContext.arc(snowball.x,snowball.y,snowball.size,0,Math.PI*2);
    canvasContext.fillStyle=`gold`;
    canvasContext.fill();
   

}

function move(snowball,canvas){
    snowball.x+=snowball.movex;
    snowball.y+=snowball.movey;
    if(snowball.x > canvas.width){
        snowball.x=0;
    }else if(snowball.x < 0){
        snowball.x=canvas.width;
    }if(snowball.y > canvas.height){
        snowball.y=0;
    }
}

function run(){
    const {canvas,canvasContext,numberOfsnowball}=can();
    const snowball=creat(canvas,numberOfsnowball);
    setInterval(()=>{
        canvasContext.clearRect(0,0,canvas.width,canvas.height);
        snowball.forEach((snowball)=>draw(canvasContext,snowball));
        snowball.forEach((snowball)=>move(snowball,canvas));
    },50)
}

