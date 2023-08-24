//★ : if 조건문 - 삼항 연산자

//1. 꼭 기억하자
//삼항연산자
//	--> 피연산자 세 개이기 때문에 삼항 연산자.
//다른말로는
//	--> 조건부 연산자

//2. 사용법
//	--> 놀이 공원의 청룡열차를 타기 위한 최소한의 키 허용여부를 체크하는 프로그램을 만드시오
//만드는 방법은 크게 전톡적인 if문을 사용하는 방식과 삼항 연산자를 사용하는 방식
// let okAllowed
let yourHeight = prompt("사용자의 키를 입력해주세요", "0")

// if (yourHeight >= 120) {
// 	okAllowed = true
// 	alert(okAllowed + " 청룡 열차 탑승이 가능합니다.")
// } else {
// 	okAllowed = false
// 	alert(okAllowed + " 청룡 열차 탑승이 불가능 합니다.")
// }


//3. 삼항 연산자
let a = "청룡열차 탑승 가능"
let b = "청룡열차 탑승 불가"

// let last_result = (yourHeight >= 120) ? a : b
// alert(last_result)

alert((yourHeight >= 120) ? a : b)