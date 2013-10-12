/*
Firefox super responsive scroll (c) Keith Clark - MIT Licensed
*/
/*(function(doc) {

  var root = doc.documentElement;

  // Not ideal, but better than UA sniffing.
  if ("MozAppearance" in root.style) {

    // determine the vertical scrollbar width
    var scrollbarWidth = root.clientWidth;
    root.style.overflow = "scroll";
    scrollbarWidth -= root.clientWidth;
    root.style.overflow = "";
    
    // create a synthetic scroll event
    var scrollEvent = doc.createEvent("UIEvent")
    scrollEvent.initEvent("scroll", true, true);
    
    // event dispatcher
    function scrollHandler() {
      doc.dispatchEvent(scrollEvent)
    }

    // detect mouse events in the document scrollbar track
    doc.addEventListener("mousedown", function(e) {
      if (e.clientX > root.clientWidth - scrollbarWidth) {
        doc.addEventListener("mousemove", scrollHandler, false);
        doc.addEventListener("mouseup", function() {
          doc.removeEventListener("mouseup", arguments.callee, false);
          doc.removeEventListener("mousemove", scrollHandler, false);
        }, false)
      }
    }, false)

    // override mouse wheel behaviour.
    doc.addEventListener("DOMMouseScroll", function(e) {
      // Don't disable hot key behaviours
      if (!e.ctrlKey && !e.shiftKey) {
        root.scrollTop += e.detail * 16;
        scrollHandler.call(this, e);
        e.preventDefault()
      }
    }, false)
 
  }
})(document); */

$(document).ready(function(){
	var $window = $(window);
	deviceCenterMargin();
	newDevice();
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
		
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '0% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });
    
    var height = $("footer").height();
    $("#footer-logo").width(height);
    $(window).resize(function(){
	    height = $("footer").height();
	    $("#footer-logo").width(height);
	    deviceCenterMargin();
	    newDevice();
    });    
}); 

function deviceCenterMargin(){
		var imgHeight = $("#devices > img").height();
		var divHeight = $("#devices").height();
		var deltaH = divHeight - imgHeight;
		var marginTop = deltaH/3;
		$("#devices > img").css({marginTop: marginTop});
		if ($(window).width() >= 900){
			$(".second-section > article > h2").css({paddingTop: marginTop});
		} else {
			$(".second-section > article > h2").css({paddingTop: "20px"});
		}
		}
	$("#devices > img").click(function(){
		alert("doc height is" + $(window).height() + "\n doc wodth is " + $(window).width());
	});
function newDevice(){
	var $window = $(window);
	var img = $("#devices > img");
	var container = $("#devices");
	if($window.width() > 800){
		img.attr("src","img/nexus7.png");
		container.css({display: "block"});
	} else if ($window.width() < 800) {
		container.css({display: "none"});
	}
}