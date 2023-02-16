import React from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = React.useRef();
 

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_j45r967', 'template_i46covv', form.current, 'o3Y41vXosLqszRg3W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <div className='form'>
        <form  ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Имя' required/>
        <input type="tell" name="user_telephone" placeholder='Телефон'required/>
        <input name="message" type="text" placeholder='Мероприятие для заказа' required/>
        <input  className='input__button' type="submit" value="Отправить" />
        </form>
    </div>
  );
};

export default Form;