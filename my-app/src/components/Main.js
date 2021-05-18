import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornsData from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {

    render(){
        return(
            <CardColumns>
                <div>
                     {hornsData.map((item,index)=>{
                return(
                    <HornedBeasts
                    key={index}
                    title={item.title}
                    imgURL={item.image_url}
                    description={item.description}
                    renderModal = {this.props.renderModal}
                    handleShow={this.props.handleShow}
                    />
                );
                     })}
                </div>
            </CardColumns>
        );
    }

    
}
export default Main;
