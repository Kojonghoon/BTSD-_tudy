var pic = document.querySelector("#pic")
// var pic1 = document.getElementById("pic")
//id선택자인 pic에게 마우스가 올라가면 changePic()를 호출하고,
//false는 버블링은 서택하지 않겠다.
//버블링이란 이벤트가 하위 요소에서 발생하면 상위요소까지
//전파되는 형태를 버블링이라고 칭한다.

//아래와 같이 하나의 선택자에게 다중으로 이벤트를 등록을 할 수 있다.
pic.addEventListener("mouseover", changePic, false)
pic.addEventListener("mouseout", originPic, false)

function changePic() {
  pic.src = "../image/2.png"
  // pic1.src="/../image/2.png"
}

function originPic() {
  pic.src = "../image/1.png"
  // pic1.src="../image/1.png"
}

//getElementById() : id선택자가 있는 웹 요소에 접근할 때 사용하는 한가지의 방법
//DOM노드 중에서 요소 노드까지만 접근이 가능하다.
//querySelector() : 노드요소 뿐만 아니라 텍스트 노드와 속성 노드까지 접근이 가능하다.