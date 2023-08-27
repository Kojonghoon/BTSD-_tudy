//반복문 - for

//1. for
//	-->가장 대표적인(많이 사용하는) 반복문
//	--> 연속된 동일한 반복 작업을 처리
//보통 명확하게 반복의 횟수가 지정되어 있다면 for반복문을 사용, 아니라면 while, do..while 반복을 사용
//1~10까지 출력하시오

// document.write(1)
// document.write(2)
// document.write(3)
// document.write(4)
// document.write(5)
// document.write(6)
// document.write(7)
// document.write(8)
// document.write(9)
// document.write(10)

//2. 기본적인 사용법
// for (let i = 1; i < 10; i++) {
// 	//반복 처리할 코드
// 	document.write(i)
// }

//3. 각각의 용도
//let i =0			
//	-->반복시 초기 값 
//	-->반복을 시작하면 최초 한번만 실행 
//	-->예제에서는 0부터 시작
//i<10
//	-->조건식
//	-->참(true)이면 계속 수행하고, 거짓(false) Stop
//i++
//	-->증감식
//	-->반복 처리할 코드가 먼저 실행된 후 -->i++ 되서 1증가

//4. 실습 
//	--> 1~10까지 출력
//	--> 다양한 방식으로 출력이 가능
//	--> i, j
for (let i = 1; i < 11; i++) {
	document.write(i)
	document.write("<br>")
}

document.write("----------------------<br>")

for (let i = 1; i <= 10; i++) {
	document.write(i)
	document.write("<br>")
}

document.write("----------------------<br>")

for (let i = 0; i < 10; i++) {
	document.write(i+1)
}