(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// stone
	this.instance = new lib.film_1();
	this.instance.setTransform(362,715);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:699,alpha:1},10,cjs.Ease.get(1)).wait(131));

	// fish02
	this.instance_1 = new lib.fish02_1();
	this.instance_1.setTransform(651,215);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({y:201,alpha:1},10,cjs.Ease.get(1)).wait(134));

	// fish01
	this.instance_2 = new lib.fish01_1();
	this.instance_2.setTransform(771,310.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({y:296.5,alpha:1},10,cjs.Ease.get(1)).wait(138));

	// boat
	this.instance_3 = new lib.boat_1();
	this.instance_3.setTransform(1075,717);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({x:1055,alpha:1},9,cjs.Ease.get(1)).wait(134));

	// bridge
	this.instance_4 = new lib.bridge_1();
	this.instance_4.setTransform(594.5,543);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:531,alpha:1},6,cjs.Ease.get(1)).wait(145));

	// space03
	this.instance_5 = new lib.space03();
	this.instance_5.setTransform(1383,1002,1,1,0,0,0,0,226);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({y:814,alpha:1},6,cjs.Ease.get(0.97)).to({y:864},4,cjs.Ease.get(1)).wait(149));

	// space01
	this.instance_6 = new lib.space01();
	this.instance_6.setTransform(370,768,1,1,0,0,0,0.5,241);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:590,alpha:1},6,cjs.Ease.get(0.97)).to({y:640},4,cjs.Ease.get(1)).wait(152));

	// space02
	this.instance_7 = new lib.space02();
	this.instance_7.setTransform(858,967,1,1,0,0,0,0.5,216);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({y:799,alpha:1},6,cjs.Ease.get(0.97)).to({y:849},4,cjs.Ease.get(1)).wait(154));

	// txt
	this.instance_8 = new lib.txt_1();
	this.instance_8.setTransform(1176.5,-295.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({y:164},6,cjs.Ease.get(-0.99)).to({y:112},4,cjs.Ease.get(0.97)).to({y:134},4,cjs.Ease.get(0.97)).to({y:124},4,cjs.Ease.get(0.97)).wait(150));

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


(lib.fish01 = function() {
	this.initialize(img.fish01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,171);


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


(lib.pace02 = function() {
	this.initialize(img.pace02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,645,432);


(lib.pace03 = function() {
	this.initialize(img.pace03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,532,452);


(lib.postition = function() {
	this.initialize(img.postition);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1800,982);


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


(lib.fish02_1 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.fish02();
	this.instance.setTransform(-41.9,-21.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.9,-21.9,84,44);


(lib.fish01_1 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.fish01();
	this.instance.setTransform(-84.9,-85.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.9,-85.4,170,171);


(lib.film_1 = function() {
	this.initialize();

	// 圖層_1
	this.instance = new lib.film();
	this.instance.setTransform(-160.9,-101.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160.9,-101.9,322,204);


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
	var mask_graphics_19 = new cjs.Graphics().p("A1eJhIABgBQhggBhbgQIAAgHQhsgWhkgtQh8g3hZhNQhnA7iAAlIgcAHQgJgfgRgmQgUgqgSgXQB6gWBmg1Qg0hEgkhcIBqgfIiAAAIANiDIAVAAQgshDgjgcQANgGAVgPIhVAAIgOCIIBMgPIABB+IhbAaIgYDbQgJBagrAfQgvAgiEAAQAAgcgIgoQgHgmgLgdQAjACA4AAQALgBAFgEQAFgEAAgLIATiwIhMAVQgEARgTACIgXinQAugGBbgSIASilIh3AAIAPiIIB2AAIAhk4ICvAHQgEAUgeAEIgdEZIBfAAIgNCAQBDgzAZkWIAMhqIF5gDIgbFyQgCAWABAGQABAGAHAAQAWAAAFgMQAGgNAJhFQAQAOAtASQAiANAiAKQgSBagnAkQgiAgg9AAIg7AAQhIAAgXggQgXgfAJhYIAKjfIhjADQgSB7gcBbQgvCYhFAsIFjAAIAagFIBcAlQgDAKgMAHQg+ClhvBtIABAAIgKALQAnAkBRAkQBZAmByAXIAAAGQAzAKA5AGQBBhPAri4IiDAAIAsmhIDcAAQgUgvgXgdIgBAVQicArhUAUQgDAOgQAFIguiNQA0gHDRgqQgggRg7gXQg8gYgzgPIBKhkQAyAMA8AVQA/AVAkARIhNBrIAogHIAABbQBygTA4ggQAzgbAXgxIg3AAQgoArgtAkQgRgTgfgVQgegUgZgKQBqhDA9hsICRAXQgEAQgWAAQgKAPgIAKIE5gBIBQAHQgOAnglA4QgfAugdAgIhvggQARgVAQgYIhWAAQAOAxA0AaQBBAjCMANQgWAVgYAmQgZAjgNAdIg6gMIgoGGIiAAAQgBBGAMBBQAQBgAiAuIDjACQATgVATghQAWgnAUg4QAXhFAUhXIh6AAIAMhyICwAAIAGgdIiMAAIALhnICMAAIACgcIiRAAIAZjuIAsAAIAEgpIhLAAIALhxIBLAAIAJhMICYAJQgDAPgaAFIgFAvIBOAAIAIhMICaAJQgDAPgbAFIgGAvIBHAAIgLBxIhHAAIgEApIA2AAIgIBGQAshBAohWQAphUAehVICVAsQgCAHgIAEQgIAEgLgCQgUA0glBPIA5AAQAwhlAYhLICXArQgFANgaAAQgXA3giBBIBjAAIgOCDIhpAAIgHBIIBgAAIgNB7IhgAAIgIBLIBhAAIgNB5IhgAAIgVDBIBzAAIgNCFIk3AAIgEAfIKiAAIBwozQiuCOiqBEQgKgbgXgrQgUgngRgbQCRg0CChdQB6hZBfhzIl+gnIAeiVINwBZIgeCVIk8ggQgPAUgdAaQgiAfgNAOIAIAiIiLK3IIOAAIAckMQgVAegcAXQgpAjgzAQQgsAOg6AAQhsAAhAhLQhAhLAQhpQAJg3AZguQAcgzAqgkQAqgjAzgQQAtgOA5AAQBrAABBBKQBABLgQBoQgJA2gaAxQgIAQgKAOICtAKQgEARgeAGIgGA+IBjAAIAKhpIiQAAIBKrBIDxAAQASgpAKgtIDJAeQgHAPgaADQgGALgRAbIEvAAIgpGJIotAAIgEAkILSAAIgMB3IrTAAIgEAnII2AAIAjgDIBXAPQgCASgJAXQghC7gaBCQgfBLg6ATIF8AAIgQCWgAX7HOIIeAAQABgggHgjQgGgkgLgbQAeAFAmAAQALAAAHgCQAIgDAHgIQAUgVAah7ImiAAIAAABIA7ACQgEASgeAFIgIBPIBdAAIAKhfICyAKQgEASgfAFIgTC5InmAAgAiOHOIAvAAIA/pZIgBABQgZgegfgeIgIBRIiVAAIgCAcICTAAIgLBnIiTAAIgEAdICuAAIgMByIhlAAQAEDiA4BPgAk5HOQgYhJgLhZQghBfgmBDIBqAAIAAAAgAvZHMQgziGACiPIh8AAQgdCShNCBIEXACIAAAAgAA1EqIBBAAIAUjBIhBAAgARHB/IAAAyIAyAyIgKAKIAAAUIAUAKIAUAAIAUgKIAKgUIAegKIAUgKIAUgUIAUgeIAAgyIgKgeIg8g8IgKgUIAAgSIAKgKIAUgKIAUAKIAKAKIAAAKIAKASIAUAKIAUAAIAKgKIAKgSIAAgeIgKgUIgegeIAKgUIgKgUIgKgKIgUgKIgUAKIgUAoQgMgGgUAHIgSAJIgUAUIgUAeIgKAeIAAAcIAKAUIBaBQIAAAUIgKAKIgUAKIgUAAIgUgUIgKgUIgUgKIgUAAgA+kDBQAzguAlg7IifAAQAdA+AqArgA0OBhIGUAAIADgeImUAAgA0CgLIGUAAIACgcImTAAgABWgQIBBAAIAHhLIhAAAgAz3h5IGUAAIADgcImUAAgAj4jSIAsAAIAFg0IgsAAgAmXjSIArAAIAEg0IgqAAgABrjWIBBAAIAHhIIhBAAgAsdjqQhQghgng6Qg4A6hpAhIEYAAIAAAAgAa3jyIGLAAIAEgnImLAAgAlLljIBOAAIAFgpIhOAAgAbGl7IGLAAIADgiImLAAg");

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
	this.instance.setTransform(-83.9,-61.9,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleX:0.76,y:-75.8},6,cjs.Ease.get(1)).to({scaleX:0.81,y:-61.8},4,cjs.Ease.get(1)).wait(47));

	// H01
	this.instance_1 = new lib.H01();
	this.instance_1.setTransform(31,-108.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:1.06,scaleY:1.1,y:-122.8},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-108.8},4,cjs.Ease.get(1)).wait(51));

	// H02
	this.instance_2 = new lib.H02();
	this.instance_2.setTransform(119,-122.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({scaleX:0.97,scaleY:1.05,y:-136.3},6,cjs.Ease.get(0.97)).to({scaleX:1,scaleY:1,y:-122.3},4,cjs.Ease.get(1)).wait(49));

	// S01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#89C34B").s().p("Aj4BmQhngrAAg7QAAg7BngqQBogrCQAAQCRAABnArQBoAqAAA7QAAA7hoArQhnAriRAAQiQAAhogrg");
	this.shape.setTransform(-83.9,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#89C34B").s().p("AjwBjQhjgqAAg5QAAg5BjgpQBkgpCMAAQCNAABjApQBkApAAA5QAAA5hkAqQhjApiNAAQiMAAhkgpg");
	this.shape_1.setTransform(-83.9,-20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#89C34B").s().p("AjnBfQhggogBg3QABg3BggnQBggoCHAAQCIAABgAoQBhAngBA3QABA3hhAoQhgAoiIAAQiHAAhggog");
	this.shape_2.setTransform(-83.9,-20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#89C34B").s().p("AjfBcQhdgnAAg1QAAg1BdgmQBdgmCCAAQCDAABdAmQBdAmAAA1QAAA1hdAnQhdAmiDAAQiCAAhdgmg");
	this.shape_3.setTransform(-83.9,-20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#89C34B").s().p("AjXBZQhZgmAAgzQAAgzBZglQBagkB9AAQB+AABZAkQBaAlAAAzQAAAzhaAmQhZAkh+AAQh9AAhagkg");
	this.shape_4.setTransform(-83.9,-20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89C34B").s().p("AjOBVQhWgkAAgxQAAgxBWgjQBWgkB4AAQB5AABWAkQBWAjAAAxQAAAxhWAkQhWAkh5AAQh4AAhWgkg");
	this.shape_5.setTransform(-83.9,-20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#89C34B").s().p("AjGBSQhTgjAAgvQAAgvBTgiQBSgiB0AAQB0AABTAiQBSAiAAAvQAAAvhSAjQhTAih0AAQh0AAhSgig");
	this.shape_6.setTransform(-83.9,-20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#89C34B").s().p("AjTBXQhXglAAgyQAAgyBXgkQBYgkB7AAQB8AABXAkQBYAkAAAyQAAAyhYAlQhXAkh8AAQh7AAhYgkg");
	this.shape_7.setTransform(-83.9,-20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#89C34B").s().p("AjsBhQhhgpAAg4QAAg4BhgoQBjgpCJAAQCKAABiApQBiAoAAA4QAAA4hiApQhiAoiKABQiJgBhjgog");
	this.shape_8.setTransform(-83.9,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},11).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(49));

	// S01
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#89C34B").s().p("AnHDIQi9hUAAh0QAAh0C9hTQC9hTEKAAQELAAC8BTQC9BTAAB0QAAB0i9BUQi8BTkLAAQkKAAi9hTg");
	this.shape_9.setTransform(29.5,-34.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#89C34B").s().p("AnBDBQi7hRAAhwQAAhwC7hQQC7hQEGAAQEIAAC6BQQC7BQAABwQAABwi7BRQi6BQkIAAQkGAAi7hQg");
	this.shape_10.setTransform(29.4,-34.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#89C34B").s().p("Am8C6Qi4hOAAhsQAAhsC4hNQC5hNEDgBQEFABC4BNQC4BNAABsQAABsi4BOQi4BOkFgBQkDABi5hOg");
	this.shape_11.setTransform(29.3,-34.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#89C34B").s().p("Am2CzQi2hLAAhoQAAhoC2hKQC2hLEAAAQEBAAC2BLQC2BKAABoQAABoi2BLQi2BLkBAAQkAAAi2hLg");
	this.shape_12.setTransform(29.2,-34.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#89C34B").s().p("AmxCsQizhIgBhkQABhkCzhHQC0hID9AAQD+AAC0BIQCzBHAABkQAABkizBIQi0BIj+AAQj9AAi0hIg");
	this.shape_13.setTransform(29,-34.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#89C34B").s().p("AmrClQiyhFAAhgQAAhgCyhEQCyhFD5AAQD7AACxBFQCyBEAABgQAABgiyBFQixBFj7AAQj5AAiyhFg");
	this.shape_14.setTransform(28.9,-34.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#89C34B").s().p("AlsCgQiXhDAAhdQAAhcCXhDQCYhDDUAAQDWAACWBDQCYBDgBBcQABBdiYBDQiWBDjWAAQjUAAiYhDg");
	this.shape_15.setTransform(28.8,-34.4,1.16,0.991);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#89C34B").s().p("AmuCpQizhHAAhiQAAhiCzhGQCzhGD7AAQD8AACzBGQCzBGAABiQAABiizBHQizBGj8AAQj7AAizhGg");
	this.shape_16.setTransform(29,-34.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#89C34B").s().p("Am+C+Qi6hQAAhuQAAhuC6hPQC5hOEFAAQEGAAC5BOQC6BPAABuQAABui6BQQi5BOkGAAQkFAAi5hOg");
	this.shape_17.setTransform(29.3,-34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_9}]},9).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_9}]},1).wait(51));

	// S03
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#89C34B").s().p("AmACwQifhKAAhmQAAhmCfhJQCghJDgAAQDhAACgBJQCgBJAABmQAABmigBKQigBJjhAAQjgAAighJg");
	this.shape_18.setTransform(114.5,-77.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#89C34B").s().p("AlzCqQiahHAAhjQAAhjCahGQCbhHDYAAQDaAACaBHQCaBGAABjQAABjiaBHQiaBHjaAAQjYAAibhHg");
	this.shape_19.setTransform(114.5,-77.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#89C34B").s().p("AlmCkQiVhFAAhfQAAhfCVhEQCVhFDRAAQDSAACVBFQCVBEAABfQAABfiVBFQiVBFjSAAQjRAAiVhFg");
	this.shape_20.setTransform(114.5,-77.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#89C34B").s().p("AlZCeQiQhCAAhcQAAhcCQhCQCPhBDKAAQDLAACPBBQCQBCAABcQAABciQBCQiPBCjLAAQjKAAiPhCg");
	this.shape_21.setTransform(114.5,-77.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#89C34B").s().p("AlNCYQiKg/AAhZQAAhZCKg/QCLg/DCAAQDEAACJA/QCLA/AABZQAABZiLA/QiJBAjEAAQjCAAiLhAg");
	this.shape_22.setTransform(114.5,-77.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#89C34B").s().p("AlACSQiFg9AAhVQAAhVCFg9QCFg9C7AAQC8AACEA9QCGA9AABVQAABViGA9QiEA+i8AAQi7AAiFg+g");
	this.shape_23.setTransform(114.5,-77.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#89C34B").s().p("AkzCMQh/g6AAhSQAAhSB/g6QCAg6CzAAQC1AAB+A6QCBA6AABSQAABSiBA6Qh+A7i1AAQizAAiAg7g");
	this.shape_24.setTransform(114.5,-77.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#89C34B").s().p("AlGCVQiIg+AAhXQAAhXCIg+QCIg+C+AAQDAAACHA+QCIA+AABXQAABXiIA+QiHA/jAAAQi+AAiIg/g");
	this.shape_25.setTransform(114.5,-77.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#89C34B").s().p("AltCnQiXhGAAhhQAAhhCXhFQCYhGDVAAQDWAACXBGQCYBFAABhQAABhiYBGQiXBGjWAAQjVAAiYhGg");
	this.shape_26.setTransform(114.5,-77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_18}]},13).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_18}]},1).wait(47));

	// 圖層_1
	this.instance_3 = new lib.pace02();
	this.instance_3.setTransform(-322.4,-215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.4,-215.9,645,432);


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
	this.instance.setTransform(113.8,179.5,0.416,0.416,0,0,0,-262.5,-164.9);

	this.instance_1 = new lib.元件5111();
	this.instance_1.setTransform(364.6,190.9,0.398,0.398,0,0,0,-262.6,-164.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},24).wait(15));

	// 圖層 4
	this.instance_2 = new lib.元件5111();
	this.instance_2.setTransform(132.6,198.9,0.38,0.38,0,0,0,-262.7,-165.1);

	this.instance_3 = new lib.元件5111();
	this.instance_3.setTransform(499.4,264.7,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},18).wait(21));

	// 圖層 3
	this.instance_4 = new lib.元件5111();
	this.instance_4.setTransform(215.6,66.9,0.297,0.297,0,0,0,-262.7,-164.9);

	this.instance_5 = new lib.元件5111();
	this.instance_5.setTransform(150.6,174.9,0.297,0.297,0,0,0,-262.7,-164.9);

	this.instance_6 = new lib.元件5111();
	this.instance_6.setTransform(390.5,226.4,0.297,0.297,0,0,0,-262.7,-164.9);

	this.instance_7 = new lib.元件5111();
	this.instance_7.setTransform(67.3,196.1,0.297,0.297,0,0,0,-262.7,-164.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},12).wait(27));

	// 圖層 2
	this.instance_8 = new lib.元件5111();
	this.instance_8.setTransform(345.6,217.4,0.38,0.38,0,0,0,-262.7,-165);

	this.instance_9 = new lib.元件5111();
	this.instance_9.setTransform(102.8,205.1,0.38,0.38,0,0,0,-262.7,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8}]},6).wait(33));

	// 圖層 1
	this.instance_10 = new lib.元件5111();
	this.instance_10.setTransform(81.5,199.9,0.475,0.475,0,0,0,-262.5,-165);

	this.instance_11 = new lib.元件5111();
	this.instance_11.setTransform(261.6,34.9,0.38,0.38,0,0,0,-262.5,-165);

	this.instance_12 = new lib.元件5111();
	this.instance_12.setTransform(188.6,53.9,0.399,0.399,0,0,0,-262.5,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.8,31.2,188.6,173.3);


(lib.space03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.閃閃閃複製();
	this.instance.setTransform(-169.5,2.9,1,1,0,0,0,88.9,196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(70));

	// 圖層 3
	this.instance_1 = new lib.MONEY02();
	this.instance_1.setTransform(-157.9,87,1,1,0,0,0,1.5,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({scaleX:1.13,scaleY:1.13,rotation:-7,x:-157.7},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:-157.8},5,cjs.Ease.get(1)).wait(6));

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4BAE2A").s().p("ApbBUILOneIHpFeIq6G3g");
	this.shape.setTransform(-143.9,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4BAE2A").s().p("ApRBTILBnVIHiFXIquGug");
	this.shape_1.setTransform(-143.9,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BAE2A").s().p("ApGBRIK0nMIHZFRIqhGmg");
	this.shape_2.setTransform(-143.9,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BAE2A").s().p("Ao7BQIKnnEIHQFLIqUGeg");
	this.shape_3.setTransform(-143.9,54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4BAE2A").s().p("AowBOIKam7IHHFFIqIGWg");
	this.shape_4.setTransform(-143.9,54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4BAE2A").s().p("AolBNIKNmzIG+E+Ip7GPg");
	this.shape_5.setTransform(-143.9,54);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4BAE2A").s().p("AoaBLIKAmqIG1E4IpuGHg");
	this.shape_6.setTransform(-143.9,54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4BAE2A").s().p("AonBNIKQm1IG/FAIp9GRg");
	this.shape_7.setTransform(-143.9,54);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BAE2A").s().p("Ao0BPIKfm/IHKFHIqMGag");
	this.shape_8.setTransform(-143.9,54);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4BAE2A").s().p("ApBBRIKvnKIHUFPIqbGkg");
	this.shape_9.setTransform(-143.9,54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4BAE2A").s().p("ApOBTIK+nUIHfFWIqqGtg");
	this.shape_10.setTransform(-143.9,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},53).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape}]},1).wait(6));

	// 圖層_1
	this.instance_2 = new lib.pace03();
	this.instance_2.setTransform(-265.9,-225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.9,-225.9,532,452);


(lib.space01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud01
	this.instance = new lib.cloud01_1();
	this.instance.setTransform(109.5,-168.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(70));

	// stone01
	this.instance_1 = new lib.stone03_1();
	this.instance_1.setTransform(-143.4,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({scaleY:1.06,y:7},5,cjs.Ease.get(1)).to({scaleY:1,y:26},4,cjs.Ease.get(1)).wait(35));

	// stone02
	this.instance_2 = new lib.stone02_1();
	this.instance_2.setTransform(-44.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({scaleY:1.13,y:-16.3},5,cjs.Ease.get(1)).to({scaleY:1,y:2.5},4,cjs.Ease.get(1)).wait(37));

	// stone01
	this.instance_3 = new lib.stone01_1();
	this.instance_3.setTransform(20,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({scaleY:1.06,y:59},5,cjs.Ease.get(1)).to({scaleY:1,y:78},4,cjs.Ease.get(1)).wait(34));

	// 圖層_1
	this.instance_4 = new lib.pace01();
	this.instance_4.setTransform(-345.4,-240.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(70));

	// cloud02
	this.instance_5 = new lib.cloud02_1();
	this.instance_5.setTransform(-82.9,-193.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.4,-240.9,691,482);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;