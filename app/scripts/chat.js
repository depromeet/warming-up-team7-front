// 햄버거 바 인터랙션
const handleHamburgerBar = () => {
    $(".hamburger-open-btn").click(() => {
        $(".hamburger-bar").show();
    })
    $(".close-bamburger").click(() => {
        $(".hamburger-bar").hide();
    })
}

// 봇 메뉴 인터랙션
const handleBotMenu = () => {
    $(".bot-menus").hide();
    $(".close-bot").hide();
    $(".call-bot").click(() => {
        $(".bot-menus").show();
        $(".call-bot").hide();
        $(".close-bot").show();
    })
    $(".close-bot").click(() => {
        $(".bot-menus").hide();
        $(".call-bot").show();
        $(".close-bot").hide();
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

// DOM 렌더링 완료된 후 실행
$(() => {
    handleHamburgerBar();
    handleBotMenu();
    handleInputChatting();
});
