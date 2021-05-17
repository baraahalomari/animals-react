import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornsData from './data.json';

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
                 {hornsData.map(item=>{
                return(
                    <HornedBeasts
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