(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.Colouring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Colouring ...", "24px 'Arial Unicode MS'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 165;
	this.text.setTransform(231.8,53.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAhOgLBQAngfAzAAQA9AAArArQArAsAAA9QAAA9grArQgrArg9AAQgLAAgKgBQgwgGgkgkQgVgWgLgaQgLgaAAgeQAAg9ArgsQAHgHAIgFgAP6x2QAAgDAAgDQAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAOgCANQgIAsghAhQgrArg9AAQgLAAgLgBQgvgHgkgjQgpgpgCg5gAUfxhIMvGgAj8yFQgSggAAgnQAAg9ArgsQAsgrA9AAQA9AAArArQApAsAAA9QAAAVgFAUQgKAjgaAcQgrArg9AAQg9AAgsgrQgPgQgKgRgAB7jlQAAADAAADQAAA7goAqQgCABgBACQgrArg7AAQgbAAgYgIQgdgLgZgYQgMgMgIgOQgXgiAAgsQAAguAZgkQAIgMAKgLQAegdAngKQARgEATAAQA7AAArArQApAqACA5gAukEXQARAgAAAmQAAA9grArQgRARgSAKID1JvAxfDVQAagLAfAAQA9AAArArQAQAQAKASAoNTTQgBAhgOAbQgKAVgSARQgrAsg9AAQg9AAgsgsQgRgRgLgVQgOgcgBggQAAgDAAgDQAAg9ArgrQAOgNAPgJQAhgVArAAQAjAAAdAOQAVAKATATQArArAAA9QAAADAAADITghtQABg7AqgqQAagaAhgKQAVgHAZAAQAWAAAUAGQAjAKAbAbQAaAaAKAgQAHAWAAAYQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAgBAAgCApgRIIIXycAiTiRIsRGoARsACQgBABgBABQgrArg9AAQg9AAgsgrQgrgpAAg9QAAgHABgHQAEg0AmgnQAsgrA9AAQAJAAAJABQAxAGAlAkQAmAnAFA0QAAAHAAAHQAAA7gpApgAdfNOQAHgJAHgHQAsgrA9AAQAEAAAFAAQA3ADAoAoQArArAAA9QAAA9grArQgrAsg9AAQg9AAgsgsQgogogCg3QgBgEAAgFQAAgyAdgmIrztMAPzQ7INQiMAQCAvIhxOtABQlIIPVrMANvhwIr0h1AASyjIPoAtAM5PdIrmxXAh6w5IBALKASVhwIOKmkAR4vqIhkL1A5Tl+QgagLgWgVQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAIAAAIQgGAzglAlQgSASgVALQgeAOgjAAQgfAAgagLgAyjGsQgXgjAAgsQAAg9ArgrQAWgWAagKIl6pWAvhHgQgfARgmAAQg9AAgsgsQgMgMgIgNEggdAOyQgLAcgXAWQgrAsg9AAQg9AAgrgsQgrgrAAg9QAAg9ArgrQArgrA9AAQAMAAALABQAuAHAjAjQAKAKAIALIOKl9EggtAMpQAaAkAAAvQAAAdgKAZEgiQALqII9xoA2Hn2IT2DFAs0TTIzpkhA2ypvIS2oWEAiTgG6Ii0TN");
	this.shape.setTransform(430.3,239.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AhnBoQgrgrAAg9QAAg7ArgsQArgrA8AAQALAAALACQAuAGAjAjQALAKAHALQAaAlAAAtQAAAcgKAZQgLAcgXAXQgrArg8AAQg8AAgrgrg");
	this.shape_1.setTransform(208.7,328.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EAhOgLBQAngfAzAAQA9AAArArQArAsAAA9QAAA9grArQgrArg9AAQgLAAgKgBQgwgGgkgkQgVgWgLgaQgLgaAAgeQAAg9ArgsQAHgHAIgFgAP6x2QAAgDAAgDQAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAOgCANQgIAsghAhQgrArg9AAQgLAAgLgBQgvgHgkgjQgpgpgCg5gAUfxhIMvGgAj8yFQgSggAAgnQAAg9ArgsQAsgrA9AAQA9AAArArQApAsAAA9QAAAVgFAUQgKAjgaAcQgrArg9AAQg9AAgsgrQgPgQgKgRgAB7jlQAAADAAADQAAA7goAqQgCABgBACQgrArg7AAQgbAAgYgIQgdgLgZgYQgMgMgIgOQgXgiAAgsQAAguAZgkQAIgMAKgLQAegdAngKQARgEATAAQA7AAArArQApAqACA5gAukEXQARAgAAAmQAAA9grArQgRARgSAKID1JvAxfDVQAagLAfAAQA9AAArArQAQAQAKASAoNTTQgBAhgOAbQgKAVgSARQgrAsg9AAQg9AAgsgsQgRgRgLgVQgOgcgBggQAAgDAAgDQAAg9ArgrQAOgNAPgJQAhgVArAAQAjAAAdAOQAVAKATATQArArAAA9QAAADAAADITghtQABg7AqgqQAagaAhgKQAVgHAZAAQAWAAAUAGQAjAKAbAbQAaAaAKAgQAHAWAAAYQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAgBAAgCApgRIIIXycAiTiRIsRGoARsACQgBABgBABQgrArg9AAQg9AAgsgrQgrgpAAg9QAAgHABgHQAEg0AmgnQAsgrA9AAQAJAAAJABQAxAGAlAkQAmAnAFA0QAAAHAAAHQAAA7gpApgAdfNOQAHgJAHgHQAsgrA9AAQAEAAAFAAQA3ADAoAoQArArAAA9QAAA9grArQgrAsg9AAQg9AAgsgsQgogogCg3QgBgEAAgFQAAgyAdgmIrztMAPzQ7INQiMAQCAvIhxOtABQlIIPVrMANvhwIr0h1AASyjIPoAtAM5PdIrmxXAh6w5IBALKASVhwIOKmkAR4vqIhkL1A5Tl+QgagLgWgVQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAIAAAIQgGAzglAlQgSASgVALQgeAOgjAAQgfAAgagLgAyjGsQgXgjAAgsQAAg9ArgrQAWgWAagKIl6pWAvhHgQgfARgmAAQg9AAgsgsQgMgMgIgNEggdAOyQgLAcgXAWQgrAsg9AAQg9AAgrgsQgrgrAAg9QAAg9ArgrQArgrA9AAQAMAAALABQAuAHAjAjQAKAKAIALQAaAkAAAvQAAAdgKAZgEggtAMpIOKl9EgiQALqII9xoA2Hn2IT2DFAs0TTIzpkhA2ypvIS2oWEAiTgG6Ii0TN");
	this.shape_2.setTransform(430.3,239.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag3CIQgbgLgVgWQgrgrAAg8QAAg8ArgrQArgrA8AAQA8AAArArQAsArAAA8IgBAQQgFAzgmAkQgRATgWALQgdAOgjAAQgdAAgagLg");
	this.shape_3.setTransform(274,187.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhnBnQgMgLgIgOQgXgiAAgsQAAg8ArgrQAWgWAagKQAagLAdAAQA9AAArArQAQAQAKASQARAgAAAlQAAA8grArQgRARgTAKQgeARgmAAQg7AAgsgsg");
	this.shape_4.setTransform(324,274.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhnBnQgSgRgKgVQgOgcgBggIAAgFQAAg8ArgrQAOgNAOgJQAigVApAAQAiAAAeAOQAVAKASATQAsArAAA8IAAAFQgBAhgOAbQgKAVgTARQgrAsg8AAQg8AAgrgsg");
	this.shape_5.setTransform(363,362.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AyvKWQgrgrAAg9QAAg9ArgrQArgrA9AAQAMAAALABQAuAHAjAjQAKAKAIALQAaAkAAAvQAAAdgKAZQgLAcgXAWQgrAsg9AAQg9AAgrgsgAQVmiQgdgLgZgYQgMgMgIgOQgXgiAAgsQAAguAZgkQAIgMAKgLQAegdAngKQARgEATAAQA9AAArArQApAqACA5IAAAGQAAA7goAqIgDADQgrArg9AAQgbAAgYgIg");
	this.shape_6.setTransform(318.3,272.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("Al6U1QgSgRgKgVQgOgcgBggIAAgGQAAg9ArgrQAOgNAOgJQAigVArAAQAiAAAeAOQAVAKASATQAsArAAA9IAAAGQgBAhgOAbQgKAVgTARQgrAsg8AAQg+AAgrgsgACqxkQgPgQgLgRQgRggAAgnQAAg9ArgsQArgrA+AAQA8AAArArQAsAsAAA9QAAAVgFAUQgKAjgdAcQgrArg8AAQg+AAgrgrg");
	this.shape_7.setTransform(390.5,239.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("ARYOgQgqgrAAg9IAAgDQABg7ApgqQAbgaAggKQAWgHAYAAQAWAAAVAGQAiAKAbAbQAaAaALAgQAGAWAAAYQAAA9grArQgrAsg9AAQg9AAgsgsgAz5qvQgagLgVgVQgrgrgBg9QABg9ArgsQArgrA9AAQA9AAArArQAsAsAAA9IgBAQQgFAzgmAlQgSASgVALQgdAOgkAAQgeAAgbgLg");
	this.shape_8.setTransform(395.7,269.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ax8FIQgMgMgIgNQgXgjAAgsQAAg9ArgrQAWgWAagKQAagLAeAAQA+AAArArQAQAQAKASQARAgAAAmQAAA9grArQgRARgTAKQgeARgnAAQg8AAgsgsgAOsh3QgrgrAAg9IAAgOQAFg0AmgnQArgrA+AAIASABQAxAGAkAkQAnAnAEA0IABAOQAAA7gqArIgCACQgrArg8AAQg+AAgrgrg");
	this.shape_9.setTransform(428.5,251.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("EAhOgLBQAngfAzAAQA9AAArArQArAsAAA9QAAA9grArQgrArg9AAQgLAAgKgBQgwgGgkgkQgVgWgLgaQgLgaAAgeQAAg9ArgsQAHgHAIgFgAP6x2QAAgDAAgDQAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAOgCANQgIAsghAhQgrArg9AAQgLAAgLgBQgvgHgkgjQgpgpgCg5gAUfxhIMvGgAj8yFQgSggAAgnQAAg9ArgsQAsgrA9AAQA9AAArArQApAsAAA9QAAAVgFAUQgKAjgaAcQgrArg9AAQg9AAgsgrQgPgQgKgRgAB7jlQAAADAAADQAAA7goAqQgCABgBACQgrArg7AAQgbAAgYgIQgdgLgZgYQgMgMgIgOQgXgiAAgsQAAguAZgkQAIgMAKgLQAegdAngKQARgEATAAQA7AAArArQApAqACA5gAukEXQARAgAAAmQAAA9grArQgRARgSAKID1JvAxfDVQAagLAfAAQA9AAArArQAQAQAKASAoNTTQgBAhgOAbQgKAVgSARQgrAsg9AAQg9AAgsgsQgRgRgLgVQgOgcgBggQAAgDAAgDQAAg9ArgrQAOgNAPgJQAhgVArAAQAjAAAdAOQAVAKATATQArArAAA9QAAADAAADITghtQABg7AqgqQAagaAhgKQAVgHAZAAQAWAAAUAGQAjAKAbAbQAaAaAKAgQAHAWAAAYQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAgBAAgCAiTiRIsRGoApgRIIIXycAQUj1QAxAGAlAkQAmAnAFA0QAAAHAAAHQAAA7gpApQgBABgBABQgrArg9AAQg9AAgsgrQgrgpAAg9QAAgHABgHQAEg0AmgnQAsgrA9AAQAJAAAJABgAdfNOQAHgJAHgHQAsgrA9AAQAEAAAFAAQA3ADAoAoQArArAAA9QAAA9grArQgrAsg9AAQg9AAgsgsQgogogCg3QgBgEAAgFQAAgyAdgmIrztMAPzQ7INQiMAQCAvIhxOtAM5PdIrmxXAASyjIPoAtANvhwIr0h1ABQlIIPVrMAh6w5IBALKAR4vqIhkL1ASVhwIOKmkA5Tl+QgagLgWgVQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAIAAAIQgGAzglAlQgSASgVALQgeAOgjAAQgfAAgagLgAyjGsQgXgjAAgsQAAg9ArgrQAWgWAagKIl6pWAvhHgQgfARgmAAQg9AAgsgsQgMgMgIgNEggtAMpQAaAkAAAvQAAAdgKAZQgLAcgXAWQgrAsg9AAQg9AAgrgsQgrgrAAg9QAAg9ArgrQArgrA9AAQAMAAALABQAuAHAjAjQAKAKAIALIOKl9EgiQALqII9xoA2ypvIS2oWAs0TTIzpkhA2Hn2IT2DFEAiTgG6Ii0TN");
	this.shape_10.setTransform(430.3,239.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUCSQgvgHgkgkQgpgogCg6IAAgFQAAg8ArgrQAsgrA7AAQA9AAArArQArArAAA8QAAAOgCANQgIAsghAgQgrAsg9AAQgKAAgKgBg");
	this.shape_11.setTransform(547,124.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FF00").s().p("A2jU1QgSgRgKgVQgOgcgBggIAAgGQAAg9ArgrQAOgNAOgJQAigVArAAQAiAAAeAOQAVAKASATQAsArAAA9IAAAGQgBAhgOAbQgKAVgTARQgrAsg8AAQg+AAgrgsgATTQOQgogogDg3IAAgJQAAgyAdgmIAOgQQAsgrA9AAIAJAAQA3ADAnAoQAsArAAA9QAAA9gsArQgrAsg8AAQg9AAgsgsgAt9xkQgPgQgLgRQgRggAAgnQAAg9ArgsQArgrA+AAQA8AAArArQAsAsAAA9QAAAVgFAUQgKAjgdAcQgrArg8AAQg+AAgrgrg");
	this.shape_12.setTransform(497,239.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("EAhOgLBQAngfAzAAQA9AAArArQArAsAAA9QAAA9grArQgrArg9AAQgLAAgKgBQgwgGgkgkQgVgWgLgaQgLgaAAgeQAAg9ArgsQAHgHAIgFgAP6x2QAAgDAAgDQAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAOgCANQgIAsghAhQgrArg9AAQgLAAgLgBQgvgHgkgjQgpgpgCg5gAUfxhIMvGgAj8yFQgSggAAgnQAAg9ArgsQAsgrA9AAQA9AAArArQApAsAAA9QAAAVgFAUQgKAjgaAcQgrArg9AAQg9AAgsgrQgPgQgKgRgAg6lvQARgEATAAQA7AAArArQApAqACA5QAAADAAADQAAA7goAqQgCABgBACQgrArg7AAQgbAAgYgIQgdgLgZgYQgMgMgIgOQgXgiAAgsQAAguAZgkQAIgMAKgLQAegdAngKgAxfDVQAagLAfAAQA9AAArArQAQAQAKASQARAgAAAmQAAA9grArQgRARgSAKID1JvQAhgVArAAQAjAAAdAOQAVAKATATQArArAAA9QAAADAAADQgBAhgOAbQgKAVgSARQgrAsg9AAQg9AAgsgsQgRgRgLgVQgOgcgBggQAAgDAAgDQAAg9ArgrQAOgNAPgJApgRIIIXycAiTiRIsRGoAQUj1QAxAGAlAkQAmAnAFA0QAAAHAAAHQAAA7gpApQgBABgBABQgrArg9AAQg9AAgsgrQgrgpAAg9QAAgHABgHQAEg0AmgnQAsgrA9AAQAJAAAJABgAM5PdQAVgHAZAAQAWAAAUAGQAjAKAbAbQAaAaAKAgQAHAWAAAYQAAA9grArQgrAsg9AAQg9AAgsgsQgrgrAAg9QAAgBAAgCQABg7AqgqQAagaAhgKIrmxXAdfNOQAHgJAHgHQAsgrA9AAQAEAAAFAAQA3ADAoAoQArArAAA9QAAA9grArQgrAsg9AAQg9AAgsgsQgogogCg3QgBgEAAgFQAAgyAdgmIrztMAPzQ7INQiMAQCAvIhxOtABQlIIPVrMANvhwIr0h1AASyjIPoAtAoNTTITghtAh6w5IBALKASVhwIOKmkAR4vqIhkL1A5Tl+QgagLgWgVQgrgrAAg9QAAg9ArgsQAsgrA9AAQA9AAArArQArAsAAA9QAAAIAAAIQgGAzglAlQgSASgVALQgeAOgjAAQgfAAgagLgAyjGsQgXgjAAgsQAAg9ArgrQAWgWAagKIl6pWAvhHgQgfARgmAAQg9AAgsgsQgMgMgIgNEgiQALqQAuAHAjAjQAKAKAIALQAaAkAAAvQAAAdgKAZQgLAcgXAWQgrAsg9AAQg9AAgrgsQgrgrAAg9QAAg9ArgrQArgrA9AAQAMAAALABII9xoEggtAMpIOKl9A2Hn2IT2DFAs0TTIzpkhA2ypvIS2oWEAiTgG6Ii0TN");
	this.shape_13.setTransform(430.3,239.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("EgkPANNQgrgrAAg9QAAg9ArgsQArgrA9AAQAMAAALACQAuAGAjAjQAKAKAIALQAaAlAAAvQAAAdgKAZQgLAbgXAXQgrArg9AAQg9AAgrgrgAhJjsQgdgKgZgZQgMgMgIgNQgXgjAAgsQAAguAZgjQAIgMAKgLQAegeAngJQARgEATAAQA7AAArArQApApACA6IAAAFQAAA7goArIgDACQgrAsg7AAQgbAAgYgJgEAiTgJRQgwgHgkgkQgVgVgLgaQgLgaAAgfQAAg9ArgrIAPgNQAngeAzAAQA9AAArArQArArAAA9QAAA9grArQgrAsg9AAIgVgBg");
	this.shape_14.setTransform(430.3,254.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("APFTbQgrgrAAg9IAAgDQABg7AqgqQAagaAggKQAWgHAYAAQAXAAAUAGQAiAKAbAbQAbAaAKAgQAHAWAAAYQAAA9gsArQgqAsg+AAQg8AAgsgsgA2Ml0QgbgLgVgVQgrgrAAg9QAAg9ArgsQArgrA+AAQA8AAArArQAsAsAAA9IgBAQQgFAzgmAlQgRASgWALQgdAOgjAAQgfAAgagLgAU/vgQgvgHgkgjQgpgpgCg5IAAgGQAAg9ArgsQAsgrA8AAQA+AAArArQArAsAAA9QAAAOgCANQgIAsghAhQgrArg+AAQgLAAgKgBg");
	this.shape_15.setTransform(410.5,238.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},29).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape_2},{t:this.text}]},30).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape_4},{t:this.shape_2},{t:this.text}]},30).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape_4},{t:this.shape_5},{t:this.shape_2},{t:this.text}]},31).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_4},{t:this.shape_5},{t:this.shape_2},{t:this.text}]},29).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_4},{t:this.shape_7},{t:this.shape_2},{t:this.text}]},31).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_4},{t:this.shape_2},{t:this.text}]},30).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_9},{t:this.shape_2},{t:this.text}]},30).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_12},{t:this.shape_6},{t:this.shape_11},{t:this.shape_10},{t:this.text}]},30).to({state:[{t:this.shape_8},{t:this.shape_9},{t:this.shape_12},{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.text}]},29).to({state:[{t:this.shape_14},{t:this.shape_12},{t:this.shape_9},{t:this.shape_15},{t:this.shape_13},{t:this.text}]},31).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(549.3,253.1,518.4,325.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;