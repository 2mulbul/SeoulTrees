const spreadClass = "sidebar--spread";
const arrowRotation = "forward-arrow-rotation"

const optionsList = document.querySelectorAll(".option");
const searchInput = document.querySelector(".search input");

// const IsKey = "sidebarspreaded";

const sidebar = document.querySelector(".sidebar");
const titlebarIcon = sidebar.querySelector(".titlebar__icon-container");
const forwardArrow = sidebar.querySelector(".forward-arrow");



////Sidebar 열고 닫기

// if(localStorage.getItem(IsKey) === "true") {
//   sidebar.classList.add(spreadClass);
// }

titlebarIcon.addEventListener("click", () => {
	sidebar.classList.toggle(spreadClass);
	forwardArrow.classList.toggle(arrowRotation);
	// localStorage.setItem(IsKey,sidebar.classList.contains(spreadClass));

	searchInput.value = "";
	filterList("");
	if (sidebar.classList.contains(spreadClass)) {
		searchInput.focus();
	}
})



//Search input 필터링 내용


searchInput.addEventListener("keyup", function (e) {
	filterList(e.target.value);
});

const filterList = searchTerm => {
	optionsList.forEach(o => {
		let label = o.querySelector("label").innerHTML;
		if (label.indexOf(searchTerm) != -1) {
		o.style.display = 'block';
		} else {
		o.style.display = 'none';
		}
	})
}