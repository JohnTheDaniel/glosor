
function changePictureWidth(){
	/* Dimensionen för bilden är 1148 × 1994 
		Höjden = 1.73693379791 * bredden
		y = 1.73693379791 * x
	*/
	var kp = 1994/1148; //k - konstant, p - picture
	
	//Initialize the width
	var initialHeight = $(".phoneholder").height();
	$(".phoneholder").width(initialHeight/kp);
	$(".picture").width(initialHeight/kp);
	
	$("footer").css({
		paddingLeft : $(".picture").width()
	});
	
	//If we resize the window
	$(window).resize(function(){
		var initialHeight = $(".phoneholder").height();
		$(".phoneholder").width(initialHeight/kp);
		$(".picture").width(initialHeight/kp);
		
		$("footer").css({
			paddingLeft : $(".picture").width()
		});
	});
	
	
	/* 
	Bredden på skärmytan öka linjärt med bredden på bilden. Därför bör det gå att skriva en funktion som räknar ut 
	skärmytans bredd. 
	1. Hitta en konstant, hur många gånger större bildens bredd är ijämfört med skärmytan. 
	2. Fixa margin-left: -(hälften av bildens bredd); för att centrera den
	3. Förhållandet inom skärmen 16:9, 9 är bredden. Räkna ut höjden och gör steg 3 fast för margin-top:;


	Skärmytans bredd = 720px
	Skärmytans höjd = 1280px
	
	
	bildens bredd/skärmytans bredd = 1148/720
	
	*/
	
	var pictureWidth = initialHeight/kp
	
	var ksw = 1148/720 //k - konstant, s - screenshot, w - width
	var ksh = 1994/1280 //h - height
	var screenshotWidth = pictureWidth/ksw + 2
	var screenshotHeight = initialHeight/ksh + 2
	
	$(".screenshot").height(screenshotHeight).width(screenshotWidth).css({
		marginTop : -screenshotHeight/2,
		marginLeft : -screenshotWidth/2.05
	});
	$(window).resize(function(){
		var pictureWidth = $(".picture").width();
	
		var ksw = 1148/720 //k - konstant, s - screenshot, w - width
		var ksh = 1994/1280 //h - height
		var screenshotWidth = pictureWidth/ksw + 2;
		var screenshotHeight = $(".picture").height()/ksh + 2;
		
		$(".screenshot").height(screenshotHeight).width(screenshotWidth).css({
			marginTop : -screenshotHeight/2,
			marginLeft : -screenshotWidth/2.05
			});
	});
}

$(document).ready(function() {
	changePictureWidth();
});