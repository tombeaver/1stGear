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
}

$(function() {
	$(".drop").on("mouseover", function() {
		$(".drop li").css({
			color: "#65AE74"
		});
		$(".dropdown").css({
			height: "60vh"
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

		$(".upArrow").css({
			display: "none"
		})
		$(".downArrow").css({
			display: "block"
		})
	})

});