import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Carousel } from 'react-bootstrap';
import burger1 from '../Pictures/burger1.jpg'
import burger2 from '../Pictures/burger2.jpg'
import burger3 from '../Pictures/burger3.jpg'

export default function Carusela() {
    const [allBurgers, setallBurgers] = useState([]);
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

    const Picture = [burger1, burger2, burger3];
    const style = "h-80 w-100"
    return (
        <div className='w-screen'>
            <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={Picture[0]}
                            class={style}
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src={Picture[1]}
                            class={style}
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src={Picture[2]}
                            class={style}
                            alt="..."
                        />
                    </div>
                </div>


            </div>







        </div>
    )
}