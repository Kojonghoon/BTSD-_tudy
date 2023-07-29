//전역변수로 선언
var $fire = null;
$(document).ready(function () {
  initialize();
  event_fire();
});

//전역변수를 초기화
function initialize() {
  //지구본 찾기
  $fire = $("#fire")
}
//이벤트와 관련된 내용을 함수로 등록
function event_fire() {
  //버튼에 이벤트 등록
  $("#btnStart").click(function () {
    //지구본 움직이기
    //지구본 위치 값을 구하기
    var x = parseInt($("#txtX").val());
    var y = parseInt($("#txtY").val());
    moveFire(x, y);
  });
}
//지구본의 움직이는 기능을 구현해놓은 함수
function moveFire(x, y) {
  if ((x >= 0 && x <= 500) && (y >= 0 && y <= 300)) {
    $fire.css({
      left: x,
      top: y
    })
  }
  else {
    alert("입력된 값이 범위를 벗어났습니다. ")
  }
}