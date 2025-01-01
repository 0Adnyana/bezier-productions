document.addEventListener("DOMContentLoaded", () => {
	// portfolio section
	const portfolioSection = document.getElementById("works");
	const movies = document.querySelectorAll("#movie-picker > div");
	const movieDescription = document.getElementById("movie-description");

	const backgrounds = [
		"url('./public/works/portfolio1.webp')",
		"url('./public/works/portfolio2.webp')",
		"url('./public/works/portfolio3.webp')",
		"url('./public/works/portfolio4.webp')",
		"url('./public/works/portfolio5.webp')",
	];

	const descriptions = [
		"When a struggling artist is abducted by a mysterious and unhinged woman, he finds himself trapped in a nightmare where reality and obsession blur. As he uncovers her twisted motives, survival becomes a game of wits, and escaping her clutches could mean facing an even darker truth.",
		"A special ops SWAT team is sent deep into enemy territory to extract a key informant holding secrets that could prevent global catastrophe. As alliances fracture and loyalties are tested, the team must confront not only their foes but also their own moral dilemmas in the fog of war.",
		"This gripping documentary unravels the chilling story of a serial killer who terrorized a small town. Through interviews with reporters, detectives, and the grieving families, Echoes in Silence pieces together the devastating impact of the crimes and the relentless pursuit of justice.",
		"From the gritty streets to the bright lights of the championship ring, Heavy Lies the Crown follows a determined young boxer who fights to overcome poverty, personal loss, and self-doubt. With grit and resilience, he rises against all odds to become a symbol of hope and perseverance.",
		"Under the neon haze of a bustling Asian metropolis, lives intertwine in a story of longing, heartbreak, and fleeting connections. With its lush green hues and poetic atmosphere, Neon Fragments captures the beauty of solitude and the bittersweet moments that define human connection.",
	];

	var currentIndex = 0;
	movies.forEach((movie, index) => {
		movie.addEventListener("mouseover", () => {
			movies[currentIndex].classList.remove("text-opacity-60");
			portfolioSection.style.backgroundImage = backgrounds[index];
			movie.classList.add("text-opacity-60");
			movieDescription.innerText = descriptions[index];
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
