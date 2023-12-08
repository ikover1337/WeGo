import React, { useState } from 'react';
import { Input, IconButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon20ArrowRightOutline } from '@vkontakte/icons';


const Support =({}) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  

  return (

    <div className='supp'>
		<div className='contentsupp'>
      <div className='bannersupp'>
			  <div className='bannersupp__text'>
				  <h1>Поддержка</h1>
          <div>
        </div>
 </div>
 
      </div>

    
		</div>
    <main className='main__home' ></main>

<div>   
   <Input
className="message-input"
type="text"
placeholder="Введите ваше сообщение"
value={message}
onChange={handleChange}
/></div>
</div>


  )
}



export default Support;