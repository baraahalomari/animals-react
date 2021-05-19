import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hornData:this.props.hornData,
      savedElements:{},
      display:false,
    };
  }
  handleClose = () => {
    this.setState({
      display: false,
    });
  }
  
  handleShow = (param) =>{
    let result = hornData.find(element =>{
      if (element.title === param){
        return element;
      }
    });
    this.setState({
      savedElements:result,
      display:true,
    });
  }
  render(){
    return(
      <div>
        <Header/>
        <Main hornData ={hornData} handleShow = {this.handleShow}/>
        <SelectedBeast display={this.state.display} handleClose={this.handleClose} element={this.state.savedElements}/>
         <Footer/>
      </div>
    );
  }
}
export default App;