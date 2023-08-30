//앞에서 다룬 키 조건에 따라 함수를 실행하는 것을 물음표 연산자를 사용해서 바꿔보시오.
//물음표 연산자(?)를 모른다면 앞서 강의를 다시 복습한다.

//1. 앞에서 다룬 예제
// let height = prompt("당신의 키를 입력해주세요", 120)

// //키 조건에 따라 함수 실행
// let showMessage

// if (height < 120) {
// 	showMessage = function () { alert('키가 작아서 탈 수 없습니다.') }
// } else {
// 	showMessage = function () { alert('탈 수 있습니다.') }
// }

// showMessage()


//2. 키 조건에 따라 함수 실행
let height = prompt("당신의 키를 입력해주세요", 120)

let showMessage = (height < 120) ?
	function () { alert('키가 작아서 탈 수 없습니다.') } :
	function () { alert('탈 수 있습니다.') }

showMessage()


//3. 함수 선언문 vs 함수 표현식
//	--> 어떤 것을 사용해아 하나.
//크게 상관없다
//초보자는 전통적인 함수 선언문 방식에 익숙해지는 것이 좋다.
//위와 같이 조건에 따른 특정 함수를 수행해야 한다면 함수 표현식을 사용한다.
//많은 JS라이브러리들에서 함수 표현식과 화살표 함수 등을 사용하기 때문에 차츰 공부해나가면서 익숙해지면 된다.