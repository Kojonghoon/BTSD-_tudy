//JSON배열

//1. 자바스크립트 배열과 거의 동일
let dataObj = {
	"name": "홍길동",
	"age": 20,
	"hobby": [
		"음악감상",
		"영화보기",
		"산책",
		"우표수집",
		{
			"key1": "value1",
			"key2": "value2"
		}
	]
}


//2. 접근
let myObj = dataObj.hobby[2]
// alert(myObj)	//산책


//3. 반복
// let i = 0;
// let rst = "";
// for (i = 0; i < dataObj.hobby.length; i++) {
// 	rst += dataObj.hobby[i] + "<br>"
// }
// document.write(rst)


//4. 수정/삭제
dataObj.hobby[3] = "동전수집"
delete dataObj.hobby[3]

//5.반복 - for in
let i, rst = "";
for (i in dataObj.hobby) {
	rst += dataObj.hobby[i] + "<br>"
}
document.write(rst)