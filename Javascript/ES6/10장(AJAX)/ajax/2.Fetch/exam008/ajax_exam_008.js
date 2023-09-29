//1. 메뉴 클릭 시 상세설명 출력 
//  --> Error Catch
//	--> Fetch API
function loadButton(fileName) {

	//fetch API
	// fetch(fileName).then(function (response) {
	// 	response.text().then(function (t) {

	// 		//출력
	// 		document.querySelector(".menuListDetail").innerHTML = t
	// 	})
	// })

	fetch(fileName)
		.then(function (response) {
			if (response.ok)
				return response.text()
			throw new Error("Response was not ok.")
		})
		.then(function (text) {
			//출력
			document.querySelector(".menuListDetail").innerHTML = text
		})
		// .catch(function (err) {
		// 	alert(`요청한 전송이 실패했습니다.-->${err.message}`)
		// })
		.catch(err => console.log("Error : ", err))
}