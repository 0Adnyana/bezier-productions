document.addEventListener("DOMContentLoaded", () => {
	const portfolioSection = document.getElementById("portfolio");

	const movies = document.querySelectorAll("#movie-picker > div");

	const backgrounds = [
		"url('./public/images/portfolio1.gif')",
		"url('./public/images/portfolio2.gif')",
		"url('./public/images/portfolio1.gif')",
		"url('./public/images/portfolio2.gif')",
		"url('./public/images/portfolio1.gif')",
	];

	var currentIndex = 0;
	movies.forEach((movie, index) => {
		movie.addEventListener("mouseover", () => {
			movies[currentIndex].classList.remove("text-opacity-60");
			portfolioSection.style.backgroundImage = backgrounds[index];
			movie.classList.add("text-opacity-60");
			currentIndex = index;
		});
	});
});

window.addEventListener("scroll", function () {
	const navbar = document.getElementById("navbar");

	if (window.scrollY > 100) {
		navbar.classList.add("bg-black");
	} else {
		navbar.classList.remove("bg-black");
	}
});
