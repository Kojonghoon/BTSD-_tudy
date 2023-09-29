//Async/Await를 이용한 비동기 처리 작업 실습하기

//1. Promise객체의
//	-->then(), catch() 메서드 사용
// const loadButton = fileName => {
// 	fetch(fileName)
// 		.then(response => response.text())
// 		.then(t => console.log(t))
// 		.catch(err => console.log(err.message))	//Failed to fetch
// }


//2. Async/Await 사용
//	-->then(), catch() 메서드 사용 X.
const loadButton = async (fileName) => {
	try {
		const response = await fetch(fileName)
		const t = await response.text()
		console.log(t)
	} catch (e) {
		console.log(e.message)	//Failed to fetch
	}
	finally{
		console.log("Good ~ Morning")
	}
}


//fetch()함수가 결과를 리턴(Promise)할 떄 까지 기다렸다가(Await)
//	-->그 결과를 response변수에 할당
//그럼 다시 response.text()메서드가 결과를 리턴(Promise)할 떄 까지 기다렸다가(Await)
//	-->그 결과를 t변수에 할당.


//3. 정리
//Await 키워드를 사용하려면 
//	-->전제조건
//	-->함수 역시 async키워드가 앞에 있어줘야 한다.

//try ~ catch구문을 사용
//		-Promise상태가 fulfilled상태라면
//			-->try 블럭내 코드가 실행
//		-Promise상태가 rejected상태라면(네트워크 오류가 발행한다면)
//			-->catch블럭내 코드가 실행


//finally구문을 사용
//		-Promise상태가 resolve든 reject든 상관없이 무조건 마지막으로 실행