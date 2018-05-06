$('document').ready(function(){
	let imgLinks = $('.slider_slide-src'),
		urls = Array.prototype.map.call(imgLinks, (link) => {
			let url = $(link).attr('href');
			new Image().src = url;
			return $(link).attr('href')
		}),
		slide = $('#current-slide'),
		imgNumber = 0,
		imgCount = urls.length,
		autoSlideDelay = 7000,
		animationDelay = 500,
		autoSlide = setTimeout(next, autoSlideDelay),
		animation;
		

		$("#switch-1").toggleClass('checked').attr('src', 'asserts/box_checked.jpg');
		$(slide).attr('src', urls[imgNumber]);

	function goTo(pos){
		$(`#switch-${imgNumber+1}`).toggleClass('checked').attr('src', 'asserts/box.png');
		imgNumber = pos;
		clearTimeout(autoSlide);
		if (animation) clearTimeout(animation);
		$(`#switch-${imgNumber + 1}`).toggleClass('checked').attr('src', 'asserts/box_checked.jpg');
		$(slide).fadeToggle(animationDelay);
		animation = setTimeout(() => {			
			$(slide).attr('src', urls[imgNumber]).fadeToggle(animationDelay);
			autoSlide = setTimeout(next, autoSlideDelay);
		}, animationDelay)
	}

	function next(){				
		let num = (imgNumber + 1 < imgCount)? imgNumber+1: 0;
		goTo(num);
	}

	function last(){
		let num = (imgNumber - 1 >= 0)? imgNumber-1: imgCount-1;
		goTo(num);
	}

	$('#next-slide').on('click', next);
	$('#last-slide').on('click', last);
	$('.slider__switch').on('click',function(){
		let pos = $(this).attr('id').split('-')[1] - 1;
		goTo(pos);
	})
	
})