window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = Math.random() * (600-50);
	var coiny = Math.random() * (400-50);
    
    var t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}

    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}
