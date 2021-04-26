import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import { Container, Row, Col, Card, Image, Form, ListGroup, Button } from 'react-bootstrap'
import Axios from 'axios'
import { Link } from "react-router-dom";
import { Salad, Sauses, Breads, Drinks, Extra } from '../Data_Extention/Extentions'
import Modal from '../Modal/Modal'

import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBAnimation, MDBIcon } from "mdbreact";




const Myprofile = (props) => {



    const { id, Food, Discription, WitheDiscription, Pic, Price, Rating } = (props.location && props.location.state) || {};
    // Item Props .....
    const [stateid, setstateid] = useState(id);
    const [stateFood, setstateFood] = useState(Food);
    const [stateDiscription, setstateDiscription] = useState(Discription);
    const [stateWitheDiscription, setstateWitheDiscription] = useState(WitheDiscription);
    const [statePic, setstatePic] = useState(Pic);
    const [statePrice, setstatePrice] = useState(Price);
    const [stateRating, setstateRating] = useState(Rating);


    const isLoaded = () => {
        window.scroll(0, 0);
    }


    //Card Props....
    const [TotalPrice, SetTotalPrice] = useState([]);
    const Sum = [];
    let sum;
    const [Salads, SetSalads] = useState([]);
    const [Sause, SetSause] = useState([]);
    const [Bread, SetBread] = useState([]);
    const [Drink, SetDrink] = useState([]);
    const [Extras, SetExtras] = useState([]);

    // const [checked, setChecked] = useState(true);
    // const filteredItems = TotalPrice.filter(item => item !== valueToRemove)
    const handleChange = (e, Array, SetArray) => {
        var { checked } = e.target
        console.log('e.target.id', e.target.id)


        if (checked) {
            SetArray([Array, e.target.value])

            SetTotalPrice([TotalPrice, e.target.id])



        } else {

            var index = Array.indexOf(e.target.value)
            var PriceIndex = TotalPrice.indexOf(e.target.id)

            if (index !== -1) {

                Array.splice(index, 1)
                SetArray(...Array);
                TotalPrice.splice(PriceIndex, 0)
                SetTotalPrice(...TotalPrice);


            }


        }

    }




    let TotalPriceSplit = TotalPrice.toString().split(',');
    let TotalPriceSplitNumber = TotalPriceSplit.map((props) => {
        return Number(props);
    })



    let BurgerCost = TotalPriceSplitNumber.reduce((result, number) => result + number)
    let FinalCost = BurgerCost + Price;
    return (
        <div >

            <Container>
                <Row>
                    <Col className='mt-16' sm={4}>
                        <Col xs={20} md={20}>
                            <MDBCol style={{ maxWidth: "22rem" }}>
                                <MDBCard>
                                    <MDBAnimation type="bounce" infinite>
                                        <img className="img-fluid" alt="" src={Pic} />
                                    </MDBAnimation>

                                    <MDBCardBody>
                                        <MDBCardTitle>{Food}</MDBCardTitle>
                                        <MDBCardText>{`${Price}₪`} </MDBCardText>
                                        <MDBCardText>{WitheDiscription}</MDBCardText>


                                        <h1>TotalPrice : {FinalCost}</h1>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </Col>

                    </Col>
                    <Col className=' bg-gradient-to-r from-gray-100 to-gray-600   mt-16' sm={7} >
                        <Container >
                            <Row  className='mt-3'>
                                <Col  >

                                    <Form.Group  as={Col} controlId="formGridState">
                                        <Form.Label> <i class="fas fa-carrot fa-lg">Salads</i></Form.Label>
                                        <Form>

                                            {Salad.map((props) => (
                                                <div key={props.name} className="mb-3">
                                                    <Form.Check
                                                        value={props.name}
                                                        onChange={(e) => handleChange(e, Salads, SetSalads)}
                                                        type='checkbox'
                                                        id={props.price}
                                                        label={props.name}
                                                    />
                                                     price : {props.price}
                                                </div>
                                            ))}
                                        </Form>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label><i class="fas fa-bacon fa-lg">Sauces</i></Form.Label>
                                        <Form>
                                            {Sauses.map((props) => (
                                                <div key={props.name} className="mb-3">
                                                    <Form.Check
                                                        value={props.name}
                                                        onChange={(e) => handleChange(e, Sause, SetSause)}
                                                        type='checkbox'
                                                        id={props.price}
                                                        label={props.name}
                                                    />
                                                     price : {props.price}
                                                </div>
                                            ))}
                                        </Form>
                                    </Form.Group>




                                </Col>
                                <Col>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label><i class="fas fa-bread-slice fa-lg">Type of bread</i></Form.Label>
                                        <Form>
                                            {Breads.map((props) => (
                                                <div key={props.name} className="mb-3">
                                                    <Form.Check
                                                        value={props.name}
                                                        type='checkbox'
                                                        id={props.price}
                                                        onChange={(e) => handleChange(e, Bread, SetBread)}
                                                        label={props.name}
                                                    />
                                                     price : {props.price}
                                                </div>
                                            ))}
                                        </Form>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label><i class="fas fa-wine-glass-alt fa-lg">Drinking</i></Form.Label>
                                        <Form>
                                            {Drinks.map((props) => (
                                                <div key={props.name} className="mb-3">
                                                    <Form.Check
                                                        value={props.name}
                                                        type='checkbox'
                                                        id={props.name}
                                                        onChange={(e) => handleChange(e, Drink, SetDrink)}
                                                        id={props.price}
                                                        label={props.name}
                                                    />
                                                     price : {props.price}
                                                </div>
                                            ))}
                                        </Form>
                                    </Form.Group>
                                </Col>
                                <Col>



                                </Col>
                                <Col>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label><i class="fas fa-drumstick-bite fa-lg">Extras</i></Form.Label>
                                        <Form>
                                            {Extra.map((props) => (
                                                <div key={props.name} className="mb-3">
                                                    <Form.Check
                                                        value={props.name}
                                                        type='checkbox'
                                                        id={props.name}
                                                        onChange={(e) => handleChange(e, Extras, SetExtras)}
                                                        id={props.price}
                                                        label={props.name}
                                                    />
                                                    
                                                     price : {props.price}
                                                </div>
                                            ))}
                                        </Form>
                                    </Form.Group>



                                </Col>

                                <Row className=' font-black font-mono ml-1'>
                                    <Col>
                                        <Card className='' >
                                            <Card.Body>


                                                <Card>
                                                    <Card.Header>Your Order Here <i class="fas fa-arrow-down"></i></Card.Header>
                                                    <Card.Body>
                                                        <Card.Title>Your Salads : {Salads.map((props) => {
                                                            return `${props},`
                                                        })}</Card.Title>
                                                        <Card.Title>Your Sause : {Sause.map((props) => {
                                                            return `${props},`
                                                        })}</Card.Title>

                                                        <Card.Title>Your Bread : {Bread.map((props) => {
                                                            return `${props},`
                                                        })}</Card.Title>
                                                        <Card.Title>Your Drink : {Drink.map((props) => {
                                                            return `${props},`
                                                        })}</Card.Title>
                                                        <Card.Title>Your Extras : {Extras.map((props) => {
                                                            return `${props},`
                                                        })}</Card.Title>



                                                    </Card.Body>
                                                </Card>

                                                <Card.Body >
                                                    <div className='grid justify-items-end '>
                                                        <div>
                                                            <Modal
                                                                Salad={Salad}
                                                                Salads={Salads}
                                                                Sause={Sause}
                                                                Bread={Bread}
                                                                Drink={Drink}
                                                                Extras={Extras}
                                                                Pic={Pic}
                                                                WitheDiscription={WitheDiscription}
                                                                Rating={Rating}
                                                                Price={Price}
                                                                Food={Food}
                                                                FinalCost = {FinalCost}

                                                            />
                                                        </div>


                                                    </div>
                                                </Card.Body>

                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                            </Row>
                        </Container>
                    </Col>

                </Row>


            </Container>


        </div>
    )

}

export default Myprofile;


