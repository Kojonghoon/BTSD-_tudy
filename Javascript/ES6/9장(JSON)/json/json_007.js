//JSON space옵션을 통한 가독성 높이기


//1. space옵션
//	--> 가독성 ↑
let someJsonData = {
	"num": 20,
	"firstNumber": 123455,
	"secondNumber": 349284,
	"socialNo": "ok",
	"pri_value": 4582145698,
	"bwg_count": 10
}

//2. 변환 --> space 옵션 없이
console.log(JSON.stringify(someJsonData))


//3. 변환 --> space옵션 사용
// console.log(JSON.stringify(someJsonData, null, 2))
console.log(JSON.stringify(someJsonData, null, '\t'))



































