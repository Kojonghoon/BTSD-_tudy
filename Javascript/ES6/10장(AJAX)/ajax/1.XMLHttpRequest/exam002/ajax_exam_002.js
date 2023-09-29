//서버의 응답 상태를 알려주는 속성들


//!. 서버로부터의 응답을 체크하기 위해 사용되는 XMLHttpRequest객체의 속성들.
//1. onreadystatechange
//2. readyState
//3. status


//1. 서버 요청
//	-->XMLHttpRequest
//Ajax에서 가장 중요한 객체
//	-->구 브라우저를 제외한 최신의 웹브라우저는 거의 다 XMLHttpRequest 객체를 지원
//예전
//	-->IE 구버전 vs 신브라우저 구분을 해주는 로직 처리
//	-->지금은 거의 그럴 필요 X.
//XMLHttpRequest
//	-->페이지 뒷단에서 보이지 않게 서버와 비동기로 통신을 하면서 페이지 이동 또는 리로드 없이 웹페이지 일부분을 업데이트



//2.
//onreadystatechange
//	-->readyState 속성 값이 변할 때 마다 호출할 콜백 함수를 정의
//즉, 브라우저는 다른 작업을 하다가도 서버로부터 어떤 응답이 왔을 떄
//	-->처리해야 할 일들
//	-->xhr 객체의 콜백함수로 지정.

//readyState
//	-->XMLHttpRequest상태를 보여줌
//	0: 초기화도 안된 상태 (open메서드가 호출도 되기전의 상태)
//	1: 서버 연결 설정(send메서드 호출 전)
//	2: 서버 수신 상태
//	3: 서버 처리 상태
//	4: 서버 요청 완료
//		-->준비 완료 상태(가장 중요)

//status
//	-->서버 요청에 대한 상태를 번호로 교환
//	-->서버 요청에 대한 처리 결과 코드
//	200:"Ok" --> 성공
//	403:"Forbidden" --> 접근 거부
//	404:"Page not found" --> 페이지를 찾을 수 없음


//3. 서버 응답의 결과
//기본적으로 텍스트(문자열).. 즉, txt이거나 xml.
//이러한 것을 서버로부터 받아서 사용하기 위해서는
//	-->responseText, responseXML 등을 사용
//responseText
//	-->응답의 결과 데이터를
//	-->텍스트(문자열)로 얻음
//responseXML
//	-->응답의 결과 데이터를
//	-->XML데이터로 얻음


//4. 결론
//텍스트로 결과 데이터를 받아오는 경우 그대로 사용
//그러나 XML은 다소 복잡한 구문으로 되어 있기 때문에 내가 필요한 부분의 정보를 별도로 분류해서 사용해야 하곤 함.


//실습
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
	console.log(this.readyState, this.status)

	if (this.readyState == 4) {
		console.log("성공")
		console.log("this.response : " + this.response)
		//console.log("xhr.response : " + xhr.response)
	}

}

xhr.open("GET", "./data_002.txt");	
//xhr.open("GET", "./data_002.txt",false);	
//false = 동기방식, default = true = 비동기 방식
xhr.send();

alert("성공했습니다.")













