import React from `react`;
class HornedBeasts extends React.Component{
render(){
    return(
        <div>
            <h2>{this.props.title}</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"/>
            <p>{this.props.description}</p>
        </div>    
    )
}
}
export default HornedBeasts;