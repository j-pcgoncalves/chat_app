import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="20ad6db0-1d58-44a0-ab65-8486b44cfb34"
        userName="John"
        userSecret="test123"
      />
    </div>
  );
}

export default App;
