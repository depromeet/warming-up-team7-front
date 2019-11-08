function check() {
  var password = document.getElementById("password");
  var passwordCheck = document.getElementById("passwordCheck");
  var id = document.getElementById("id");
  var nickname = document.getElementById("nickname");
  var underline = document.getElementsByClassName("underline");
  //var pwError = document.getElementById("pwError").value;
  id.onkeyup = function () {
    id.style.borderColor = "#424242";

  }
  nickname.onkeyup = function () {
    nickname.style.borderColor = "#424242";

  }
  password.onkeyup = function () {
    password.style.borderColor = "#424242";

  }
  /*비밀번호 확인*/
  passwordCheck.onkeyup = function () {
    if (password.value != passwordCheck.value) {
      document.getElementById("pwError").style.display = "block";
      passwordCheck.style.borderColor = "#d77161";
      //document.getElementById("submit").attributes("disabled", "disabled");
    } else if (password.value == passwordCheck.value) {
      passwordCheck.style.borderColor = "#424242";
      document.getElementById("pwError").style.display = "none";
      //document.getElementById("submit").removeAttribute("disabled");
    }
  }
  /*딴 함수 만들기 */
  var k = 0;
  for (var i = 0; i < underline.length; i++) {

    if ((underline[i].value == null) || (underline[i].value == "")) {
      k++;
      if (k == 4) {
        document.getElementById("submit").style.backgroundColor = "#ca8d4b";
      } else document.getElementById("submit").style.backgroundColor = "#424242";

    }

  }
}

/*다 입력하면 가입하기 버튼 활성화*/
function changecolor() {
  var password = document.getElementById("password");
  var passwordCheck = document.getElementById("passwordCheck");
  var id = document.getElementById("id");
  var nickname = document.getElementById("nickname");
  if ((passwordCheck.value == null)) {
    document.getElementById("submit").style.backgroundColor = "#424242";
  } else
    document.getElementById("submit").style.backgroundColor = "#ca8d4b";


}


//국가 선택 페이지로 이동 
function join() {
  console.log("aaa");
  //회원가입 ajax통신
  var str_username, str_nickname, str_password, str_passwordCheck;
  var username = document.getElementById(id);
  var nickname = document.getElementById(nickname);
  var password = document.getElementById(password);
  var passwordCheck = document.getElementById(passwordCheck);

  if (username != null) {
    str_username = username.value;}


    if (nickname != null) {
      str_nickname = nickname.value;}

      if (password != null) {
        str_password = password.value;}

        if (passwordCheck != null) {
          str_passwordCheck = passwordCheck.value;}

          // var str_username = username;
          // var str_nickname = nickname;
          // var str_password = password;
          // var str_passwordCheck = passwordCheck;

          // //const axios = require('axios').default;
          //event.preventDefault();
          //const axios = require('axios');
          // const dt = JSON.stringify({
          //   "data":{"value":""}});
          //const request = axios.post(url,{dt});
          $(document).ready(function () {
            axios.post('http://54.180.125.135/api/register', {
              "username": str_username,
              "nickname": str_nickname,
              "password": str_password,
              "passwordCheck": str_passwordCheck

            })
              .then(function (response) {

                if ((passwordCheck.value == null)) {
                  alert("2");
                  document.getElementById("submit").style.backgroundColor = "#424242";
                  document.getElementById("submit").onclick = function () {
                    location.href = "nation.html";
                  }
                } else
                  document.getElementById("submit").style.backgroundColor = "#ca8d4b";

              })
              .catch(function (error) {
                console.log(error.response);
              });
          });
        }

        //국가 input클릭 시 리스트 보여주기  
        function nationClick() {
          document.getElementById("myDropdown").classList.toggle("show");
        }

        //국가 검색 기능 
        function nationSelect() {
          var input, filter, ul, li, a, i, select;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          div = document.getElementById("dropdownID");
          a = div.getElementsByTagName("a");

          // a[0].onclick = fuction(){
          //   input.value = a[0];
          // }
          $("a").click(() => {
            const nation = event.target.innerText;
            $("input").val(`${nation}`);
          });

          // for (i = 0; i < a.length; i++) {
          //   /*innerText는 포함된 보이는 텍스트 반환
          //   textContent는 전체 텍스트 반환*/
          //   document.getElementById("myDropdown").style.display="block";
          //   txtValue = a[i].textContent || a[i].innerText;


          //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
          //     a[i].style.display = "";
          //     select = txtValue;

          //     a[i].onclick=function(){
          //       console.log(event);
          //       console.log(event.target.innerText); 
          //       input.value= select;
          //       document.getElementById("myDropdown").style.display="none";
          //     }

          //   }
          //   else {
          //     a[i].style.display = "none";

          //     }
          //   }
          // input.onfocus = function(){
          //   document.getElementById("myDropdown").style.display="block";    
          // }

        }
        //국가 선택 완료 후 프로필 설정으로 이동 
        function next() {

          location.href = "profile.html";

        }
        //프로필 선택하는 부분 
        function profileSelect() {

          var select = document.getElementById("select");
          var image_1 = document.getElementById("1");
          var image_2 = document.getElementById("2");
          var image_3 = document.getElementById("3");
          var image_4 = document.getElementById("4");
          var image_5 = document.getElementById("5");
          var image_6 = document.getElementById("6");
          var image_8 = document.getElementById("8");
          var image_9 = document.getElementById("9");
          var image_12 = document.getElementById("12");
          image_1.onclick = function () {
            select.src = image_1.src;
          }
          image_2.onclick = function () {
            select.src = image_2.src;
          }
          image_3.onclick = function () {
            select.src = image_3.src;
          }
          image_4.onclick = function () {
            select.src = image_4.src;
          }
          image_5.onclick = function () {
            select.src = image_5.src;
          }
          image_6.onclick = function () {
            select.src = image_6.src;
          }
          image_8.onclick = function () {
            select.src = image_8.src;
          }
          image_9.onclick = function () {
            select.src = image_9.src;
          }
          image_12.onclick = function () {
            select.src = image_12.src;
          }
        }
        //채팅방 이름 입력하기 
        function chatName() {
          location.href = "chat_set.html";
        }
        //채팅방 생성하기 
        function chatCreate() {
          var chatName = document.getElementById("chatName");
          var Params = '?name=' + chatName;
          var url = 'http://54.180.125.135/api/rooms/' + Params;

          axios.post(url,
            {
              "name": chatName
            },
            {
              headers: {
                'content-type': "application/json;charset=UTF-8",
                "Authorization": 'Bearer ' +
                  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTU3MzM4OTUzMywiaWF0IjoxNTczMTAxNTMzfQ.TmfVvUD2arLjSIOH4L5vQPIY-d5I0vUDanX8BWttGQUq0UQYRE3mGB0L0AnxAo4-xDucH4abFCZBnCFg4k5Thg",

              }
            })
            .then(function (response) {
              //location.href="chat.html";
              console.log(response);
              alert("d");
              // var btn_create = document.getElementById("btn_create");
              // var link_copy = document.getElementById("link_copy");
              // var chatname = document.getElementById("chatName");
              // var link_notice = document.getElementById("link_notice");

              // link_notice.style.display="none"; 
              // //btn_create.attributes("disabled", "disabled");

              // chatname.onkeyup = function(){
              // btn_create.style.backgroundColor= "#ca8d4b";
              // link_copy.style.color= "#c47161";
              // link_copy.style.borderColor= "#c47161";



              // link_notice.style.display="block";
              // //btn_create.removeAttribute("disabled");
              //   }
            })
            .catch(function (error) {
              console.log(error.response);
            });

          // $.ajax({
          //   headers: {
          //   'content-type': "application/json;charset=UTF-8",
          //   "Authorization": 'Bearer '+
          //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTU3MzM4OTUzMywiaWF0IjoxNTczMTAxNTMzfQ.TmfVvUD2arLjSIOH4L5vQPIY-d5I0vUDanX8BWttGQUq0UQYRE3mGB0L0AnxAo4-xDucH4abFCZBnCFg4k5Thg",
          //   },

          //   url: url,
          //   type: 'POST',
          //   data: {
          //       name: chatName
          //   },
          //   success:function(data){
          //     //var jsonObj = JSON.parse(data);
          //     location.href="chat.html";
          //     console.log(data);
          //     alert("d");
          //   }, //success
          //   error:function(xhr,status){
          //     alert(xhr +":"+status);
          //   }
          // });



        }

        //채팅방 이름 입력하면 버튼 색깔 활성화로 바뀌는 부분
        function colorChange() {

          var btn_create = document.getElementById("btn_create");
          var link_copy = document.getElementById("link_copy");
          var chatname = document.getElementById("chatName");
          var link_notice = document.getElementById("link_notice");

          link_notice.style.display = "none";
          //btn_create.attributes("disabled", "disabled");

          chatname.onkeyup = function () {
            btn_create.style.backgroundColor = "#ca8d4b";
            link_copy.style.color = "#c47161";
            link_copy.style.borderColor = "#c47161";



            link_notice.style.display = "block";
            //btn_create.removeAttribute("disabled");
          }
        }

        function linkCopy() {
          //링크 복사하기
          //링크 복사성공하면 복사 완료 버튼으로 바뀜

          const copyLink = new ClipboardJS("#btn4");
          copyLink.on("success", function () {
            alert("성공");
          });
        }

        function LoginComplete() {
          var username = document.getElementById("id");
          var password = document.getElementById("password");

          axios.post('http://54.180.125.135/api/login', {
            "username": username,
            "password": password,
          })
            .then(function (response) {
              console.log(response);
              location.href = "loginComplete.html";
              alert("2");
            })
            .catch(function (error) {
              console.log(error.response);
            });
        }

