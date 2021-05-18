import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from './components/data.json';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <Main hornsData = {hornsData}/>
        <Footer/>
      </div>
    )
  }
}
export default App;