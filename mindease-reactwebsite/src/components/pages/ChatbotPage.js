import React from 'react';
import '../../App.css';
import '../styles/Chatbot_styles.css';
import '@fortawesome/fontawesome-free/css/all.css';

// these icons are NOT actually in the public folder - using this code as a reminder/reference for what we need 
// import addBtn from '../../images/new_chat_icon.jpg';
// import chatIcon from './public/images/chat_icon.jpg'
// import sendMsg from '../../../public/images/send_icon.png'
// this Icon will be passed as props from the profile page so the user can have their pfp from the profile as their chat icon - import is placeholder  
// import userIcon from './public/images/userIcon.jpg'
// import chatIcon from './public/images/chatIcon.jpg'

export default function ChatbotPage() {
    return (
        <div className='chatbot-app'>
            <div className='sidebar'>
                <div className='upperSide'>
                    {/* <div className='upperSideTop'><img src='' alt='' className='logo' />MindEase<i className='fab fa-typo3' /></div> */}
                    <button className='midBtn'><img src='' alt='' className='addBtn' />New Chat</button>
                    <div className='upperSideBottom'>
                        <button className='query'><img src='' alt='' />What is EaseChat?</button>
                        <button className='query'><img src='' alt='' />How to use EaseChat?</button>
                    </div>
                </div>
                <div className='lowerSide'>
                    {/* make the Home a link to be a link to the home page?  */}
                    <div className='listItems'><img src='' alt='' className='listitemsImg' />Home</div>
                    <div className='listItems'><img src='' alt='' className='listitemsImg' />Saved</div>
                </div>
            </div>
            <div className='main'>
                <div className='chats'>
                    <div className='chat'>
                        <img className='chatImg' src='' alt='chatIcon' />
                        <p className='text'>Lorem ipsum dolor sit amet. Aut error ratione qui velit nostrum aut aspernatur soluta quo saepe delectus et
                            quisquam porro quo magni autem sed quae rerum. Et aliquam sunt et possimus libero ut illo possimus et molestiae odio.</p>
                    </div>
                    <div className='chat'>
                        <img className='chatImg' src='' alt='userPFP' />
                        <p className='text'>Lorem ipsum dolor sit amet. Aut error ratione qui velit nostrum aut aspernatur soluta quo saepe delectus et
                            quisquam porro quo magni autem sed quae rerum. Et aliquam sunt et possimus libero ut illo possimus et molestiae odio.
                            Lorem ipsum dolor sit amet. Aut error ratione qui velit nostrum aut aspernatur soluta quo saepe delectus et quisquam porro quo magni autem sed quae rerum.
                            Et aliquam sunt et possimus libero ut illo possimus et molestiae odio.</p>
                    </div>
                </div>
                <div className='chatFooter'>
                    <div className='input'>
                        <input type='text' name='' id='' placeholder='Send a message' /><button className='send'><img src='' alt='Send' /></button>
                    </div>
                    <p>EaseChat can make mistakes. Consider checking important information. </p>
                </div>
            </div>
        </div>
    );
}
