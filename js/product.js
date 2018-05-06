$('document').ready(function(){
	let animationDuration = 300;
	let currentPrice = Number($("#product-price").text());
	let arrowUp = `<img src = "asserts/arrow_up.png" class = "drop" id = "up">`
	let arrowDown = `<img src = "asserts/arrow_down.png" class = "drop" id = "down">`

	$('.product-info').each(function(i, el){
		target = $(el).closest(".product__description-container").find(".product-container-title");
		if ($(el).css('display') === 'none'){
			$(target).append(arrowDown);
		}
		else{
			$(target).append(arrowUp);
		}
	})

	$('.product-container-title').on('click',function(){
		$(this).next('.product-info').toggle(animationDuration);
		changeArrow($(this))
	});

	$('.product__false-checkbox').on('click', function(){
		let realCheckbox = $(this).closest(".product__feature-container").find(".product__feature-cheker");
		if ($(realCheckbox).prop('checked')) {
			$(realCheckbox).prop('checked', false);
			$(this).attr('src', "asserts/checkbox.png")
		}
		else {
			$(realCheckbox).prop('checked', true);
			$(this).attr('src', "asserts/checkbox_checked.png")
		}
	})

	function changeArrow(elt){
		let target = $(elt).find(".drop");
		if ($(target).prop('id') === 'up'){
			$(target).attr('id', "down");
			$(target).attr('src',"asserts/arrow_down.png");
		}
		else {
			$(target).attr('id', "up");
			$(target).attr('src', "asserts/arrow_up.png");
		}
	}

	$('.product__feature-cheker').change(function(){
		let additionalCost = Number($(this).val()),
			checked = ($(this).prop('checked'));
		currentPrice = (checked)? currentPrice + additionalCost: currentPrice - additionalCost;
		$("#product-price").text(currentPrice);
	})	
})