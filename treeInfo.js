const smallTrees = document.querySelectorAll(".small-trees");
const smallTreeName = document.querySelector(".small-tree-name");

const treeAll = document.querySelectorAll(".treeAll");
const smallTl = gsap.timeline();



gsap.set(smallTreeName, { opacity: 0 , visibility: "hidden"});






smallTrees.forEach(tree => {
	tree.addEventListener("mouseover", (e) => {
		smallTreeName.innerHTML = tree.id;

		smallTl.clear();
		smallTl.restart();
		smallTl.to(smallTreeName, 0, { visibility: " visible" }, 0)
			.to(smallTreeName, 0.2, { opacity: 1 , ease: Power3.easeInOut });
		
		let rect = tree.getBoundingClientRect();
		let Xdis = rect.left + rect.width / 2;
		console.log(rect.left);
		smallTreeName.style.left = Xdis + "px";

		if (tree.classList.contains("header-trees")) {
			smallTreeName.style.top = 9 + "rem";
			smallTreeName.style.bottom = "unset";

			console.log("위");
		} else if (tree.classList.contains("footer-trees")) {
			smallTreeName.style.top = "unset";
			smallTreeName.style.bottom = 9 + "rem";
			console.log("아래");
		}

		treeAll.forEach(tr => {
			if (tr.dataset.name == e.target.id) {
				if (e.target.id === "메타세콰이어") {
					smallTreeName.style.color = "rgb(180, 120, 60)";
				} else if (e.target.id === "소나무") {
					smallTreeName.style.color = "rgb(50, 153, 50)";
				} else if (e.target.id==="느티나무") {
					smallTreeName.style.color = "rgb(120, 180, 60)";
				} else {
					let treeColor = window.getComputedStyle(tr).fill;
					smallTreeName.style.color = treeColor;
				}
				
			}
			
		})
		
	})
	tree.addEventListener("mouseleave", () => {
		smallTl.clear();
		smallTl.restart();
		smallTl.to(smallTreeName, 0.2, { opacity: 0 , ease: Power3.easeInOut },0)
				.to(smallTreeName, 0, { visibility: "hidden" })
		
	})
})


