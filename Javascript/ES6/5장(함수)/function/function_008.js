'use strict'
//함수 - 함수 선언문과 함수 표현식의 차이를 보여주는 예제를 만들어보시오
//조건 분기에 따라 실행하는 함수를 만들려고 한다.

//1. 함수 선언문
// let height = prompt("당신의 키를 입력해주세요", 120)

//showMessage()	//Err

//키 조건에 따라 함수 실행
// if(height<120){
// 	// showMessage()
// 	function showMessage(){alert('키가 작아서 탈 수 없습니다.')}
// }else{
// 	function showMessage(){alert('탈 수 있습니다.')}
// 	// showMessage()
// }

// showMessage()


//2. 함수 표현식
let height = prompt("당신의 키를 입력해주세요", 120)

//키 조건에 따라 함수 실행
let showMessage

if (height < 120) {
	showMessage = function () { alert('키가 작아서 탈 수 없습니다.') }
} else {
	showMessage = function () { alert('탈 수 있습니다.') }
}

showMessage()

