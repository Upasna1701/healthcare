import Header from "../Header";
import ChatContent from "../chatbot/ChatContent"
import ChatSummary from "../chatbot/ChatSummary";
import ChatbotRight from "../chatbot/ChatbotRight";
import ChatLeftContent from "../chatbot/ChtaLeftContent";
const ChatbotSummary = () => {
    return(
        <div>
            <Header />
            <div className='h-screen overflow-hidden pt-[70px] lg:pt-[80px]'>
            <div className="chatbotscreen">
                <div className='relative lg:flex gap-[70px] justify-between h-[100%] chatscreen-main'>
                    <div>
                        <ChatLeftContent/>
                    </div>
                    <div className="h-[100%]">
                        <ChatSummary />
                    </div>
                    <div>
                        <ChatbotRight/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ChatbotSummary;