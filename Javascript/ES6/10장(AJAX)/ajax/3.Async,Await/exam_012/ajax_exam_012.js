//Async/Await를 이용한 비동기 처리 작업 실습하기

//1. Promise.all()
const loadButton = async (filName1, filName2) => {

	//Array, Await, Promise.all()
	//	-->사용
	try {

		const [res1, res2] = await Promise.all([fetch(filName1), fetch(filName2)])
		const [t1, t2] = await Promise.all([res1.text(), res2.text()])
		console.log(t1, t2)
		document.querySelector('h2').innerText = t1
		document.querySelector('.dyContents').innerHTML = t2

	} catch (e) {
		console.log(e.message)
	}
	finally {
		console.log("Good ~ Boy")
	}
}