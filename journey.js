/*This is the JavaScript file for Parallax Test Page */
$(document).ready(main);

function main() {

  // Hides the things to be hidden
  $("body").hide()
  $("body").fadeToggle(3000);
  $(".myContainer").hide();
  $(".dimmer").hide();
  $(".dimmer2").hide();

	$(".navBtn").click(function(){
		$(".mySideBar").toggleClass("sideVisible");
    $(".dimmer2").fadeToggle(500);
	});

// (function cycle() {
//
//     divs.eq(i).fadeIn(400)
//               .delay(5000)
//               .fadeOut(400, cycle);
//
//     i = ++i % divs.length;
//
// })();

  // toggles the dimmer and pop-up
	$(".myBtn").click(function(){
		$(".myContainer").slideToggle(500);
    $(".dimmer").fadeToggle(500);
	});

  $(".scrollBtn").click(function(){
		$(".myContainer").slideToggle(500);
    $(".dimmer").fadeToggle(500);
	});

  //uses dimmer to close the pop-up
  $(".dimmer").click(function(){
    $(".myContainer").slideToggle(500);
    $(".dimmer").fadeToggle(500);
  });

  $(".dimmer2").click(function(){
    $(".mySideBar").toggleClass("sideVisible");
    $(".dimmer2").fadeToggle(500);
  });

/****************************************************************************
* INTRODUCTION STUFF
*****************************************************************************/
  // for cycling between text

  //Initial Hide
  var divs = $('div[id^="contentI-"]').hide(); //hiding content
  $("#mathematician").hide() //hiding character3
  $("#I-1chatBox1").hide() //hiding charcter3 chatBox
  $("#teacher").hide() //hiding character2
  $("#I-1chatBox2").hide() //hiding charcter2 chatBox
  $("#ta").hide() //hiding character2
  $("#I-3chatBox1").hide() //hiding charcter2 chatBox
  //Inital Show
  $('div[id^="contentI-1"]').fadeIn(400); //Showing Content
  $("#mathematician").delay(1500).fadeIn(400); //Showing Character3
  $("#teacher").delay(1500).fadeIn(400); //Showing Character2

  //Clicking character 3 I-1
  $("#mathematician").click(function () {
    $("#I-1chatBox1").delay(500).fadeToggle(200);
  })

  //Clicking character 2 I-1
  $("#teacher").click(function () {
    $("#I-1chatBox2").delay(500).fadeToggle(200);
  })

  //Clicking ta I-3
  $("#ta").click(function () {
    $("#I-3chatBox1").delay(500).fadeToggle(200);
  })

  //going to I-2
  $("#nextBtnI-1").click(function () {
    $('div[id^="contentI-1"]').fadeOut(400);
    $("#mathematician").fadeOut(400);
    $("#teacher").fadeOut(400);
    $('div[id^="contentI-2"]').delay(500).fadeIn(400);
  })

  //going back to I-1
  $("#backBtnI-2").click(function () {
    $('div[id^="contentI-2"]').fadeOut(400);
    $('div[id^="contentI-1"]').delay(500).fadeIn(400);
    $("#mathematician").delay(500).fadeIn(400);
    $("#teacher").delay(500).fadeIn(400);
  })

  //going to I-3
  $("#nextBtnI-2").click(function () {
    $('div[id^="contentI-2"]').fadeOut(400);
    $('div[id^="contentI-3"]').delay(500).fadeIn(400);
    $("#ta").delay(500).fadeIn(400);
  })

  //going back to I-2
  $("#backBtnI-3").click(function () {
    $('div[id^="contentI-3"]').fadeOut(400);
    $('div[id^="contentI-2"]').delay(500).fadeIn(400);
    $("#ta").fadeOut(400);
  })

  //going to I-4
  $("#nextBtnI-3").click(function () {
    $('div[id^="contentI-3"]').fadeOut(400);
    $('div[id^="contentI-4"]').delay(500).fadeIn(400);
    $("#ta").fadeOut(400);
  })

  //going back to I-3
  $("#backBtnI-4").click(function () {
    $('div[id^="contentI-4"]').fadeOut(400);
    $('div[id^="contentI-3"]').delay(500).fadeIn(400);
    $("#ta").delay(500).fadeIn(400);
  })

  //going to I-5
  $("#nextBtnI-4").click(function () {
    $('div[id^="contentI-4"]').fadeOut(400);
    $('div[id^="contentI-5"]').delay(500).fadeIn(400);
  })

  //going back to I-4
  $("#backBtnI-5").click(function () {
    $('div[id^="contentI-5"]').fadeOut(400);
    $('div[id^="contentI-4"]').delay(500).fadeIn(400);
  })

  /****************************************************************************
  * SECTOR ONE STUFF
  *****************************************************************************/
  //Initial Hide
  var divs = $('div[id^="contentS1-"]').hide(); //hiding content
  //Inital Show
  $('div[id^="contentS1-1"]').fadeIn(400); //Showing Content

  //going to s1-2
  $("#nextBtnS1-1").click(function () {
    $('div[id^="contentS1-1"]').fadeOut(400);
    $('div[id^="contentS1-2"]').delay(500).fadeIn(400);
  })

  //going back to S1-1
  $("#backBtnS1-2").click(function () {
    $('div[id^="contentS1-2"]').fadeOut(400);
    $('div[id^="contentS1-1"]').delay(500).fadeIn(400);
  })

  //going to s1-3
  $("#nextBtnS1-2").click(function () {
    $('div[id^="contentS1-2"]').fadeOut(400);
    $('div[id^="contentS1-3"]').delay(500).fadeIn(400);
  })

  //going back to s1-2
  $("#backBtnS1-3").click(function () {
    $('div[id^="contentS1-3"]').fadeOut(400);
    $('div[id^="contentS1-2"]').delay(500).fadeIn(400);
  })

  /****************************************************************************
  * SECTOR TWO STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR THREE STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR FOUR STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR FIVE STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR SIX STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR SEVEN STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR EIGHT STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR NINE STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR TEN STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR ELEVEN STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR TWELVE STUFF
  *****************************************************************************/

  /****************************************************************************
  * SECTOR THIRTEEN STUFF
  *****************************************************************************/


	// //Parallax Effect
	// $(window).scroll(function() {
	//
	// 	var wScroll = $(this).scrollTop();
	//
	// 	$(".title img").css({
	// 		"transform" : "translate(0, "+ wScroll/2 +"px)"
	// 	});
	//
	// 	$(".fore img").css({
	// 		"transform" : "translate(0, "+ wScroll/4 +"px)"
	// 	});
	//
	// 	console.log(wScroll);
	//
	//
	// });


}
