import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hornsData:hornsData,
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
    let result = hornsData.find(element =>{
      if (element.title === param){
        return element;
      }
    });
    
    this.setState({
      savedElements:result,
      display:true,
    });
  }

  filterAnimals=(filterData)=>{
    this.setState({
      hornsData:filterData,
    });
  }
  render(){
    return(
      <div>
        <Header/>
        <Main hornsData ={this.state.hornsData} handleShow = {this.handleShow} filterAnimals={this.filterAnimals}/>
        <SelectedBeast display={this.state.display} handleClose={this.handleClose} element={this.state.savedElements} />
         <Footer/>
      </div>
    );
  }
}
export default App;