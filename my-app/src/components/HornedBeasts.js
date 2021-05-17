import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberOfPets:0,
        }
    }

    increseNumber = ()=>{
        this.setState({
            numberOfPets: this.state.numberOfPets + 1,
        })
    }


render(){
    return(
        <div>
            {/* <h2>{this.props.title}</h2>
            <img onClick={this.increseNumber} src={this.props.imgURL}/>
            <p>{this.props.description}</p>
            <p>{this.state.numberOfPets}</p> */}

        <Card style={{ width: '18rem' }}>
        <Card.Img onClick={this.increseNumber} variant="top" src={this.props.imgURL}/>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            🐏 Numper of animals: {this.state.numberOfPets}
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