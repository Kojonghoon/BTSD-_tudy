//★ : if 조건문 - 예상 은퇴 연령을 맞추는 프로그램 만들기

//1. 꼭 기억하자!
//else 절 
//	--> if()문의 괄호안이 참(true)일 때 수행되어지고
//	-->else절은 발대로(false)d일 때 수행
//else if --> 복수처리
// let age_of_retirement = prompt("대한민군 법적 은퇴 연력은 몇 살인가요?", "60")
// if (age_of_retirement == 55) {
// 	alert("오~ 맞습니다.")
// } else {
// 	alert("오~ 틀렸습니다.")
// }

//2. else if --> 복수처리 
//(만들어보기)예상 은퇴 연령을 맞추는 프로그램 만들기
let answer = 70
let expected_age_of_retirement = prompt("당신의 예상 은퇴 연령은 몇 살로 예상 하시나요?", "")

if (expected_age_of_retirement < answer) {
	alert("과소평가하시네요 올려보세요~")
} else if (expected_age_of_retirement > answer) {
	alert("오.. 자신을 과대평가하시요 내려주세요~")
} else {
	alert("정확히 맞추셨습니다.")
}

