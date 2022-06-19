let canvas =document.querySelector("#Personajes");
let ctx = canvas.getContext("2d")
class Personaje{
    constructor(x,y,angle,r){
        this.x=x
        this.y=y
        this.angle=angle
        this.r=r
    }
    dibujarse(){
ctx.translate(this.x,this.y);
ctx.rotate(this.angle*Math.PI)
ctx.beginPath();
ctx.arc(0,0,this.r,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(0,0,this.r/2,0.25*Math.PI,0.75*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-10,-10,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(10,-10,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-10,-10,this.r/12,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(10,-10,this.r/12,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.translate(-this.x,-this.y)
ctx.rotate(-this.angle*Math.PI/180)
    }
}
let JJ = new Personaje(250,100,0,50)
JJ.dibujarse();
let JK = new Personaje(300,250,45,50)
JK.dibujarse();
let JH = new Personaje(250,250,-45,50)
JH.dibujarse();
let JX = new Personaje(300,100,180,50)
JX.dibujarse();



