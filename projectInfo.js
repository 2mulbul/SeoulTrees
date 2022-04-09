const spreadClass = "project-info--spread";
const arrowRotation = "forward-arrow-rotation"

const projectInfo = document.querySelector(".project-info");
const logoIcon = document.querySelector("#logo-icon");
const backButton = document.querySelector(".back-button");
const backInfo = document.querySelector(".back-info");


const logoTl = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });
logoTl.to(logoIcon,0.3,{rotation:30})
		.to(logoIcon,3,{rotation:0,ease:Elastic.easeOut.config(1.5,0.1)});

////Sidebar 열고 닫기

logoIcon.addEventListener("click", () => {
	projectInfo.classList.toggle(spreadClass);

	//searchInput.value = "";
	//filterList("");
	//if (projectInfo.classList.contains(spreadClass)) {
	//	searchInput.focus();
	//}
})

backButton.addEventListener("click", () => {
	projectInfo.classList.toggle(spreadClass);
})

const backTl = gsap.timeline();
gsap.set(backInfo, { opacity: 0 , visibility: "hidden"});
backButton.addEventListener("mouseover", () => {
	backTl.clear();
	backTl.restart();

	backTl.to(backInfo, 0, { visibility: " visible" }, 0)
		.to(backInfo, 0.3, { opacity: 1 }, 0.1);
});
backButton.addEventListener("mouseleave", () => {
	backTl.clear();
	backTl.restart();
	
	backTl.to(backInfo, 0.3, { opacity: 0 }, 0)
		.to(backInfo, 0, { visibility: "hidden" });
})