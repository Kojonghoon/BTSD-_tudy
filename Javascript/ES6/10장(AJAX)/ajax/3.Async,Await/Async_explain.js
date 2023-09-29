//Async/Await란 무엇인가?

//1. Async/Await
//ES6 이상에서 비동기 통신 처리 작업을 보다 더 쉽게, 보다 더 편리하게 사용하기 위한 것.
//쉽게말해, 기존 promise를 좀 더 편리하게 쓰는 버전 또는 업데이트 된 버전


//2. 사용방법
//함수 앞에 async를 명시적으로 붙여주면 끝.


//3. async 기본적인 사용 예

// 3-1 async없이 Promise객체 반환
// function testFunc() {
// 	return Promise.resolve(100)
// }

// alert(testFunc())	//object Promise


// 3-2 async사용하여 Promise객체 반환
// async function testFunc2() {
// 	return 100
// }
// alert(testFunc2())	//object Promise


// 3-3 async사용하여 Promise객체 반환
//	--> 화살표 함수 사용
const testFunc3 = async () => {
	return 100
}
alert(testFunc3())	//object Promise


//4. await
//	-->사전적의미
//	-->기다리다
//Promise가 fulfilled 또는 rejected 될 때 까지 async함수의 실행
//	-->일시 정지하고 기다린다.
//Promise가 fulfilled되면 async함수를 다시 실행
//이때, await반환 값
//	-->Promise에서 fulfilled된 값.json()


//5. 결론
//async와 await키워드 들을 사용하면
//	-->기존의 Promise, then(), catch()등의 구문을 대체
//	-->비동기 처리 작업을 수행
//자꾸 더 쉽게, 더 편리하게 비동기 작업을 처리할 수 있도록 업데이트가 되어져간다. 라고 생각.