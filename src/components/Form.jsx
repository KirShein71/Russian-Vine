import React from 'react';
import emailjs from '@emailjs/browser';




function Form() {
  const form = React.useRef();
 
   function handeSubmit(e) {
    e.preventDefault();
    setTimeout(()=>{
        e.target.reset();
    }, 2000) 
    emailjs.sendForm('service_j45r967', 'template_i46covv', form.current, 'o3Y41vXosLqszRg3W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 
  

  return (
    
    <div className='form'>
        <form  ref={form} onSubmit={handeSubmit}>
        <input type="text" name="user_name" placeholder='Имя' required/>
        <input type="tell" name="user_telephone" placeholder='Телефон'required/>
        <input name="message" type="text" placeholder='Мероприятие для заказа' required/>
        <input className='input__button' type="submit" value="Отправить" />
        </form>
    </div>
  );
};

export default Form;