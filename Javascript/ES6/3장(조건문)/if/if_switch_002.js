//조건 처리가 많은 if문
//	--> switch문이 더 깔끔할 수 있다.

//1. 실습
// function manyCondition() {
// 	const age = prompt("연령대를 입력하세요", "")	//연령대로만 입력받는다	--> 10, 20, 30, 40

// 	if (!age) {
// 		return "정확한 연령대를 숫자로 입력해주세요"
// 	} else {
// 		let result = ""
// 		if (age === "10") {
// 			result = "10대를 위한 미팅은 A 코너"
// 		} else if (age === "20") {
// 			result = "20대를 위한 미팅은 B 코너"
// 		} else if (age === "30") {
// 			result = "30대를 위한 미팅은 C 코너"
// 		} else {
// 			result = "기타 위한 미팅은 D 코너"
// 		}
// 		return result
// 	}
// }
// alert(manyCondition())


//2. 실슴 -->switch문
function manyCondition2() {
	const age = prompt("연령대를 입력하세요", "")	//연령대로만 입력받는다	--> 10, 20, 30, 40

	if (!age) {
		return "정확한 연령대를 숫자로 입력해주세요"
	} else {
		let result = ""
		switch (age) {
			//할 일 처리 --> return
			case '10':
				result = "10대를 위한 미팅은 A 코너"
				break
			case '20':
				result = "20대를 위한 미팅은 B 코너"
				break
			case '30':
				result = "30대를 위한 미팅은 C 코너"
				break
			default:
				result = "기타 연령대를 위한 미팅은 D 코너"
				break
		}
		return result
	}
}

alert(manyCondition2())