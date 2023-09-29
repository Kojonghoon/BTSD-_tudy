const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
	//console.log(this.readyState, this.status)

	if (this.readyState == 4 ) {
		//console.log(this.response)
		const dataObj = JSON.parse(this.response)
		//console.log(dataObj)

		let temp = ""; //이건 변해야 하니까 const로 저장하면 Err. 그리고 선언만 해주면 undefined되므로 값 없음 처리를 해줌
		for (let i in dataObj) {
			temp += "<p>" + i + ":" + dataObj[i].title + "(" + dataObj[i].description + ")" + "</p>" + "\n"
		}
		console.log(temp)
		document.getElementById("main").innerHTML = temp
		// document.getElementById("main").innerText = temp
	}

}


xhr.open("GET", "./data_003.txt", true)
//글자가 꺠지거나 한다면 JSON형식의 텍스트 파일이 파일 저장시 UTF-8로 저장했는지 확인.
xhr.send();