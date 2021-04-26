import React, { useEffect, useReducer, useState } from 'react';
import Axios from 'axios'
import Session from 'cookie-session';
import GetBurgers from '../../Burgers/GetBurgers'
import { Checkbox } from '@material-ui/core';
import { Form } from 'react-bootstrap'

export default function HomePage(props) {
    const [see, setsee] = useState(true);



    function ClickMe() {
        setsee(val => !val)
    }



    return (
        <div className='col-span-2'>
            
            <GetBurgers />


        </div>
    )
}