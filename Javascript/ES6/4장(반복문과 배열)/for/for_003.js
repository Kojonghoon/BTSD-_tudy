//반복문 - do...while

//1. 기본적인 사용법
// do {
// 	i++
// } while (조건식)

//2. 설명
//do가 맨 앞에 있다는 것은 묻지도 따지지도 말고 먼저 "해라(do it)"라는 뜻이다.
//조건이고 뭐고 나중에 비교 하겠다.
//	--> 그러니 무조건 먼저 해라~
//조건은 최초 한번 반복을 하고나서 따진다.

//3. 실습
//	-->1~10까지 출력하시오
let i = 1;
do {
	document.write(i + "<br>")
	i++
} while (i <= 10)