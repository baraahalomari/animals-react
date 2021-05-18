import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberOfAnimals:0,
        };
    }

    increseNumber = ()=>{
        this.setState({
            numberOfAnimals: this.state.numberOfAnimals + 1,
        })
    }
    sendInfo =()=>{
        this.props.handleShow(this.props.title);
    }


render(){
    return(
        <div>
            {/* <h2>{this.props.title}</h2>
            <img onClick={this.increseNumber} src={this.props.imgURL}/>
            <p>{this.props.description}</p>
            <p>{this.state.numberOfAnimals}</p> */}

        <Card style={{ width: '18rem' }}>
        <Card.Img onClick={this.sendInfo} variant="top" src={this.props.imgURL}/>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            🐏 Numper of animals: {this.state.numberOfAnimals}
            </Card.Text>
            <Card.Text>
             {this.props.description}
            </Card.Text>
            
        </Card.Body>
        </Card>


        </div>    
    )
}
}
export default HornedBeasts;