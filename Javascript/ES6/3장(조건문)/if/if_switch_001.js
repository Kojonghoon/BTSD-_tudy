//switch 조건문

//1. 특징
//if...else조건문
//	--> 조건문이 불리언 값으로 평가
//	--> true, false
//switch조건문
//	-->평가
//	-->어떤 숫자 값 또는 문자(열) 값
//여러가지 평가에 따른 분기 처리를 하고자 할 때
//	--> switch조건문을 사용
//	-->사용자 메뉴 처리 등


//2. 사용법
// const number = 2
// const number = prompt('숫자 1,2,3중에서 하나를 입력하세요', '예)1')

// switch (number) {
// 	//분기 처리 할 일 --> return
// 	case '1':
// 		alert(1)
// 		break	// break를 만나면 이하는 더 이상 비교 하지 않고 switch문 종료
// 	case '2':
// 		alert(2)
// 		break
// 	case '3':
// 		alert(3)
// 		break
// 	default:
// 		alert("범위를 벗어 났습니다.")	//이도저도 아니면 기본 값으로 지정, 생략도 가능
// 		break
// }


//3. 사용법2
function testSwitch(v) {
	//출력변수
	let result = ""

	//switch 조건문
	switch (v) {
		case "korea":
			result = "한국"
			break
		case "usa":
			result = "미국"
			break
		case "china":
			result = "중국"
			break
		default:
			result = "영어로 'korea', 'usa', 'china'중 한 나라명을 입력해주세요"
			break
	}
	return result
}

alert(testSwitch('usa'))	//미국
alert(testSwitch('미국'))	//영어로 'korea', 'usa', 'china'중 한 나라명을 입력해주세요