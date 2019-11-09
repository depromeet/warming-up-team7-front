// 웹소켓
const webSocket = () => {
  if ('WebSocket' in window) {  
    const roomId = 3; // 임시 방 번호
    const authToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTU3MzQ4NTA2OCwiaWF0IjoxNTczMTk3MDY4fQ.SP87OkjUO-D5CeCQ1D0I6il1VhENRj4Oy9zYlF6epVcp6WGoQTc9ZR-Qm7y3BH22kPmHZx5iaRLwItbZPI-ePQ";
    // document.cookie = 'Authorization=' + authToken + '; path=/';
    // let oSocket = new WebSocket(`ws://localhost:8080/chat/room/${roomId}`);

    let socket = io(`http://localhost:8080/chat/room/${roomId}`, {
      transports: ['websocket'], 
      extraHeaders: {
        Authorization: authToken
      }
    });

    socket.emit('TALK', "hi");
    socket.on('TALK', socket => {
      console.log(socket);
    })
    socket.on('connect', socket => {
      console.log(socket);
    })


    // // 메세지가 도착했을 때
    // oSocket.onmessage = (e) => {
    //   console.log("e.data: ", e.data);
    //   console.log("메세지 타입: ", e.data.messageType);
    //   const isTalk = (eventType) => {
    //     return eventType === "TALK";
    //   }
    //   switch (e.data.messageType) {
    //     case "TEXT":
    //       // 채팅일 경우
    //       if (isTalk(eventType)) {
  
    //       }
    //       // 입장일 경우, eventType: ENTER
    //       else {
    //         const name = e.data.sender.name;
    //         const date = new Date();
    //         const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    //         const day = week[date.getDay()];
    //         const arrayDate = `${date}`.split(" ");
    //         const years = arrayDate[3];
    //         const month = arrayDate[1];
    //         const days = arrayDate[2];
    //         const enterUserForm = `<div class="background-entrance-phrase">
    //                                 <div class="row-text">
    //                                   <div class="first-row-text">
    //                                     <div class="person">${name}</div>
    //                                     <div class="entry-phrase">님이 입장하셨습니다</div>
    //                                   </div>
    //                                   <div class="second-row-text">${years}.${month}.${days} ${day}</div>
    //                                 </div>
    //                               </div>`;
    //         $(".row").append(enterUserForm);
    //       }
    //     case "IMAGE":
          
    //     case "NEWS":
          
    //     default:
    //   }
    // };
  
    // // 연결이 되었을 때
    // oSocket.onopen = (e) => {
    //   console.log("웹소켓이 연결되었습니다.");
      
    //   // 메세지 서버로 보내기
    //   $(".send").click(() => {
    //     const inputText = $(".text-input").val().replace("\n", "<br/>");
    //     oSocket.send(`${inputText}`);
    //   });
    // };
  
    // // 연결을 종료했을 때
    // oSocket.onclose = (e) => {
    //   console.log("웹소켓이 연결 해제되었습니다.");
    // };
    // oSocket.close();
  }
}

// 햄버거 바 인터랙션
const handleHamburgerBar = () => {
  $(".hamburger-open-btn").click(() => {
    $(".hamburger-bar").show();
  })
  $(".close-bamburger").click(() => {
    $(".hamburger-bar").hide();
  })
}

// 일단 서울 날씨만 가져옴
const displayWeatherByBot = () => {
  const url = `http://54.180.125.135/api/test/weather?city=seoul`;
  const getWeather = axios.get(url);
  getWeather.then(res => {
    const cityName = res.data.name;
    const description = res.data.description;
    const iconUrl = res.data.iconUrl;
    const time = Date().split(" ")[4].slice(0, 5); // ex) 12:24
    // 마지막으로 친 채팅의 시간과 그 전 채팅의 시간을 비교해서 같으면 위의 시간 삭제
    // 12:00 (첫 번째 말풍선)
    // 12:00 (두 번째 말풍선) 일 경우 첫 번째 말풍선의 시간 삭제
    if ($(".time").last()[0].innerText === time) {
      $(".time")[$(".time").length - 1].innerText = "";
    }
    const weatherForm = `<div class="mine-chat-row">
                          <div class="time-and-balloon">
                            <div class="time">${time}</div>
                            <div class="mine-speech-balloon balloon2">
                              <div class="weather-icon"></div>
                              <div class="weather-contents">
                                <div class="first-column">
                                  <div class="country">${cityName}</div>
                                  <div class="of">의</div>
                                </div>
                                <div class="of">현재 날씨는</div>
                                <div class="weather-info">${description}입니다</div>
                              </div>
                            </div>
                          </div>
                        </div>`
    if ($(".row").children().last()[0].className !== "mine-chat") {
      $(".row").append(`<div class="mine-chat">${weatherForm}</div>`);
    }
    else {
      $(".row").children().last().append(weatherForm);
    }
    $(".weather-icon").last().css("background-image", `url(${iconUrl})`);
    // 스크롤 맨 아래로 이동
    $(".row").scrollTop($(".row")[0].scrollHeight);
    fluidChatBalloon();
  }).catch(err => {
    console.log("Error: ", err)
  })
}

// 봇 호출하여 뉴스 표시
const displayNewsByBot = (selectedId) => {
  const url = `http://54.180.125.135/api/test/news?country=kr&category=${selectedId}`;
  const getNews = axios.get(url);
  getNews.then(res => {
    const title = res.data.title;
    const publishedAt = res.data.publishedAt.slice(0, 10).replace(/-/gi, '.'); // 2010.10.10
    const content = res.data.content;
    const imageUrl = res.data.imageUrl;
    const url = res.data.url;
    const time = Date().split(" ")[4].slice(0, 5); // ex) 12:24
    // 마지막으로 친 채팅의 시간과 그 전 채팅의 시간을 비교해서 같으면 위의 시간 삭제
    // 12:00
    // 12:00 일 경우 위 채팅의 시간 삭제
    if ($(".time").last()[0].innerText === time) {
      $(".time")[$(".time").length - 1].innerText = "";
    }
    const mineBotForm = `<div class="balloon-and-time">
                          <div class="time">${time}</div>
                          <div class="mine-speech-balloon balloon">
                            <div class="picture-and-headline">
                              <div class="picture"></div>
                              <div class="headline-and-date">
                                <a href=${url} target="_blank" class="headline">${title}</a>
                                <div class="name-of-company-and-date">${publishedAt}</div>
                              </div>
                            </div>
                            <div class="contents">${content}</div>
                          </div>
                        </div>`;
    if ($(".row").children().last()[0].className !== "mine-chat") {
      $(".row").append(`<div class="mine-chat">${mineBotForm}</div>`);
    }
    else {
      $(".row").children().last().append(mineBotForm);
    }
    // $(".row").append(mineBotForm);
    $(".picture").last().css("background-image", `url(${imageUrl})`);
    // 스크롤 맨 아래로 이동
    $(".row").scrollTop($(".row")[0].scrollHeight);
    fluidChatBalloon();
  })
  .catch(err => console.log(err));
}

// 봇 메뉴 인터랙션
const handleBotMenu = () => {
  const showBotMenu = () => {
    $(".bot-menus").show();
    $(".call-bot").hide();
    $(".close-bot").show();
  }
  const hideBotMenu = () => {
    $(".bot-menus").hide();
    $(".call-bot").show();
    $(".close-bot").hide();
  }

  $(".bot-menus").hide();
  $(".close-bot").hide();

  $(".call-bot").click(() => {
    showBotMenu();
  })

  $(".close-bot").click(() => {
    hideBotMenu();
  })

  $(".bot-menu").click(() => {
    const selectedId = event.currentTarget.id;
    $(`#${selectedId}`).css({
      "color": "#d86b1f",
      "border": "solid 1px #d86b1f"
    })
    // 토픽 선택 0.5초 후 색 초기화 및 봇 메뉴 사라짐
    setTimeout(() => {
      hideBotMenu();
      $(`#${selectedId}`).css({
        "color": "#666666",
        "border": "solid 1px white"
      })
    }, 500);
    if (selectedId !== "weather") {
      displayNewsByBot(selectedId);
    }
    else {
      displayWeatherByBot();
    }
  })
}

// 채팅 입력 인터랙션
const handleInputChatting = () => {
  $(".text-input").keyup(() => {
    const isEmptyInput = !$(".text-input").val().length;
    if (isEmptyInput) {
      $(".send").css("background-color", "#c8c8c8");
    }
    else {
      $(".send").css("background-color", "#d86b1f");
    }
  })
}

const fluidChatBalloon = () => {
  $(".mine-speech-balloon").css({
    "border-bottom-right-radius": "3px", 
    "border-top-right-radius": "3px"
  })
  $(".mine-speech-balloon").first().css({
    "border-top-right-radius": "20px",
    "border-bottom-right-radius": "3px"
  });
  $(".mine-speech-balloon").last().css({
    "border-top-right-radius": "3px",
    "border-bottom-right-radius": "20px"
  });
}

// 채팅 입력
const addChatting = () => {
  const chatContents = $(".row");
  $(".send").click(() => {
    const time = Date().split(" ")[4].slice(0, 5); // ex) 12:24
    // 마지막으로 친 채팅의 시간과 그 전 채팅의 시간을 비교해서 같으면 위의 시간 삭제
    // 12:00 (첫 번째 말풍선)
    // 12:00 (두 번째 말풍선) 일 경우 첫 번째 말풍선의 시간 삭제
    if ($(".time").last()[0].innerText === time) {
      $(".time")[$(".time").length - 1].innerText = "";
    }
    const inputText = $(".text-input").val().replace(/\n/gi, "<br/>");
    const chatForm = `<div class="mine-chat-row">
                        <div class="time-and-balloon">
                          <div class="time">${time}</div>
                          <div id="top-right" class="mine-speech-balloon balloon">
                            <div class="text">${inputText}</div>
                          </div>
                        </div>
                      </div>`;
    // 최하단에 위치한 채팅이 내 채팅이 아닐 때 && 채팅내용이 있을 때
    if ($(".row").children().last()[0].className !== "mine-chat" && inputText.length) {
      chatContents.append(`<div class="mine-chat">${chatForm}</div>`);
    }
    else if (inputText.length) {
      $(".row").children().last().append(chatForm);
      fluidChatBalloon();
    }
    // 입력창 초기화
    $(".text-input").val("");
    $(".send").css("background-color", "#c8c8c8");
    // 스크롤 맨 아래로 이동
    $(".row").scrollTop($(".row")[0].scrollHeight);
    // <br/> 갯수에 따라 말풍선 크기 변경
    const textHeight = $(".text").last().children().length * 20 + 5; // </br> </br> => 2 * 20 + 5
    $(".mine-speech-balloon").last().css("height", `${textHeight}`);
  })
}

// 채팅방 나가기 버튼 누르면 최초 화면으로 이동
const movePage = () => {
  $(".quit").click(() => {
    location.href = "index.html";
  })
}

// 공유 버튼 누르면 복사되는 기능
const copyUrl = () => {
  $(".share").click(() => {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val(location.href).select();
    document.execCommand("copy");
    $temp.remove();
    alert("주소가 복사되었습니다.");
  })
}

// DOM 렌더링 완료된 후 실행
$(() => {
  handleHamburgerBar();
  handleBotMenu();
  handleInputChatting();
  addChatting();
  webSocket();
  movePage();
  copyUrl();
});