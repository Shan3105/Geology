const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var r, i, s;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer (10,100);
    r = new Rubber(400, 320, 13);
    i = new Iron(600, 420, 50, 50);
    s = new Stone(300, 200, 50, 50);
    r1 = new Rubber(400, 320, 13);
    r2 = new Rubber(400, 320, 13);
    r3 = new Rubber(400, 320, 13);
    r4 = new Rubber(400, 320, 13);
    r5 = new Rubber(400, 320, 13);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    r.display();
    i.display();
    s.display();
    r1.display();
    r2.display();
    r3.display();
    r4.display();
    r5.display();
    
 
}