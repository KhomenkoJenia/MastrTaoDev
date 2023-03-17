const elementSection = document.querySelectorAll("section");
const containerFluid = document.querySelectorAll(".container-fluid");

// Получить все элементы, которые должны быть анимированы
const animatedElements = document.querySelectorAll(".template-title");

// Добавить обработчик события прокрутки к окну браузера
window.addEventListener("scroll", () => {
	// Для каждого элемента, который должен быть анимирован
	animatedElements.forEach((element) => {
		// Проверить, находится ли элемент в видимой области экрана
		const elementPosition = element.getBoundingClientRect();
		const elementTop = elementPosition.top;
		const elementBottom = elementPosition.bottom;
		const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

		// Если элемент находится в видимой области экрана, добавить класс CSS для запуска анимации
		if (isVisible) {
			element.classList.add("animate__animated", "animate__fadeInUp");
			element.style.setProperty("--animate-duration", "1s");
		}
	});
});
const animatedElementsLeft = document.querySelectorAll(".template-title-left");

window.addEventListener("scroll", () => {
	animatedElementsLeft.forEach((element) => {
		const elementPosition = element.getBoundingClientRect();
		const elementTop = elementPosition.top;
		const elementBottom = elementPosition.bottom;
		const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

		if (isVisible) {
			element.classList.add("animate__animated", "animate__fadeInLeft");
			element.style.setProperty("--animate-duration", "1s");
		}
	});
});

const containerMobile = () => {
	containerFluid.forEach((item) => {
		const sectionHasFluid = item.closest("section");
		if (!sectionHasFluid.classList.contains("first-screen")) {
			sectionHasFluid.closest("section").style.padding = "0 50px";
		}
	});
};

const containerDesktop = () => {
	containerFluid.forEach((item) => {
		const sectionHasFluid = item.closest("section");
		if (!sectionHasFluid.classList.contains("first-screen")) {
			sectionHasFluid.closest("section").style.padding = "0 0";
		}
	});
};

const adopContainer = (x) => {
	if (!x.matches) {
		containerMobile();
	} else {
		containerDesktop();
	}
};
const x = window.matchMedia("(max-width: 991px)");
x.addEventListener("change", adopContainer);
window.addEventListener("resize", () => {});
adopContainer(x);

$(document).ready(function () {
	$(".banner").slick({
		dots: true,
		arrows: true,
		appendArrows: ".banner-nav",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false,
				},
			},
		],
	});
});

mobileOnlySlider("#slider-advantage", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
		mobileFirst: true,
		dots: $dots,
		arrows: $arrows,
		responsive: [
			{
				breakpoint: $breakpoint,
				settings: "unslick",
			},
		],
	};

	slider.slick(settings);

	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
			return;
		}
		if (!slider.hasClass("slick-initialized")) {
			return slider.slick(settings);
		}
	});
}

const btnBox = document.querySelectorAll(".input-checkbox");

btnBox.forEach((item) => {
	item.closest(".col-md-6").classList.add("button-group");
});

document.getElementById("fileInput").onchange = function () {
	document.getElementById("file-name").innerHTML = this.files[0].name;
};

$(".slider-template").slick({
	dots: false,
	infinite: false,
	speed: 600,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1405,
			settings: {
				slidesToShow: 2,

				infinite: true,
			},
		},
		{
			breakpoint: 1131,
			settings: {
				slidesToShow: 1,
				dots: true,
				arrows: false,
			},
		},

		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
