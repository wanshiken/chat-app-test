import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const projectID = '7499b360-4676-4e7f-bbf6-f0ff2f2cd6f6'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
