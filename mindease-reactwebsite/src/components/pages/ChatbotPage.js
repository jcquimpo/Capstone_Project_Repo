import React from 'react';
// import '../../App.css';
import '../styles/Chatbot_styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import addBtn from './public/images/add-30.jpg'
// import msgIcon from './public/images/messageIcon.jpg'

export default function ChatbotPage() {
    return (
    <div className='chatbot-app'>
        <div className='sidebar'>
            <div className='upperSide'>
                <div className='upperSideTop'><img src='' alt='' className='logo' />MindEase<i className='fab fa-typo3' /></div>
                <button className='midBtn'><img src='' alt='' className='addBtn'/>New Chat</button>
                <div className='upperSideBottom'>
                    <button className='query'><img src='' alt='Query'/>What is EaseChat?</button>
                    <button className='query'><img src='' alt='Query'/>How to use EaseChat?</button>                                        
                </div>
            </div>
            <div className='lowerSide'>
                <div className='listItems'><img src='' alt='' className='listitemsImg'/>Home</div>
                <div className='listItems'><img src='' alt='' className='listitemsImg'/>Saved</div>
                <div className='listItems'><img src='' alt='' className='listitemsImg'/>Upgrade</div>
            </div>
        </div>
        <div className='main'>

        </div>
    </div>
    );
}
