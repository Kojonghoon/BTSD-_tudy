//1. Fetch함수를 이용하여 메뉴 동적으로 만들기
fetch("./data_009_menu.txt").then(function (response) {
	response.text().then(function (t) {

		//변수 선언
		const menus = t.split(",");
		let i = 0, appendBtns = '';
		//console.log(menus)

		//반복문 돌면서 메뉴 하나하나를 생성
		while (i < menus.length) {
			let menuName = menus[i]
			let fileName = "data_009_" + (i + 1) + ".txt"

			const btn = `<button class="button" onclick="loadButton('${fileName}');">${menuName}</button> `
			//console.log(btn)

			appendBtns += btn
			i += 1
		}
		//생성한 버튼을 페이지에 붙이기
		document.querySelector("#menu").innerHTML = appendBtns
	})
})



//2. 메뉴 버튼 클릭 시 상세설명 출력 Fetch
function loadButton(fileName) {

	// fetch(fileName).then(function (response) {
	// 	response.text().then(function (t) {
	// 		//출력
	// 		console.log(t)
	// 		document.querySelector(".menuListDetail").innerHTML = t
	// 	})
	// })

	// fetch(fileName)
	// 	.then(function (response) {
	// 		return response.text()
	// 	})
	// 	.then(function (t) {
	// 		//출력
	// 		console.log(t)
	// 		document.querySelector(".menuListDetail").innerHTML = t
	// 	})

	fetch(fileName)
		.then(response => response.text())
		.then(t => document.querySelector(".menuListDetail").innerHTML = t)
}


