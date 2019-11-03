//국가 선택 페이지로 이동 
function join(){
 //가입하기 버튼 눌러서 비밀번호 일치하지 않으면 일치하지 않는다고 뜨고 
 //일치하면 국가선택으로 들어가기  
 location.href="nation.html";

}
//국가 선택 완료 후 프로필 설정으로 이동 
function next(){
 
 
 location.href="profile.html";

}
//채팅방 이름 입력하기 
function chatName(){
  location.href="chat_set.html";
}
//채팅방 입장하기 
function chatEnter(){
  location.href="chat.html";
}

//채팅방 이름 입력하면 버튼 색깔 활성화로 바뀌는 부분
function colorChange(){
 
  //const btn3 = document.getElementsByClassName("btn")[0].id;
  const btn3 = document.getElementsById("btn3");
  //const btn4 = document.getElementsByClassName(btn4);
  btn3.style.color="#dcab60";

}
function linkCopy(){
  //링크 복사하기
  //링크 복사성공하면 복사 완료 버튼으로 바뀜
  
  const copyLink=new ClipboardJS("#btn4");
  copyLink.on("success",function(){
    alert("성공");
  });
}
