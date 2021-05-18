import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title:'this.props.title',
            imgURL:'this.props.image_url',
            description:'this.props.description',
        }
    }

    render(){
        return(
            <main>
                 {this.props.hornsData.map((item,index)=>{
                return(
                    <HornedBeasts
                    key={index}
                    title={item.title}
                    imgURL={item.image_url}
                    description={item.description}
                    />
                )
            })}
            </main>
        )
    }
}
export default Main;
