// 햄버거 바 인터랙션
const handleHamburgerBar = () => {
  $(".hamburger-open-btn").click(() => {
    $(".hamburger-bar").show();
  })
  $(".close-bamburger").click(() => {
    $(".hamburger-bar").hide();
  })
}

// 봇 호출하여 뉴스 표시
const displayNewsByBot = (selectedId) => {
  const url = `http://54.180.125.135/api/test/news?country=kr&category=${selectedId}`;
  const getNews = axios.get(url);
  getNews.then(res => {
    const title = res.data.title;
    const publishedAt = res.data.publishedAt;
    const content = res.data.content;
    const imageUrl = res.data.imageUrl;
    const url = res.data.url;
    const mineBotForm = `<div class="mine-speech-balloon">
                          <div class="picture-and-headline">
                            <div class="picture"></div>
                            <div class="headline-and-date">
                              <a href=${url} target="_blank" class="headline">${title}</a>
                              <div class="name-of-company-and-date">${publishedAt}</div>
                            </div>
                          </div>
                          <div class="contents">${content}</div>
                        </div>`;
    $(".row").append(mineBotForm);
    $(".picture").last().css("background-image", `url(${imageUrl})`);
    // 스크롤 맨 아래로 이동
    $(".row").scrollTop($(".row")[0].scrollHeight);
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
    displayNewsByBot(selectedId);
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

// 채팅 입력
const addChatting = () => {
  const chatContents = $(".row");
  $(".send").click(() => {
    const inputText = $(".text-input").val();
    const chatForm = `<div class="mine-chat-row">
                        <div class="time-and-balloon">
                          <div class="time">23:02</div>
                          <div class="mine-speech-balloon">
                            <div class="text">${inputText}</div>
                          </div>
                        </div>
                      </div>`;
    // 최하단에 위치한 채팅이 내 채팅일 때 && 채팅내용이 있을 때
    if ($(".row").children().last()[0].className !== "mine-chat" && inputText.length) {
      chatContents.append(`<div class="mine-chat">
                            ${chatForm}
                          </div>`);
    }
    else if (inputText.length) {
      $(".row").children().last().append(chatForm);
    }
    // 입력창 초기화
    $(".text-input").val("");
    $(".send").css("background-color", "#c8c8c8");
    // 스크롤 맨 아래로 이동
    $(".row").scrollTop($(".row")[0].scrollHeight);
  })
}

// DOM 렌더링 완료된 후 실행
$(() => {
    handleHamburgerBar();
    handleBotMenu();
    handleInputChatting();
    addChatting();
});
