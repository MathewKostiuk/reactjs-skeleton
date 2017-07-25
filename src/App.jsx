import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MessageList/>
        <Chatbar/>
      </div>
    );
  }
}
export default App;
