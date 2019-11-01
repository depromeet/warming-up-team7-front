// 햄버거 바 인터랙션
const handleHamburgerBar = () => {
    $(".hamburger-open-btn").click(() => {
        $(".hamburger-bar").show();
    })
    $(".close-bamburger").click(() => {
        $(".hamburger-bar").hide();
    })
}

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

$(document).ready(() => {
    handleHamburgerBar();
    handleBotMenu();
});