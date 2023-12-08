import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


import {ReactComponent as Active1} from '../img/Group-35.svg'
import {ReactComponent as Active2} from '../img/Group-36.svg'
import {ReactComponent as Active3} from '../img/Group-37.svg'
import {ReactComponent as Active4} from '../img/Group-38.svg'
import { ReactComponent as Search } from '../img/Frame.svg';

import {BrowserRouter as router,Route,Switch, NavLink} from 'react-router-dom';
import { Button, Div, IconButton, Link } from '@vkontakte/vkui';


const Home = () => {



  return(

<div className='home'>

<div className='usles__button'>
    <Button style={{ background: 'transparent', color: 'white' }}><Active1/></Button>
    <Button style={{ background: 'transparent', color: 'white' }}><Active2/></Button>
    <Button style={{ background: 'transparent', color: 'white' }}><Active3/></Button>
    <Button style={{ background: 'transparent', color: 'white' }}><Active4/></Button>
	  </div>
</div>
  );
}



export default Home;
