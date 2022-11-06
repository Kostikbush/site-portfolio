import {useEffect, useState} from 'react';

import './message.css';
import { printingText } from '../../printTextOnScreen';
import myFoto1 from '../../img/myfoto2.jpg'

function FirstMessage(){
    const [hello, setHello] = useState('');
    const hi = `Hi! My name is Konstantin. I’m a web developer.
    I have skills in: 
    HTML, React, redux, typescript, scss, css libraries, EsLint, testing the components.`;
    useEffect(()=> {
      printingText('hi-text',hi,hello, setHello);
    }, [])
    return (
        <section id='start' className='wrapper-first flex z-10 p-5'>
            <div className='start-media'>
              <p className='text-white hi-text'>
                  {hello}
              </p>
              <button className='button-cv'><a href='https://disk.yandex.ru/i/VJ1uUQcAWB1m6w'>DOWNLOAD CV</a></button>
            </div>
            <div className='wrapper-img'>
              <img className='my-foto' alt='my foto' src={myFoto1}/>
            </div>
        </section>
    )
}

export default FirstMessage;