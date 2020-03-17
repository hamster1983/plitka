$(document).ready(function(){
	
	$('[name="phone"]').inputmask("+7(999) 999-9999");
	
	$('[type="submit"]').click(function(e) {
		let form = $(this).parents('form');
		if(form.find('[name="phone"]').val() == '' || form.find('[name="name"]').val() == '') {
			alert('Поля ИМЯ и ТЕЛЕФОН не могут быть пустыми! Заявка НЕ отправлена! Попробуйте еще раз');
			form.find('[type="text"]')[0].focus();
			return false;
		}
		e.preventDefault();
		$.ajax({
		  cashe: false,
		  type: form.attr('method'),
		  url: form.attr('action'),
		  data: form.serialize(),
		  success: function(data) {
			$('#result .modal-body').html(data);
			$('#result').modal('show');
			//$('form [type="text"]').val('');
		  }
		});
	});
	
	$('.top-slider').slick({
	  infinite: true,
	  autoplay: true,
	  fade: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	  dots: false,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	
	$('.bottom-slider').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 630,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
});