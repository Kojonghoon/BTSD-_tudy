//JSON 자바스크립트 문법 사용

//1. 데이터 정의
let people = [
	{ "firstName": "길동", "lastName": "홍" },
	{ "firstName": "순신", "lastName": "이" },
	{ "firstName": "감찬", "lastName": "강" }
]

//2. 수정
people[0].lastName = "을지"
people[0].firstname = "문덕"

//3. 출력 --> 홍 길동 --> 을지문덕
alert(people[0].lastName + " " + people[0].firstname)