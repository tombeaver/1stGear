
// Sliding hamburger menu
// Open
function openMenu() {
	document.querySelector('.hamMenu').style.height = "100vh";
	document.querySelector('.hamMenu').style.top = 0;
	document.querySelector(".hamburger").style.display = "none";
	document.querySelector(".hamClose").style.display = "block";
}

// Close
function closeMenu() {
	document.querySelector('.hamMenu').style.height = 0;
	document.querySelector('.hamMenu').style.top = "-60px";
	document.querySelector(".hamClose").style.display = "none";
	document.querySelector(".hamburger").style.display = "block";
	document.querySelector('.filterScreen').style.width = 0;
	document.querySelector('.filterScreen').style.paddingLeft = "0";
	document.querySelector(".hamClose h1").style.color = "#fff";
}

// Filter screen 
function filter() {
	document.querySelector('.filterScreen').style.width = "100%";
	document.querySelector('.filterScreen').style.paddingLeft = "20px";
	document.querySelector(".hamClose").style.display = "block";
	document.querySelector(".hamClose h1").style.color = "#000";
}




	


// Dropdown function for department section to reveal large menu on hover
$(function() {
	$(".drop li").on("mouseover", function() {
		$(".drop li").css({
			color: "#65AE74"
		});
		$(".dropdown").css({
			height: "450px"
		});
		$(".dropdown").css({
			marginTop: "75px"
		});

		$(".downArrow").css({
			display: "none"
		})
		$(".upArrow").css({
			display: "block"
		})
	});

	// The department menu goes away
	$(".dropdown").on("mouseleave", function() {
		$(".dropdown").css({
			height: 0
		});
		$(".drop li").css({
			color: "#FFF"
		});
		$(".dropdown").css({
			marginTop: "75px"
		});

		$(".upArrow").css({
			display: "none"
		});
		$(".downArrow").css({
			display: "block"
		});
	});


	// Accordions
	$( "#accordion2, #accordion3, #accordion4" ).accordion({
	    heightStyle: "content"
	 });
	$( "#accordion, #accordion4, #accordion5" ).accordion({
		collapsible: true,
		active: false,
	    heightStyle: "content"
	 });


	// Gallery for Product Page
	$(".thumbnails img").on("click", function() {
    	var $img = $(this).clone();
    	$(".largeItem img").remove();
    	$(".largeItem").append($img);
    	$(".thumbnails img").removeClass("boxShadow");
    	$(this).addClass("boxShadow");
    });

	// Clicking the sizing chart on Product Page 
	$(".box").on("click", function() {
		$(".box").removeClass("boxShadow");
		$(this).addClass("boxShadow");
	});

	// click on more to reveal more details of product
	$(".more").on("click", function() {
		$(".description p").css({
			height: "auto"
		});
		$(".less").css({
			display: "block"
		});
		$(".more").css({
			display: "none"
		});
	});

	// click on less to show less details of product
	$(".less").on("click", function() {
		$(".description p").css({
			height: "60px"
		});
		$(".less").css({
			display: "none"
		});
		$(".more").css({
			display: "block"
		});
	});

	//reveal categories within department dropdown
	

	$(".leftSide li").on("mouseover", function() {
		$('.leftSide .under').css({
			width: 0
		});
		$(this).children('.under').css({
			width: ($(this).children('a').width() + 'px')
		});
	});

	$(".rightSide li").on("mouseover", function() {
		$('.rightSide .under').css({
			width: 0
		});
		$(this).children('.under').css({
			width: ($(this).children('a').width() + 'px')
		});
	});





});