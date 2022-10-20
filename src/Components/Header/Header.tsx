
import { useState } from 'react';
import './header.css';

type Props = {
    handleClick: Function,
    setDisplayHeader:Function,
    displayHeader: boolean,
}
export const Header = (props: Props) => {
    const hand = props.handleClick;
    const setDisplayHeader = props.setDisplayHeader;
    const displayHeader = props.displayHeader;
    window.onscroll = () => {
        const header = document.querySelector('header');
        if(window.pageYOffset > 20){
            if(header){
                header.classList.add('header_fixed')
            }
            
        }else{
            if(header){
            header.classList.remove('header_fixed')
            }
        }
    }
    return (
        <header className={displayHeader ?'header-active h-full w-80 m-0 right-0 top-0' : 'header px-5'}>
            <ul className='ul-smart-device'>
                <li
                 className='header-li'>
                    <a href="#start">start</a>
                </li>
                <li
                 className='header-li'>
                    <a href="#about">
                        about me
                    </a>
                </li>
                <li 
                className='header-li'>
                    <a href="#scils">
                        my scills
                    </a>
                </li>
                <li 
                className='header-li'>
                    <a href="#contact">
                        contacts
                    </a>
                </li>
            </ul>
            <div onClick={() => hand(setDisplayHeader, displayHeader)}
                className={'mob-device-wrapper'}>
                    <span className={displayHeader ? 'modile-device-actve' : 'modile-device'}>
                    </span>
            </div>
            <ul className={displayHeader ? 'phone-list' : 'hidden'}>
                <li onClick={() => hand(setDisplayHeader, displayHeader)} className='header-li-smart'>
                    <a href="#start">start</a>
                </li>
                <li onClick={() => hand(setDisplayHeader, displayHeader)} className='header-li-smart'>
                    <a href="#about">
                        about me
                    </a>
                </li>
                <li onClick={() => hand(setDisplayHeader, displayHeader)} className='header-li-smart'>
                    <a href="#scils">
                        my scills
                    </a>
                </li>
                <li onClick={() => hand(setDisplayHeader, displayHeader)} 
                className='header-li-smart'>
                    <a href="#contact">
                        contacts
                    </a>
                </li>
            </ul>
        </header>
    )
}