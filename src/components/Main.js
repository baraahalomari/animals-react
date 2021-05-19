import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornsData from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';



class Main extends React.Component {


    submitForm = (event) => {

        let optionNum = event.target.value;
        let arrCopy = hornsData;
        let arr = [];
        if (optionNum) {
            arr = arrCopy.filter(item => {

                if (item.horns == optionNum) {
                    return item;
                }
            })
        } else{
            arr=arrCopy;
        }
        this.props.filterAnimals(arr);
    }


    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Horns Number</Form.Label>
                        <Form.Control as="select" custom onChange={this.submitForm} >
                            <option value="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">woow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <CardColumns>

                    {this.props.hornsData.map((item, index) => {
                        return (
                            <HornedBeasts
                                key={index}
                                title={item.title}
                                imgURL={item.image_url}
                                description={item.description}
                                renderModal={this.props.renderModal}
                                handleShow={this.props.handleShow}
                            />
                        );
                    })}

                </CardColumns>
            </div>
        );
    }


}
export default Main;
