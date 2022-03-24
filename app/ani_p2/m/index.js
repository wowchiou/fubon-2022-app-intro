(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.txt_1();
	this.instance.setTransform(325,-349.1,0.931,0.931);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,y:82.6},6,cjs.Ease.get(-0.99)).to({y:35.1},4,cjs.Ease.get(0.97)).to({y:55.2},4,cjs.Ease.get(0.97)).to({y:46.1},4,cjs.Ease.get(0.97)).wait(150));

	// stone
	this.instance_1 = new lib.film_1();
	this.instance_1.setTransform(267,919);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({y:903,alpha:1},10,cjs.Ease.get(1)).wait(131));

	// fish01
	this.instance_2 = new lib.fish01_1();
	this.instance_2.setTransform(60,505.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({y:491,alpha:1},10,cjs.Ease.get(1)).wait(138));

	// boat
	this.instance_3 = new lib.boat_1();
	this.instance_3.setTransform(565.5,880,0.687,0.687);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({x:551.8,alpha:1},9,cjs.Ease.get(1)).wait(134));

	// bridge
	this.instance_4 = new lib.bridge_1();
	this.instance_4.setTransform(437,545.4,0.74,0.74);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:536.6,alpha:1},6,cjs.Ease.get(1)).wait(145));

	// space03
	this.instance_5 = new lib.space03();
	this.instance_5.setTransform(529,1049,1,1,0,0,0,0,226);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({y:861,alpha:1},6,cjs.Ease.get(0.97)).to({y:911},4,cjs.Ease.get(1)).wait(149));

	// space01
	this.instance_6 = new lib.space01();
	this.instance_6.setTransform(122,1108,1,1,0,0,0,0.5,241);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:930,alpha:1},6,cjs.Ease.get(0.97)).to({x:121.5,y:980},4,cjs.Ease.get(1)).wait(152));

	// space02
	this.instance_7 = new lib.space02();
	this.instance_7.setTransform(331,759,1,1,0,0,0,0.5,216);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({y:591,alpha:1},6,cjs.Ease.get(0.97)).to({x:330.5,y:641},4,cjs.Ease.get(1)).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.boat = function() {
	this.initialize(img.boat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,216);


(lib.bridge = function() {
	this.initialize(img.bridge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,88);


(lib.cloud01 = function() {
	this.initialize(img.cloud01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,64);


(lib.cloud02 = function() {
	this.initialize(img.cloud02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,38);


(lib.film = function() {
	this.initialize(img.film);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,204);


(lib.film_m = function() {
	this.initialize(img.film_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,149);


(lib.fish01 = function() {
	this.initialize(img.fish01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


(lib.fish01_m = function() {
	this.initialize(img.fish01_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,132);


(lib.fish02 = function() {
	this.initialize(img.fish02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,44);


(lib.house01 = function() {
	this.initialize(img.house01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,186);


(lib.house02 = function() {
	this.initialize(img.house02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,121);


(lib.main = function() {
	this.initialize(img.main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1800,982);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,151);


(lib.pace01 = function() {
	this.initialize(img.pace01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,482);


(lib.pace01_m = function() {
	this.initialize(img.pace01_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,338);


(lib.pace02 = function() {
	this.initialize(img.pace02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,645,432);


(lib.pace02_m = function() {
	this.initialize(img.pace02_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,515,349);


(lib.pace03 = function() {
	this.initialize(img.pace03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,532,452);


(lib.pace03_m = function() {
	this.initialize(img.pace03_m);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,374);


(lib.postition = function() {
	this.initialize(img.postition);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.stone01 = function() {
	this.initialize(img.stone01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,132);


(lib.stone02 = function() {
	this.initialize(img.stone02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,96);


(lib.stone03 = function() {
	this.initialize(img.stone03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,93);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,551,552);


(lib.元件45 = function() {
	this.initialize();

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.408,1],-39.6,0,39.8,0).s().p("AmNKxIAA1iIMbAAIAAVig");
	this.shape.setTransform(8.6,-2.9);

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.408,1],-39.6,0,39.8,0).s().p("AmNKxIAA1iIMbAAIAAVig");
	this.shape_1.setTransform(8.6,-2.9);

	// 圖層 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.408,1],-39.6,0,39.8,0).s().p("AmNKxIAA1iIMbAAIAAVig");
	this.shape_2.setTransform(8.6,-2.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.1,-71.9,79.6,138);


(lib.Symbol41ff = function() {
	this.initialize();

	// ID 33
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBtIANjZIAKDZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-10.9,2.5,22);


(lib.Symbol40ff = function() {
	this.initialize();

	// ID 32
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,9.9).s().p("AgcBVQgTgHgPgPIgHgHQgTgYgBggQABgfATgYIAHgHQAPgPATgGIAcgGQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-8.9,18,18);


(lib.stone03_1 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.stone02();
	this.instance.setTransform(-47.4,-47.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.4,-47.9,95,96);


(lib.stone02_1 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.stone03();
	this.instance.setTransform(-36.4,-46.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.4,-46.4,73,93);


(lib.stone01_1 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.stone01();
	this.instance.setTransform(-56.9,-65.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.9,-65.9,114,132);


(lib.MONEY02 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.money();
	this.instance.setTransform(-68.4,-75.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.4,-75.4,137,151);


(lib.H02 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.house02();
	this.instance.setTransform(-57.9,-60.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.9,-60.4,116,121);


(lib.H01 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.house01();
	this.instance.setTransform(-88.9,-92.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-92.9,178,186);


(lib.fish01_1 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.fish01_m();
	this.instance.setTransform(-51.9,-64.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.9,-64.9,105,132);


(lib.film_1 = function() {
	this.initialize();

	// 圖層 2
	this.instance = new lib.film_m();
	this.instance.setTransform(-156.9,-74.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.9,-74.9,314,149);


(lib.couldcouldcould = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.cloud02();
	this.instance.setTransform(-62.9,-18.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.9,-18.9,126,38);


(lib.couldcould = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.cloud01();
	this.instance.setTransform(-86.4,-31.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.4,-31.9,173,64);


(lib.bridge_1 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.bridge();
	this.instance.setTransform(-53.4,-43.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.4,-43.9,107,88);


(lib.boatboat = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.boat();
	this.instance.setTransform(-84.9,-107.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.9,-107.9,170,216);


(lib.元件5111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Symbol41ff("synched",0);
	this.instance.setTransform(-264,-163.3,0.219,0.219,-134.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.27,scaleY:0.27,x:-264.3,y:-162.9},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-264.6,y:-162.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-265,y:-162.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-264.9,y:-162},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-264.6,y:-162.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-264.3,y:-162.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-263.9,y:-163.2},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-263.6,y:-163.5},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-263.3,y:-163.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-262.9,y:-164.2},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-262.6,y:-164.6},0).to({_off:true},1).wait(4));

	// 圖層 2
	this.instance_1 = new lib.Symbol41ff("synched",0);
	this.instance_1.setTransform(-260.6,-163.1,0.219,0.219,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.27,scaleY:0.27,x:-260.1,y:-162.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-259.6,y:-162.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-259.2,y:-161.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-259.1,y:-161.6},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-259.5,y:-162.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-259.9,y:-162.5},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-260.3,y:-162.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-260.7,y:-163.3},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-261.2,y:-163.8},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-261.6,y:-164.2},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-262.1,y:-164.6},0).to({_off:true},1).wait(4));

	// 圖層 3
	this.instance_2 = new lib.Symbol41ff("synched",0);
	this.instance_2.setTransform(-264.4,-166.7,0.219,0.219,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.27,scaleY:0.27,x:-264.7,y:-167},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-265.2,y:-167.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-265.6,y:-167.8},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-265.2,y:-167.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-264.8,y:-167.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-264.3,y:-166.7},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-263.9,y:-166.3},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-263.5,y:-165.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-263.1,y:-165.6},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-262.7,y:-165.2},0).to({_off:true},1).wait(4));

	// 圖層 4
	this.instance_3 = new lib.Symbol41ff("synched",0);
	this.instance_3.setTransform(-260.2,-166.9,0.219,0.219,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.27,scaleY:0.27,x:-259.5,y:-167.3},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-258.9,y:-167.8},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-258.5,y:-168.2},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-258.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-258.9,y:-167.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-259.4,y:-167.4},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-259.9,y:-167},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-260.4,y:-166.5},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-261,y:-166.1},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-261.5,y:-165.7},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-262,y:-165.3},0).to({_off:true},1).wait(4));

	// 圖層 5
	this.instance_4 = new lib.Symbol41ff("synched",0);
	this.instance_4.setTransform(-267.7,-165,0.437,0.437,-89.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.54,scaleY:0.54,x:-268.8,y:-165},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-270.2,y:-164.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-271.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:-164.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-270.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-269,y:-164.9},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-267.9},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-266.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-265.6},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-264.4,y:-165},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-263.2},0).to({_off:true},1).wait(4));

	// 圖層 6
	this.instance_5 = new lib.Symbol41ff("synched",0);
	this.instance_5.setTransform(-257.3,-165,0.437,0.437,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:0.54,scaleY:0.54,x:-256,y:-165},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-254.8,y:-164.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-253.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:-164.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-254.6},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-255.8,y:-164.9},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-256.9},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-258},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-259.2},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-260.3,y:-165},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-261.5},0).to({_off:true},1).wait(4));

	// 圖層 7
	this.instance_6 = new lib.Symbol41ff("synched",0);
	this.instance_6.setTransform(-262.3,-160.1,0.437,0.437,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:0.54,scaleY:0.54,y:-158.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:-157.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-262.1,y:-156.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:-156.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:-157.4},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:-158.6},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-262.2,y:-159.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:-160.8},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-262.3,y:-161.9},0).wait(1).to({scaleX:0.17,scaleY:0.17,y:-163},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-262.4,y:-164.1},0).to({_off:true},1).wait(4));

	// 圖層 8
	this.instance_7 = new lib.Symbol41ff("synched",0);
	this.instance_7.setTransform(-262.3,-169.8,0.437,0.437);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:0.54,scaleY:0.54,y:-170.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:-172},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-262.1,y:-173.1},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:-172.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:-171.1},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-262.2,y:-170},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:-169},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-262.3,y:-167.9},0).wait(1).to({scaleX:0.17,scaleY:0.17,y:-166.8},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-262.4,y:-165.7},0).to({_off:true},1).wait(4));

	// 圖層 9
	this.instance_8 = new lib.Symbol40ff("synched",0);
	this.instance_8.setTransform(-262.5,-165.1,0.437,0.437);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:0.54,scaleY:0.54},0).wait(1).to({scaleX:0.65,scaleY:0.65},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-262.3,y:-164.9},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:-165},0).wait(1).to({scaleX:0.46,scaleY:0.46},0).wait(1).to({scaleX:0.37,scaleY:0.37},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-262.4},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.07,scaleY:0.07},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.5,-174.6,20,19.3);


(lib.txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:0,y:120.8}).wait(241));

	// txt
	this.instance = new lib.元件45();
	this.instance.setTransform(-439.4,109.6,2.573,3.607,24);
	this.instance.alpha = 0.73;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:470.6},24,cjs.Ease.get(1)).wait(8).to({x:440.6},0).to({x:-379.3},27,cjs.Ease.get(1)).wait(13).to({x:-439.3},0).to({x:470.6},23,cjs.Ease.get(1)).wait(8).to({x:440.6},0).to({x:-379.3},26,cjs.Ease.get(1)).wait(112));

	// 圖層_1
	this.instance_1 = new lib.txt();
	this.instance_1.setTransform(-275.4,-275.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.4,-275.9,551,552);


(lib.space02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// H03
	this.instance = new lib.H02();
	this.instance.setTransform(-40.7,-36,0.642,0.642);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleX:0.6,y:-47},6,cjs.Ease.get(1)).to({scaleX:0.64,y:-35.9},4,cjs.Ease.get(1)).wait(47));

	// H01
	this.instance_1 = new lib.H01();
	this.instance_1.setTransform(49.6,-66.2,0.771,0.771);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:0.81,scaleY:0.85,y:-76.9},6,cjs.Ease.get(1)).to({scaleX:0.77,scaleY:0.77,y:-66.1},4,cjs.Ease.get(1)).wait(51));

	// H02
	this.instance_2 = new lib.H02();
	this.instance_2.setTransform(116.5,-73,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({scaleX:0.76,scaleY:0.82,y:-83.8},6,cjs.Ease.get(0.97)).to({scaleX:0.78,scaleY:0.78,y:-72.9},4,cjs.Ease.get(1)).wait(49));

	// S03
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#89C34B").s().p("AjEBRQhSgiAAgvQAAguBSgiQBSgiByAAQBzAABSAiQBSAiAAAuQAAAvhSAiQhSAihzAAQhyAAhSgig");
	this.shape.setTransform(-40.7,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#89C34B").s().p("Ai9BOQhQghAAgtQAAgtBQggQBPghBuAAQBwAABOAhQBQAgAAAtQAAAthQAhQhOAhhwAAQhuAAhPghg");
	this.shape_1.setTransform(-40.7,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#89C34B").s().p("Ai3BLQhMgfAAgsQAAgrBMgfQBNggBqAAQBsAABMAgQBMAfAAArQAAAshMAfQhMAghsAAQhqAAhNggg");
	this.shape_2.setTransform(-40.7,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#89C34B").s().p("AiwBJQhKgfAAgqQAAgqBKgeQBKgeBmAAQBoAABJAeQBKAeAAAqQAAAqhKAfQhJAehoAAQhmAAhKgeg");
	this.shape_3.setTransform(-40.7,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#89C34B").s().p("AiqBGQhHgeAAgoQAAgoBHgdQBHgdBjAAQBkAABHAdQBHAdAAAoQAAAohHAeQhHAdhkAAQhjAAhHgdg");
	this.shape_4.setTransform(-40.7,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89C34B").s().p("AijBDQhEgcAAgnQAAgmBEgcQBEgdBfAAQBgAABEAdQBEAcAAAmQAAAnhEAcQhEAdhgAAQhfAAhEgdg");
	this.shape_5.setTransform(-40.7,-3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#89C34B").s().p("AidBBQhBgcAAglQAAglBBgbQBCgbBbAAQBcAABBAbQBCAbAAAlQAAAlhCAcQhBAbhcAAQhbAAhCgbg");
	this.shape_6.setTransform(-40.7,-3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#89C34B").s().p("AimBFQhGgdAAgoQAAgnBGgdQBFgdBhAAQBiAABFAdQBGAdAAAnQAAAohGAdQhFAchiAAQhhAAhFgcg");
	this.shape_7.setTransform(-40.7,-3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#89C34B").s().p("Ai6BNQhOghAAgsQAAgsBOggQBOggBsAAQBuAABNAgQBOAgAAAsQAAAshOAhQhNAghuAAQhsAAhOggg");
	this.shape_8.setTransform(-40.7,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},11).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(49));

	// S02
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#89C34B").s().p("AktCJQh8g5AAhQQAAhQB8g5QB+g5CvAAQCwAAB9A5QB9A5AABQQAABQh9A5Qh9A6iwAAQivAAh+g6g");
	this.shape_9.setTransform(113,-37.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#89C34B").s().p("AkjCFQh4g4AAhNQAAhNB4g3QB6g4CpAAQCqAAB5A4QB5A3AABNQAABNh5A4Qh5A3iqAAQipAAh6g3g");
	this.shape_10.setTransform(113,-37.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#89C34B").s().p("AkZCAQh0g1AAhLQAAhLB0g1QB2g1CjAAQClAAB0A1QB1A1AABLQAABLh1A1Qh0A2ilAAQijAAh2g2g");
	this.shape_11.setTransform(113,-37.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#89C34B").s().p("AkOB8Qhxg0AAhIQAAhIBxgzQBwg0CeAAQCfAABwA0QBxAzAABIQAABIhxA0QhwA0ifAAQieAAhwg0g");
	this.shape_12.setTransform(113,-37.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#89C34B").s().p("AkEB3QhsgyAAhFQAAhFBsgxQBsgyCYAAQCZAABsAyQBsAxAABFQAABFhsAyQhsAyiZAAQiYAAhsgyg");
	this.shape_13.setTransform(113,-37.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#89C34B").s().p("Aj6ByQhogvAAhDQAAhDBogvQBogwCSABQCTgBBoAwQBoAvAABDQAABDhoAvQhoAwiTAAQiSAAhogwg");
	this.shape_14.setTransform(113,-37.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#89C34B").s().p("AjwBtQhkgtAAhAQAAhABkgtQBkguCMAAQCNAABkAuQBkAtAABAQAABAhkAtQhkAviNAAQiMAAhkgvg");
	this.shape_15.setTransform(113,-37.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#89C34B").s().p("Aj/B0QhqgwAAhEQAAhEBqgwQBqgxCVAAQCWAABqAxQBqAwAABEQAABEhqAwQhqAyiWAAQiVAAhqgyg");
	this.shape_16.setTransform(113,-37.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#89C34B").s().p("AkeCDQh2g3AAhMQAAhMB2g2QB4g2CmAAQCoAAB2A2QB3A2AABMQAABMh3A3Qh2A2ioAAQimAAh4g2g");
	this.shape_17.setTransform(113,-37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_9}]},13).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_9}]},1).wait(47));

	// S01
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#89C34B").s().p("AleCaQiShAAAhaQAAhZCShAQCRhADNAAQDOAACRBAQCSBAAABZQAABaiSBAQiRBAjOAAQjNAAiRhAg");
	this.shape_18.setTransform(48.4,-8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#89C34B").s().p("AlaCVQiQg+AAhXQAAhWCQg+QCQg+DKAAQDLAACQA+QCQA+AABWQAABXiQA+QiQA+jLAAQjKAAiQg+g");
	this.shape_19.setTransform(48.3,-8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#89C34B").s().p("AlWCPQiOg8AAhTQAAhTCOg8QCOg7DIAAQDJAACOA7QCOA8AABTQAABTiOA8QiOA8jJAAQjIAAiOg8g");
	this.shape_20.setTransform(48.2,-8.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#89C34B").s().p("AlRCKQiNg6AAhQQAAhQCNg5QCMg6DFAAQDGAACNA6QCMA5AABQQAABQiMA6QiNA6jGAAQjFAAiMg6g");
	this.shape_21.setTransform(48.1,-8.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#89C34B").s().p("AlNCFQiLg4AAhNQAAhNCLg3QCKg3DDAAQDEAACLA3QCKA3AABNQAABNiKA4QiLA3jEAAQjDAAiKg3g");
	this.shape_22.setTransform(48,-8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#89C34B").s().p("AlJB/QiJg1AAhKQAAhKCJg0QCJg2DAAAQDBAACJA2QCJA0AABKQAABKiJA1QiJA2jBAAQjAAAiJg2g");
	this.shape_23.setTransform(47.9,-8.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#89C34B").s().p("AlFB6QiHg0AAhGQAAhHCHgyQCHgzC+AAQC/AACHAzQCHAyAABHQAABGiHA0QiHAzi/AAQi+AAiHgzg");
	this.shape_24.setTransform(47.8,-8.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#89C34B").s().p("AlLCCQiKg3AAhLQAAhLCKg2QCKg2DBAAQDDAACKA2QCJA2AABLQAABLiJA3QiKA2jDAAQjBAAiKg2g");
	this.shape_25.setTransform(48,-8.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#89C34B").s().p("AlYCSQiPg9AAhVQAAhUCPg9QCPg9DJAAQDKAACPA9QCPA9AABUQAABViPA9QiPA9jKAAQjJAAiPg9g");
	this.shape_26.setTransform(48.2,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_18}]},9).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_18}]},1).wait(51));

	// 圖層 2
	this.instance_3 = new lib.pace02_m();
	this.instance_3.setTransform(-228.9,-147.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-147.9,515,349);


(lib.cloud02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.couldcouldcould();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-5.8},24).to({x:0},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-18.9,126,38);


(lib.cloud01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.couldcould();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6.8},17).to({x:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-31.9,173,64);


(lib.boat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.boatboat();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9},8,cjs.Ease.get(0.5)).wait(7).to({x:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-107.9,170,216);


(lib.閃閃閃複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5
	this.instance = new lib.元件5111();
	this.instance.setTransform(137.8,176.5,0.416,0.416,0,0,0,-262.5,-164.9);

	this.instance_1 = new lib.元件5111();
	this.instance_1.setTransform(321.6,178.9,0.398,0.398,0,0,0,-262.6,-164.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},24).wait(15));

	// 圖層 4
	this.instance_2 = new lib.元件5111();
	this.instance_2.setTransform(156.6,195.9,0.38,0.38,0,0,0,-262.7,-165.1);

	this.instance_3 = new lib.元件5111();
	this.instance_3.setTransform(448.3,246.6,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},18).wait(21));

	// 圖層 3
	this.instance_4 = new lib.元件5111();
	this.instance_4.setTransform(174.6,171.9,0.297,0.297,0,0,0,-262.7,-164.9);

	this.instance_5 = new lib.元件5111();
	this.instance_5.setTransform(329.4,208.4,0.297,0.297,0,0,0,-262.7,-164.9);

	this.instance_6 = new lib.元件5111();
	this.instance_6.setTransform(117.6,171.9,0.297,0.297,0,0,0,-262.7,-164.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},12).wait(27));

	// 圖層 2
	this.instance_7 = new lib.元件5111();
	this.instance_7.setTransform(315.6,195.9,0.38,0.38,0,0,0,-262.7,-165);

	this.instance_8 = new lib.元件5111();
	this.instance_8.setTransform(126.6,200.9,0.38,0.38,0,0,0,-262.7,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},6).wait(33));

	// 圖層 1
	this.instance_9 = new lib.元件5111();
	this.instance_9.setTransform(105.5,196.9,0.475,0.475,0,0,0,-262.5,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.8,192.3,9.5,9.2);


(lib.space03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.閃閃閃複製();
	this.instance.setTransform(-169.5,2.9,1,1,0,0,0,88.9,196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(70));

	// 圖層 3
	this.instance_1 = new lib.MONEY02();
	this.instance_1.setTransform(-130.2,62.9,0.815,0.815,0,0,0,1.6,76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({regX:1.5,regY:76.5,scaleX:0.92,scaleY:0.92,rotation:-7},6,cjs.Ease.get(1)).to({regX:1.6,regY:76.6,scaleX:0.82,scaleY:0.82,rotation:0},5,cjs.Ease.get(1)).wait(6));

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BAE2A").s().p("AnrBFIJJmGIGOEeIo4Flg");
	this.shape.setTransform(-118.9,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE2A").s().p("AnXBCIIxl1IF+ERIohFWg");
	this.shape_1.setTransform(-118.9,35.9,1.044,1.044);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE2A").s().p("AnjBEII/l/IGIEYIovFfg");
	this.shape_2.setTransform(-118.8,35.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE2A").s().p("AnaBCII0l3IGBETIolFYg");
	this.shape_3.setTransform(-118.8,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE2A").s().p("AnRBBIIplwIF6ENIoaFSg");
	this.shape_4.setTransform(-118.8,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE2A").s().p("AnIBAIIflqIFyEJIoQFMg");
	this.shape_5.setTransform(-118.8,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE2A").s().p("AnAA/IIVljIFsEEIoGFFg");
	this.shape_6.setTransform(-118.8,35.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE2A").s().p("AmkA7IH0lNIFVD0InmExg");
	this.shape_7.setTransform(-118.8,35.9,1.044,1.044);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE2A").s().p("AnBA/IIWlkIFtEFIoHFGg");
	this.shape_8.setTransform(-118.8,35.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4BAE2A").s().p("AnMBAIIjlsIF2ELIoUFOg");
	this.shape_9.setTransform(-118.8,35.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4BAE2A").s().p("AnWBCIIvl1IF+ERIogFWg");
	this.shape_10.setTransform(-118.8,35.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4BAE2A").s().p("AnhBDII8l9IGHEXIotFeg");
	this.shape_11.setTransform(-118.8,35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},53).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_1}]},1).wait(6));

	// 圖層 4
	this.instance_2 = new lib.pace03_m();
	this.instance_2.setTransform(-224.9,-187.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.9,-187.9,449,374);


(lib.space01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud01
	this.instance = new lib.cloud01_1();
	this.instance.setTransform(74.5,-125.5,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(70));

	// stone01
	this.instance_1 = new lib.stone03_1();
	this.instance_1.setTransform(-77.4,14.2,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({scaleY:0.82,y:-0.3},5,cjs.Ease.get(1)).to({scaleY:0.77,y:14.2},4,cjs.Ease.get(1)).wait(35));

	// stone02
	this.instance_2 = new lib.stone02_1();
	this.instance_2.setTransform(-14.9,-15,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({scaleY:0.77,y:-27.9},5,cjs.Ease.get(1)).to({scaleY:0.69,y:-14.9},4,cjs.Ease.get(1)).wait(37));

	// stone01
	this.instance_3 = new lib.stone01_1();
	this.instance_3.setTransform(9.4,55.4,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({scaleY:0.73,y:42.3},5,cjs.Ease.get(1)).to({scaleY:0.69,y:55.4},4,cjs.Ease.get(1)).wait(34));

	// 圖層 2
	this.instance_4 = new lib.pace01_m();
	this.instance_4.setTransform(-240.4,-168.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(70));

	// cloud02
	this.instance_5 = new lib.cloud02_1();
	this.instance_5.setTransform(-54.9,-136.9,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.4,-168.9,482,338);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;