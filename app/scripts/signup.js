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
  if ((passwordCheck.value == "")||(password.value == "")||(id.value == "")||
  (nickname.value == "")) {
    document.getElementById("submit").style.backgroundColor = "#424242";
  
    
  } else
  document.getElementById("submit").style.backgroundColor = "#ca8d4b";
    
  
}


//국가 선택 페이지로 이동 
function join() {
  
  //회원가입 ajax통신
  var str_username, str_nickname, str_password, str_passwordCheck;
  var username = document.getElementById("id");
  var nickname = document.getElementById("nickname");
  var password = document.getElementById("password");
  var passwordCheck = document.getElementById("passwordCheck");
  
  if (username != null && username !="") {
      str_username = username.value;
      
    }
  if (nickname != null && nickname !="") {
      str_nickname = nickname.value;
     
    }
  if (password != null && password !="") {
      str_password = password.value;
     
    }
  if (passwordCheck != null && passwordCheck !="") {
      str_passwordCheck = passwordCheck.value;
      
    }

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
               
                  document.getElementById("submit").style.backgroundColor = "#424242";
                  document.getElementById("submit").onclick = function () {
                    
                  }
                } else
                  document.getElementById("submit").style.backgroundColor = "#ca8d4b";
                  location.href = "nation.html";
                  
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
          var country = document.getElementById("myDropdown");
          var str_country = country.value;
         
          axios.post('http://54.180.125.135/api/register', {
            "country": str_country
          })
            .then(function (response) {
             location.href = "profile.html";
              
            })
            .catch(function (error) {
              console.log(error);
            });
          location.href = "profile.html";

        }
        // function profilename(){
        //   var select_profile = document.getElementById("select");
        //   var profile = select_profile.value;

        //   console.log(select_profile.value);
        //   axios.get('http://54.180.125.135/users'+ userid, {
        //     "profileImageNumber": profile
        //   })
        //     .then(function (response) {
        //       location.href = "chat_set.html";
        //       console.log(profile);
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     });
        // }
        //프로필 선택하는 부분 
        function profileSelect() {
          
          var select = document.getElementById("select");
          var image_1 = document.getElementById("one");
          var image_2 = document.getElementById("two");
          var image_3 = document.getElementById("three");
          var image_4 = document.getElementById("four");
          var image_5 = document.getElementById("five");
          var image_6 = document.getElementById("six");
          var image_8 = document.getElementById("eight");
          var image_9 = document.getElementById("nine");
          var image_12 = document.getElementById("tw");
          var profilenum=0;
           
          image_1.onclick = function () {
            select.src = image_1.src;
            select.value = image_1.value;
          }
          image_2.onclick = function () {
            select.src = image_2.src;
            profilenum = "2";
            chatName(profilenum);
          }
          image_3.onclick = function () {
            select.src = image_3.src;
            profilenum = "3";
            chatName(profilenum);
          }
          image_4.onclick = function () {
            select.src = image_4.src;
            profilenum = "4";
            chatName(profilenum);
          }
          image_5.onclick = function () {
            select.src = image_5.src;
            profilenum = "5";
            chatName(profilenum);
          }
          image_6.onclick = function () {
            select.src = image_6.src;
            profilenum = "6";
            chatName(profilenum);
          }
          image_8.onclick = function () {
            select.src = image_8.src;
            profilenum = "8";
            chatName(profilenum);
          }
          image_9.onclick = function () {
            select.src = image_9.src;
            profilenum = "9";
            chatName(profilenum);
          }
          image_12.onclick = function () {
            select.src = image_12.src;
            profilenum = "12";
            chatName(profilenum);
            
          }
        }
        //채팅방 이름 입력하기 
        function chatName(profile) {
          const a = profile;
          console.log(a);
        
          axios.post('http://54.180.125.135/api/register', {
            "ImagNumber": a
          })
            .then(function (response) {
              location.href = "chat_set.html";
              console.log(a);
            })
            .catch(function (error) {
              console.log(error);
            });
         

        }
          
        
        //채팅방 생성하기 
        function chatCreate() {
          var chatName = "1";
          var Params = '?name=' + chatName;
          //var url = 'http://54.180.125.135/api/rooms' + Params;
          var url = 'http://54.180.125.135/api/rooms' + Params;
          
          axios.post(url,
            {
              "name": chatName
            },
            {
              headers: {
                'content-type': "application/json;charset=UTF-8",
                "Authorization": "Bearer "+localStorage.getItem("token")

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
              console.log(error);
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
          var str_username, str_password;
          if (username != null && username !="") {
            str_username = username.value;}
          if (password != null && password !="") {
            str_password = password.value;}
        
          axios.post('http://54.180.125.135/api/login', {
            "username": str_username,
            "password": str_password,
          })
            .then(function (response) {
              console.log(response);
              var token = response.data.token;
              localStorage.setItem("token", token);
              if (response.type == true){
                localStorage.setItem("token", token);
            }
              location.href = "loginComplete.html";
              
            })
            .catch(function (error) {

              document.getElementById("topnavigation").style.display = "block";
              document.getElementById("id").onclick = function(){
              document.getElementById("topnavigation").style.display = "none";
                
              }
              console.log(error);
            });
        }

function chatEnter(){
  //var chatName = document.getElementById("chatName");
  var chatName = "1";
  var Params = '?name=' + chatName;
  var url = 'http://54.180.125.135/api/rooms/' + Params;

  axios.post(url,
    {
      "name": chatName
    },
    {
      headers: {
        //'content-type': "application/json;charset=UTF-8",
        "Authorization": "Bearer " + localStorage.getItem("token")
        
      }
    })
    .then(function (response) {
      location.href="chat.html";
      console.log(response);
      alert("d");
     
    })
    .catch(function (error) {
      console.log(error);
    });
}

