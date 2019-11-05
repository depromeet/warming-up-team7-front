if ('WebSocket' in window) {  
    let oSocket = new WebSocket("wss://echo.websocket.org");

    oSocket.onmessage = function (e) { 
        console.log(e.data); 
    };

    oSocket.onopen = function (e) {
        console.log("open");
        oSocket.send("hi");
    };

    oSocket.onclose = function (e) {
        console.log("close");
    };
    oSocket.close();
}