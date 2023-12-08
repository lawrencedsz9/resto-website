// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import React, { useEffect } from "react";


function Chatbot() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "727c88115e90abf4850e15769a75a7ec",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
      // document.addEventListener('kmUserTyping', function(event) {
      //   console.log('User Typing:', event.detail);
      // });
      // document.addEventListener('onKmMessageReceived', function(event) {
      //   const message = event.detail.data;
      //   if (message.type === 'bot' || message.type === 'agent') {
      //     console.log('Bot Response:', message.message);
      //   }
      // });
    })(document, window.kommunicate || {});
   
  }, []);
  return <div></div>;
}

export default Chatbot;
