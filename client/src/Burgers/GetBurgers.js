import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Card, Media } from 'react-bootstrap'
import Moment from 'moment'
import { Link } from "react-router-dom";
import Carusela from '../Carusela/Carusela';
import {MDBCol,MDBView,MDBMask,MDBRow} from 'mdbreact';


export default function GetBUrgers(props) {
    const [allBurgers, setallBurgers] = useState([]);
    const [Search, setSearch] = useState('');



    useEffect(() => {
        Axios.get('/Burgers')
            .then(res => {

                setallBurgers(res.data)
                console.log('this is server call!!!!')

            })
            .catch(err => {
                console.log(err);
            })
    }, allBurgers)

    const isLoaded = () => {
        window.scroll(0, 0);
    }

    const Delete = (id) => {
        Axios.delete('/Burgers/' + id);
    }






    return (
        <div>

            <Carusela />
            <div className='grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 '>

                {allBurgers.map((props) => {
                    return <div class="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                        <div class="md:flex">
                            <div class="md:flex-shrink-0">
                            <MDBRow >
                                <MDBCol md="14">
                                    <MDBView hover zoom>
                                        <img
                                            src={props.Pic}
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <MDBMask className="flex-center">
                                            <p className="white-text">Zoom effect</p>
                                        </MDBMask>
                                    </MDBView>
                                </MDBCol>
                                </MDBRow>
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">  <Link onClick={isLoaded} to={{
                                    pathname: `/Burgers/${props._id}`,
                                    state: {
                                        Food: props.Food,
                                        Discription: props.Discription,
                                        WitheDiscription: props.WitheDiscription,
                                        Pic: props.Pic,
                                        Price: props.Price,
                                        Rating: props.Rating

                                    },
                                }}
                                > <h5>{props.Food}</h5></Link></div>
                                <p href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                    <h6>{`${props.Price}₪`}</h6>
                            Rating :   {[0, 1, 2, 3, 4].map((i) => {
                                        if (Number(props.Rating) > i)
                                            return (
                                                <span >☆</span>
                                            );
                                        else {
                                            return (
                                                <div></div>
                                            )
                                        }
                                    })}
                                </p>
                                <p class="mt-2 text-gray-500 line-clamp-2 hover:line-clamp-none">{props.WitheDiscription}</p>
                            </div>
                        </div>
                   
                    </div>
                })}







            </div>
        </div>

    )
}
