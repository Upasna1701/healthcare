import { useNavigate } from "react-router-dom";
import Header from "../Header";
import ChatContent from "../chatbot/ChatContent";
import ChatbotRight from "../chatbot/ChatbotRight";
import ChatLeftContent from "../chatbot/ChtaLeftContent";
// import ChatLeftContent from "../chatbot/ChtaLeftContent"

const Chatbot = () => {
  return (
    <>
      <Header />
      <div className="h-screen overflow-hidden pt-[70px] lg:pt-[80px]">
        <div className="chatbotscreen">
          <div className="relative lg:flex gap-[70px] justify-between h-[100%] chatscreen-main">
            <div>
              <ChatLeftContent />
            </div>
            <div className="h-[100%]">
              <ChatContent />
            </div>
            <div>
              <ChatbotRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
