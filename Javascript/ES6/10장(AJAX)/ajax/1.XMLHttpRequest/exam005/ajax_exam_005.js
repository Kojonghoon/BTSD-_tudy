function loadTouristAttractions2(obj) {
	const xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function () {
		if (this.readyState == this.DONE) {
			//console.log(this.response)
			const res = JSON.parse(this.response)
			//console.log(res.length)//5
			//console.log(res[0].ta_imgurl)
			//console.log(res[0].id)	//0(이 ID값은 두번째 텍스트 파일로 부터 얻은 것)
			//console.log(obj.id)		//0, 1, 2, 3, 4(이 ID값은 첫번째 텍스트 파일로 부터 얻은 것)

			const table = document.getElementById('tourlist')
			const tr = document.createElement('tr')
			const td_title = document.createElement('td')
			const td_imgurl = document.createElement('td')
			const td_description = document.createElement('td')

			td_title.innerHTML = obj.ta_title
			td_imgurl.innerHTML = `<img src="${res[obj.id].ta_imgurl}" width=100 height=100> `
			td_description.innerHTML = obj.ta_description
			td_title.style.textAlign = "center"
			td_imgurl.style.textAlign = "center"
			td_imgurl.style.backgroundColor = "grey"
			td_description.style.textAlign = "center"

			tr.appendChild(td_title)	//<td>불국사</td>
			tr.appendChild(td_imgurl)	//<td><img src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"></td>
			tr.appendChild(td_description)	//<td>불국사는 한국인이 가장 좋아하는 명소이자...</td>
			table.appendChild(tr)
		}
	}

	xhr.open("GET", "./data_005-2.txt", true)
	xhr.send()
}


function loadTouristAttractions() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (this.readyState === this.DONE) {
			//console.log(this.response)
			const dataObj = JSON.parse(this.response)

			for (let i = 0; i < dataObj.length; i++) {
				loadTouristAttractions2(dataObj[i])
				//console.log(dataObj[i])
			}
		}
	}

	xhr.open("GET", "./data_005-1.txt", true)
	xhr.send();
}