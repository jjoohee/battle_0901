window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		consle.innerHTML = t

			if (t > 400) {
			people1_4.style.animation = "peo 0.3s infinite ease-in alternate";
			people1_3.style.animation = "peo 0.3s 0.2s infinite ease-in alternate";
			people1_2.style.animation = "peo 0.3s 0.4s infinite ease-in alternate";
			people1_1.style.animation = "peo 0.3s 0.6s infinite ease-in alternate";

		}

		if (t > 800) {
			people1_24.style.animation = "peo 0.3s infinite ease-in alternate";
			people1_23.style.animation = "peo 0.3s 0.2s infinite ease-in alternate";
			people1_22.style.animation = "peo 0.3s 0.4s infinite ease-in alternate";
			people1_21.style.animation = "peo 0.3s 0.6s infinite ease-in alternate";

		}

		if (t > 3300) {
			sword1_2.style.opacity = "0%";
			sword2_2.style.opacity = "0%";
			sword3_2.style.opacity = "0%";
			sword4_2.style.opacity = "0%";
			sword5_2.style.opacity = "0%";
			sword6_2.style.opacity = "0%";
			sword7_2.style.opacity = "0%";

		}
		else{

			}

		if (t > 5300) {
			trophy.style.animation = "tro 2s ease alternate";
			trophy2.style.animation = "tro 2s ease alternate";
			trophy2.style.opacity = "100%";
			trophy.style.opacity = "0%";

		}
		else{
			trophy.style.animation = "";
			trophy2.style.animation = "";
			trophy2.style.opacity = "";
			trophy.style.opacity = "";
		}

		if (t > 7000) {
			people5_1arm.style.animation = "armmovefi 2s forwards";
			people5_2arm.style.animation = "armmovefii 2s forwards";

		}
		else{
			people5_1arm.style.animation = "";
			people5_2arm.style.animation = "";
		}

}


//스크롤시 다른 링크로 이동

   $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
        console.log(scrolltop);
        var height = $(document).height();
        console.log(height);
        var height_win = $(window).height();
        console.log(height_win);
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        
      var url = "https://jjoohee.github.io/voice/";
		$(location).attr('href',url);
        
    }
});
