
  function testWebSocket(message) {
    const wsUri = "ws://echo.websocket.org";
    const output = document.getElementById("output");
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt,message) }; ///when the connection is established
    websocket.onclose = function(evt) { onClose(evt) }; ///when the connection is close
    websocket.onmessage = function(evt) { onMessage(evt) }; ///when the user send a message
    websocket.onerror = function(evt) { onError(evt) }; ///when an error happens
  }

  function onOpen(evt,message) {
    writeToScreen("CONNECTED"); ///write conecting message in the chatbox
    doSend(message); ///send the message
  }

  function onClose(evt) {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt) {
    writeToScreen("Response: "+ evt.data, "response");
    websocket.close(); ///close the conection
  }

  function onError(evt) {
    writeToScreen('ERROR: ' + evt.data, "error");
  }

  function doSend(message) {
    writeToScreen("Send: " + message);
    websocket.send(message);
  }

  function writeToScreen(message,style) {
    const pre = document.createElement("p");
    pre.appendChild(document.createTextNode(message));
    output.appendChild(createSpanWhitData(pre,style));
    }

  function createSpanWhitData(element,style) {
      const span = document.createElement("span");
      if(style){
        span.classList.add(style);
      }      
      span.appendChild(element);
      return span;
  }
  function sendMessage() {
    deleteChildFromElement("output");
      const data = document.getElementById("messageText");
      testWebSocket(data.value);
  }
  function deleteChildFromElement(elementID) {
    const element = document.getElementById(elementID);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
testWebSocket("WebSocket Working!!!");