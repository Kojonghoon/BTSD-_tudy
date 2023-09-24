//JSON 사용 시 가장 중요한 2개의 메서드
//JSON.parse(), JSON.stringify()

//1. JSON.parse( jsonText )
//	--> JSON형식틔 텍스트
//	--> 자바스크립트 객체로 변환

let jsonText = `{"firstName":"길동","lastName":"홍"}`
//alert(typeof jsonText)	//object
//alert(jsonText.lastName)	//홍

let jsonText2 = `{"firstName":"길동","lastName":"홍"}`
//alert(typeof jsonText2)	//앞 뒤로 ``처리 해주면  String
//alert(jsonText2.lastName)	//undefined

//alert("변환 전 : "+ typeof jsonText2)	//string
const dataObj = JSON.parse(jsonText2);
//alert(dataObj.lastName + " " + dataObj.firstName)	//홍 길동
//alert("변환 후 : "+typeof dataObj)	//object


//2. JSON.stringify( dataObject )
//	--> 자바스크립트 객체를
//	--> JSON형식의 텍스토로 변환
const aaa =JSON.stringify(dataObj)
alert(aaa)				//{"firstName":"길동","lastName":"홍"}
// alert( typeof aaa)	//string