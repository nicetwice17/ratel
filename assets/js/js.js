document.addEventListener("DOMContentLoaded", function (event) {
	const search_btn = document.getElementById('search_btn')
	const search = document.getElementById('search')
	const like = document.querySelectorAll('.like')
	const dislike = document.querySelectorAll('.dislike')
	const burger_btn = document.querySelector('.burger')


	const previewParentMenu = document.getElementById('ribbon_root_tabs');
	const previewMenuItem = document.querySelectorAll('.ribbon_root_tabs_tab');
	const previewContentItem = document.querySelectorAll('.ribbon_content_tab');

	burger_btn.addEventListener('click', () => {
		burger_btn.classList.toggle('active')
		document.querySelector('.mobile_nav').classList.toggle('active')
	})

	like.forEach(like => {
		like.addEventListener('click', () => {
			console.log('like click')
		})
	})

	dislike.forEach(dislike => {
		dislike.addEventListener('click', () => {
			console.log('dislike click')
		})
	})

	search_btn.addEventListener('click', () => {
		search.classList.toggle('active')
	})

	$('.news_main_comments_list_item_answer').click(function () { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $('.news_main_comments').offset().top  // класс объекта к которому приезжаем
		}, 500); // Скорость прокрутки
	});

	if (document.querySelectorAll('.ribbon_root_tabs_tab').length) {

		function hidePreviewContent() {
			previewContentItem.forEach((content) => {
				content.style.display = 'none';
			})

			previewMenuItem.forEach((item) => {
				item.classList.remove('active');
			})
		}

		hidePreviewContent();

		function showPreviewContent(i = 0) {
			previewContentItem[i].style.display = 'block';

			previewMenuItem[i].classList.add('active');
			// previewMenuItem[]
		}

		showPreviewContent();


		previewParentMenu.addEventListener('mouseover', (event) => {
			let target = event.target;

			if (target && target.classList.contains('ribbon_root_tabs_tab')) {
				previewMenuItem.forEach((item, i) => {
					if (target === item) {
						hidePreviewContent()
						showPreviewContent(i)
					}
				})
			}

		})

	}

	// FIXME Добавить файлик с маской локально и проверку на наличие {$('.Phone').length > 1} 
	jQuery(document).ready(function () {
		$('.phone').mask('+7(___)___ __ __', { placeholder: "+7(___)___ __ __", 'translation': { _: { pattern: /[0-9]/ } } });
	});

	if (window.screen.width <= 767) {
		$('.root_small').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: false,
			variableWidth: true,
			arrows: false
		});


	}




});