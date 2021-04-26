import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';

export default function EditUser(props) {
    const { id, Food, Discription, WitheDiscription, Pic, Price, Rating } = (props.location && props.location.state) || {};
    const [stateid, setstateid] = useState(id);
    const [stateFood, setstateFood] = useState(Food);
    const [stateDiscription, setstateDiscription] = useState(Discription);
    const [stateWitheDiscription, setstateWitheDiscription] = useState(WitheDiscription);
    const [statePic, setstatePic] = useState(Pic);
    const [statePrice, setstatePrice] = useState(Price);
    const [stateRating, setstateRating] = useState(Rating);

    function Change(e) {
        setstateFood(e => e.target.value)
    }

    const Updata = (id) => {

        const data = {
            Food: stateFood,
            Discription: stateDiscription,
            WitheDiscription: stateWitheDiscription,
            Pic: statePic,
            Price : statePrice,
            Rating : stateRating
        }
        Axios.put(`/Burgers/${id}`, data);
    }

    return (

        <div>
            <div class="login-box">
                
            <h2>User Edit </h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="Food" value={stateFood} onChange={e => setstateFood(e.target.value)} placeholder="First name" />
                        <label>Food</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="Discription" value={stateDiscription} onChange={e => setstateDiscription(e.target.value)} placeholder="Last name" />
                        <label>Discription: </label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="WitheDiscription" value={stateWitheDiscription} onChange={e => setstateWitheDiscription(e.target.value)} placeholder="Email" />
                        <label>WitheDiscription :</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="Pic" value={statePic} onChange={e => setstatePic(e.target.value)} placeholder="pic URL..." />
                        <label>Pic Url :</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="Price" value={statePrice} onChange={e => setstatePrice(e.target.value)} placeholder="pic URL..." />
                        <label>Price :</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="Rating" value={stateRating} onChange={e => setstateRating(e.target.value)} placeholder="pic URL..." />
                        <label>Rating :</label>
                    </div>
                    <div class="user-box">
                        <Button variant="primary" type="submit" onClick={() => Updata(id)}> Update Here</Button>

                    </div>

                </form>
            </div>

        </div>
    )
}