import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/chatFeed/chatFeed.component';
import LoginForm from './components/loginForm/loginForm.component';
import './App.css';

const App = () => {
  
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="20ad6db0-1d58-44a0-ab65-8486b44cfb34"
        userName="John"
        userSecret="test123"
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps } />}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
      />
    </div>
  );
}

export default App;
