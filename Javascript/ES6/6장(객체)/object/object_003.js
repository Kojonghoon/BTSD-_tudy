//객체(Object) - 객체에 속한 멤버 참조하기

//1. 객체 하나 생성
const car ={
	type:"길고양이",
	personality:"사나움",
	age:"2",
	female:"true",
}

//2. 참조 방법 
//	--> 점(.)연산자 vs []연산자
console.log(`cat 암컷이요? = ${car.female}`)		//true
console.log(`cat 암컷이요? = ${car['female']}`)		//true

//[]를 사용하여 값을 참조할 때는 문자열 형태로 []안에 속성명을 써준다.
//따옴표를 꼭 써줘야 하기 때문에 번거오룬 면이 있다. 그래서 점(.) 연산자를 많이 사용한다.
//만약 안써주면F
//	--> Err
console.log('age = '+car['age'])					//2
//console.log('age = '+car[age])					//Err

//3. key(멤버) 이름을 마음대로 지정할 수 있나요??
//	--> 가능은 하나 권장X
// const person ={
// 	"나의 이름은":"홍길동",
// 	"My age is" : "20"
//}
//console.log(person.나의 이름은)	//Err
// console.log(person["나의 이름은"])
// console.log(`멤버 이름을 한글로 지정 시 = ${person["나의 이름은"]}`)
// console.log(`멤버 이름을 영어로 지정 시 = ${person["My age is"]}`)
