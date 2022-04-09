const optionsList = document.querySelectorAll(".option");
const searchInput = document.querySelector(".search input");
const radioList = document.querySelectorAll(".radio");

//Search input 필터링 내용

const filterList = searchTerm => {
	optionsList.forEach(o => {
		let label = o.querySelector("label").innerHTML;
		if (label.indexOf(searchTerm) != -1) {
		o.style.display = 'flex';
		} else {
		o.style.display = 'none';
		}
	})
}


searchInput.addEventListener("keyup", function (e) {
	filterList(e.target.value);
});


const districtSelectbox = document.querySelector(".district-selectbox");
const districtInfo = document.querySelector(".district-info");
const districtTl = gsap.timeline();
let districtSelecting = 0;


gsap.set(districtSelectbox, { opacity: 0 , visibility: "hidden"});


districtInfo.addEventListener("click", () => {
	if (districtSelecting == 0) {
		districtTl.clear();
		districtTl.restart();

		districtTl.to(districtSelectbox, 0, { visibility: " visible" },0)
			.to(districtSelectbox, 0.3, { opacity: 1 }, 0.1)
			.call(function () {
				districtSelecting = 1;
				console.log("districtSelecting", districtSelecting);
			});
	} else if (districtSelecting == 1) {
		districtTl.clear();
		districtTl.restart();

		districtTl.to(districtSelectbox, 0.3, { opacity: 0 },0)
				.to(districtSelectbox, 0, { visibility: "hidden" })
				.call(function () {
				districtSelecting = 0;
				console.log("districtSelecting", districtSelecting);
			});
	}
	
})



districtInfo.addEventListener("mouseover", () => {
	if (districtSelecting == 1) {
		bigTreeName.innerHTML = "이 동네로 볼게요!";

	} else { 
		bigTreeName.innerHTML = "다른 동네도 볼래요!";
	}
    bigTreeName.style.color = "#ffffff";

    gsap.to(bigTreeName, 0.2, { opacity: 1, ease: Power3.easeInOut });
})

districtInfo.addEventListener("mouseleave", () => {
    gsap.to(bigTreeName, 0.2, { opacity: 0, ease: Power3.easeInOut });
})

