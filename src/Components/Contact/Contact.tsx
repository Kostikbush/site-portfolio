import {SocialIcon} from 'react-social-icons';
import {TbBrandWhatsapp} from 'react-icons/tb';

import my from '../../img/myfoto.png'

import './contact.css';
export const Contacts = () => {
    return (
        <footer id='contact' className="contacts p-5 text-center">
            <h2 className='text-5xl text-white'>Contact me using</h2>
            <section className='flex flex-wrap'>
                <div className='flex flex-col justify-around cont1'>
                    <div className='flex justify-between'>
                        <div >
                            <SocialIcon url="https://vk.com/id321990721" network='vk' bgColor="#2787f5"/>
                        </div>
                        <div>
                            <SocialIcon url="https://web.telegram.org/k/#474161380" network='telegram' bgColor="#2787f5"/>
                        </div>
                        <div>
                            <a href='https://web.whatsapp.com/'>
                            <TbBrandWhatsapp color='#00b700' size={60}/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='text-white text-s'>
                            My number: +79500176825.
                        </div>
                        <div className='text-white text-s'>
                            My mail: qwerty58649@yandex.ru
                        </div>
                    </div>
                </div>
                <div className='last w-2/5 flex-col content-center items-center'>
                    <h3 className='text-white text-4xl'>Waiting for you</h3>
                    <img className='w-3/4 h-auto' src={my}/>
                </div>
            </section>
        </footer>
    )
}