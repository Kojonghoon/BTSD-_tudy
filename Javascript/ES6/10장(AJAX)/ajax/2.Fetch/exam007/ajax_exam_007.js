//FetchAPI를 이용한 AJAX구현 - 실습2


//1. 실습
//function loadData() {

	//Fetch API
	//fetch("./data_007.json").then(function (response) {
		//response.json().then(function (jsonObj) {

			//출력
			//console.log(typeof jsonObj)	//object
			//console.log(JSON.stringify(jsonObj,null,4))
			//const jsonText = JSON.stringify(jsonObj,null,4)
			//console.log(jsonText)

		//})
	//})
//}


//2. 실습
function loadData() {

	//Fetch API
	fetch("./data_007.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (j) {
			//출력
			//console.log(typeof j)//object
			const jtext = JSON.stringify(j, null, 4)
			console.log(jtext)
		})
}











