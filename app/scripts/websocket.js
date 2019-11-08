// if ('WebSocket' in window) {  
//   const userId = 0;
//   let oSocket = new WebSocket(`ws://localhost:8080/chat/room/${userId}`);

//   // 메세지가 도착했을 때
//   oSocket.onmessage = (e) => { 
//     console.log("e.data: ", e.data);
//     console.log("메세지 타입: ", e.data.messageType);
//     const isTalk = (eventType) => {
//       return eventType === "TALK";
//     }
//     switch (e.data.messageType) {
//       case "TEXT":
//         // 채팅일 경우
//         if (isTalk(eventType)) {

//         }
//         // 입장일 경우, eventType: ENTER
//         else {

//         }
//       case "IMAGE":
        
//       case "NEWS":
        
//       default:

//     }
//   };

//   oSocket.onopen = (e) => {
//     console.log("웹소켓이 연결되었습니다.");
//     oSocket.send("hi");
//   };

//   oSocket.onclose = (e) => {
//     console.log("close");
//   };
//   oSocket.close();
// }
