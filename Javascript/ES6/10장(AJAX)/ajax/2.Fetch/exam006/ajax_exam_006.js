//FetchAPI를 이용한 AJAX구현 - 실습

//1. Fetch란 무엇인가?
//사전적의미: 가지고 오다, 불러오다
//Fetch API는 ES6의 비동기 통신 처리 방법
//즉, 자바스크립트에서 AJAX와 같은 비동기 통신 처리를 보다 손쉽게, 편리하게 할 수 있도록 만들어진 API
//AJAX 비동기 처리 작업을 보다 편리하게 할 수 있도록 도움을 주는 라이브러리들은 많다.
//		-XMLHttpRequest
//		-Jquery, FetchAPI, Axios 라이브러리


//2. 지원
//구식 브라우저는 지원하지 않음
//	-->폴리필을 임포트하여 사용하면 가능
//	-->그러나 성능을 고려함다면 없이 사용하는 것이 가장 좋다
//최신 브라우저 위주로 지원
//	-->사실살 대부분의 모던 브라우저가 지원


//3. 사용
//fetch(url, [options])

//url은 요철할 파일 등의 경로를 적어주면 된다.
//옵션은 선택
//	-->아무것도 안쓰면 기본적으로 GET방식으로 전송 요청을 진행
//	-->url로 부터 다운이 진행.
//반환은 promise객체가 반환.


//4. 주요 메서드 2개
//응답을 텍스트형태로 받고자 한다면
//	-->response.text()
//응답을 JSON형태로 받고자 한다면
//	-->response.json()


//5. 환경설정
//서버 환경이 절대적으로 필요하다.
//APM패키지와 같은 솔루션을 통해서 한방에 서버 환경을 구축하는 것도 좋다. 쉬우니까.


//6. 실습
function loadData() {
	//Fetch API
	fetch("./data_006.txt").then(function (response) {
		//alert(response.status)	//200
		response.text().then(function (text) {
			alert(text)
		})
	})

	//promise
	//	-->fetch함수로 해당 URL로 요청을 했을 때
	//	-->그것에 대한 응답 상태로 어떤 결과를 반환해주는 약속된 객체.
	//peding
	//	-->(어떤 일이)있을 떄 까지, ...를 기다리는 동안, ...중(during)
	//fulfilled
	//	-->성취감을 느끼는, 가득 채워진
	//	-->fulfill : 실현하다, 성취하다.
	//rejected
	//	-->거부하다
	//	-->실패
	const promise = fetch("./data_006.txt")
	console.log(promise)
}


