const smallTrees = document.querySelectorAll(".small-trees");
const smallTreeName = document.querySelector(".small-tree-name");


smallTrees.forEach(tree => {
	tree.addEventListener("mouseover", () => {
		smallTreeName.innerHTML = tree.id;
		smallTreeName.classList.add("show");
		let rect = tree.getBoundingClientRect();
		let Xdis = rect.left + rect.width / 2;
		console.log(rect.left);
		smallTreeName.style.left = Xdis + "px";

		if (tree.classList.contains("header-trees")) {
			smallTreeName.style.top = 7.2 + "rem";
			smallTreeName.style.bottom = "unset";

			console.log("위");
		} else if (tree.classList.contains("footer-trees")) {
			smallTreeName.style.top = "unset";
			smallTreeName.style.bottom = 7.2 + "rem";
			console.log("아래");
		}
	})
	tree.addEventListener("mouseleave", () => {
		smallTreeName.classList.remove("show");
	})
})

