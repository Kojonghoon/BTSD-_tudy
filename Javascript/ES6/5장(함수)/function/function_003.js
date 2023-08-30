//함수 - 기초 연습문제

//1. 로그인한 각 유저에게 "홍길동 회원님 등교하셨습니다." 라고 출력하는 함수를 만들어보시오
// function showMessage(name) {
// 	const msg = `${name} 회원님 등교하셨습니다.`
// 	alert(msg)
// }
// showMessage("홍길동")
// showMessage("강감찬")
// showMessage("을지문덕")

//2. showMessage();
//	--> 이렇게 함수가 호출되면 어떻게 되나요??
// showMessage()
//undefined
//	--> 뭔가 해결책이 필요함

// function showMessage(name) {
// 	let msg = `${name} 회원님 등교하셨습니다.`

// 	if(name){
// 		alert(msg)
// 	}else{
// 		alert('회원의 이름 정보가 없습니다.')
// 	}
// }
// showMessage('홍길동')
// showMessage()

//3. else절을 굳이 꼭 작성해야 하나요?
// function showMessage(name) {
// 	let msg = ` 회원님 등교하셨습니다.`

// 	if (name) {
// 		msg = `${name}` + msg
// 	}
// 	alert(msg)
// }
// showMessage('홍길동')
// showMessage()

//4. +=사용하여 한다면??
function showMessage(name) {
	let msg = `열공하세요~`

	if (name) {
		msg += `${name} 회원님~ ^^`
	}
	alert(msg)
}
showMessage('홍길동')
showMessage()