import React, {useCallback, useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './css/style.css';

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Button,FormItem, HorizontalScroll,  Group,  FormLayout,  Input, DatePicker, TimePiker, Checkbox, DateInput} from '@vkontakte/vkui';
import { Icon20Clear } from '@vkontakte/icons';
import {ReactComponent as Homeicon} from '../src/img/home.svg'
import {ReactComponent as Manicon} from '../src/img/man.svg'
import {ReactComponent as Paymentsicon} from '../src/img/payments.svg'
import {ReactComponent as Supporticon} from '../src/img/support.svg'

import {ReactComponent as Active1} from '../src/img/Group-35.svg'
import {ReactComponent as Active2} from '../src/img/Group-36.svg'
import {ReactComponent as Active3} from '../src/img/Group-37.svg'
import {ReactComponent as Active4} from '../src/img/Group-38.svg'


import Home from './pages/Home';
import Payments from './pages/Payments';
import Support from './pages/Support';
import Profile from './pages/Profile';


/*
<i className={`fa fa-star${isHighlighted ? ' highlighted' : ''}`}
	onClick={handleClick}>
	</i>fvfv 
*/

const App = () => {

	const [age, setAge] = useState('');
	const [age1, setAge1] = useState('');

    const handleChanges= (event) => {
        setAge(event.target.value);
    }
	const handleChangesf= (event) => {
        setAge1(event.target.value);
    }

	const[time,setTime] = useState('00:00');
	const[time1,setTime1] = useState('00:00');

	const handleChange = (e) => {
		setTime(e.target.value)
	}

	const handleChange1 = (e) => {
		setTime1(e.target.value)
	}

	const[isOpen,setIsOpen] = useState(false);

	const togglePanel =() =>{
		setIsOpen(!isOpen);
	};
	

	const [isHighlighted, setIsHighlighted] = useState(false);
	const [isHighlighted1, setIsHighlighted1] = useState(false);
	const [isHighlighted2, setIsHighlighted2] = useState(false);
	const [isHighlighted3, setIsHighlighted3] = useState(false);

	const handleClick = () => {
		setIsHighlighted(!isHighlighted);
	  };
	  const handleClick1 = () => {
		setIsHighlighted1(!isHighlighted1);
	  };
	  const handleClick2 = () => {
		setIsHighlighted2(!isHighlighted2);
	  };
	  const handleClick3 = () => {
		setIsHighlighted3(!isHighlighted3);
	  };
				
		return (

			<div>
		<Router>
		  <div>
			
				<div className='home_links_container'>
					<div className='home_links'>
						<Link to='/'><Homeicon className='icon__app'/></Link>
						<Link to='/Payments'><Paymentsicon className='icon__app' /></Link>
						<Link to='/Support'><Supporticon className='icon__app'/></Link>
						<Link to='/Profile'><Manicon className='icon__app'/></Link>
					</div>
				</div>
				<Button onClick={togglePanel} style={{ background: 'transparent', color: 'white' }} className='button__plus'>
					<Icon20Clear width={75} height={75} className='plus__icon'/>
				</Button>
				{isOpen &&(
					<Group className='group__active'>
						<FormLayout>

							<FormItem
							top='Тип активности' htmlFor='type_of_active'></FormItem>
							<HorizontalScroll
							showArrows>
								<div className='panel__scroll'>
									<Button i className={`fa fa-star${isHighlighted ? ' highlighted' : ''}`}
	onClick={handleClick} style={{ background: 'transparent', color: 'white' }}><Active1/></Button>
									<Button i className={`fa fa-star${isHighlighted1 ? ' highlighted1' : ''}`}
	onClick={handleClick1} style={{ background: 'transparent', color: 'white' }}><Active2/></Button>
									<Button i className={`fa fa-star${isHighlighted2 ? ' highlighted2' : ''}`}
	onClick={handleClick2} style={{ background: 'transparent', color: 'white' }}><Active3/></Button>
									<Button i className={`fa fa-star${isHighlighted3 ? ' highlighted3' : ''}`}
	onClick={handleClick3} style={{ background: 'transparent', color: 'white' }}><Active4/></Button>
								</div>
							</HorizontalScroll>
							


							<FormItem top='Дата' htmlFor='date'>
								<DatePicker
								min={{day:1, month:1,year:1939}}
								max={{day:1, month:1,year:2024}}
								dayPlaceHolder="День"
								monthPlaceholder="Месяц"
								yearPlaceholder="Год">

								</DatePicker>
							</FormItem>	


						
							<FormItem className='formtime' top='Время' htmlFor='time'>
								<label htmlFor='time'>Начало</label>
								<input style={{margin:10}} type='time' value={time} onChange={handleChange}></input>
								<label htmlFor='time'>Конец</label>
								<input style={{margin:10}} type='time' value={time1} onChange={handleChange1}></input>
							</FormItem>

							
							<FormItem 
							top='Место'
							htmlFor='place'>
								<Input
								type='text'></Input>
							</FormItem>

							<FormItem top='Пол' htmlFor='sex'>
								<div>
								<Checkbox>Мужчина</Checkbox>
								<Checkbox>Женщина</Checkbox>
								</div>
							</FormItem>


							<FormItem className='fortime' top='Возраст участников'>
							<label htmlFor='age'>От</label>
							<input style={{margin:10}} type="number" min="1" max="100" value={age} onChange={handleChanges} />
							<label htmlFor='age'>До</label>
							<input style={{margin:10}} type="number" min="1" max="100" value={age1} onChange={handleChangesf} />
							</FormItem>

							<Button>Сохранить</Button>
						</FormLayout>
					</Group>
				)}		
			
	
			<Switch>
				<Route path="/Profile">
					<Profile />
				  </Route>
				  <Route path="/Support">
					<Support />
				  </Route>
				  <Route path="/Payments">
					<Payments />
				 </Route>
				  <Route path="/">
					<Home />
				  </Route>
			</Switch>
	
			
		  </div>
		</Router>
	</div>
		
	);
}


export default App;
