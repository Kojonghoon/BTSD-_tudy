//한글 깨짐과 백틱(역따옴표) 사용

//1.실습
function loadTouristAttractions() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (this.readyState == 4) {
			const dataObj = JSON.parse(this.response)

			let temp = ""
			for (let i in dataObj) {
				//temp += "<p>" + i + ":" + dataObj[i].title + "(" + dataObj[i].description + ")" + "</p>" + "\n"
				temp += `<p>${i}:${dataObj[i].title}(${dataObj[i].description})</p>\n`
				//			  0 :불국사             (불국사는 한국의 유명한 사찰로~~~~~~~~)
			}
			console.log(temp)
			document.getElementById("main").innerHTML = temp
		}
	}

	xhr.open("GET", "./data_004.txt", true)
	xhr.send();
}