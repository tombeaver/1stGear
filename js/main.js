function openMenu() {
	document.querySelector('.hamMenu').style.height = "100vh";
	document.querySelector('.hamMenu').style.top = 0;
	document.querySelector(".hamburger").style.display = "none";
	document.querySelector(".hamClose").style.display = "block";
}

function closeMenu() {
	document.querySelector('.hamMenu').style.height = 0;
	document.querySelector('.hamMenu').style.top = "-60px";
	document.querySelector(".hamClose").style.display = "none";
	document.querySelector(".hamburger").style.display = "block";
	document.querySelector('.filterScreen').style.width = 0;
	document.querySelector(".hamClose h1").style.color = "#fff";
}

function filter() {
	document.querySelector('.filterScreen').style.width = "100%";
	document.querySelector(".hamClose").style.display = "block";
	document.querySelector(".hamClose h1").style.color = "#000";
}

$(function() {
	$(".drop").on("mouseover", function() {
		$(".drop li").css({
			color: "#65AE74"
		});
		$(".dropdown").css({
			height: "60vh"
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
		})
		$(".downArrow").css({
			display: "block"
		})
	})

$( "#accordion" ).accordion({
      heightStyle: "content"
    });

});