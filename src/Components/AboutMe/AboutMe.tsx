import { useEffect, useState } from 'react';

import './about.css';

import nowJs from '../../img/dontNownJs.jpg';
import py from '../../img/lernPy.jpg';
import grok from '../../img/grok.jpg';
import curs from '../../img/curs.jpg';
import lernJs from '../../img/lernJs.jpg';
import mdn from '../../img/mdn.jpg';
import country1 from '../../img/country1.jpg'
import country2 from '../../img/country2.jpg'
import country3 from '../../img/country3.jpg'
import country4 from '../../img/country4.jpg'
import fedback1 from '../../img/fedback1.jpg'
import fedback2 from '../../img/fedback2.jpg'

import {useCustomState} from '../../customHooks/useState';
import { printingText } from '../../printTextOnScreen';

export const AboutMe = () => {
    const [offset, setOffset] = useState(0);
    const [ofsetTwo, setOfsetTwo] = useState(0);
    const {value, setValue} = useCustomState();
    const slide = (off:number, setOf:Function, dalay:number, offMinus:number, wid:number) => {
        if(off < wid){
            setOf(0)
        }
        setTimeout(()=> {
            setOf(off-offMinus)
        }, dalay)
    }
    useEffect(()=> {
        slide(offset, setOffset, 1700,300, -1500);
    },[offset])
    useEffect(()=> {
        slide(ofsetTwo, setOfsetTwo, 1300, 240, -1200)
    }, [ofsetTwo])
    const slidSt = {
        left: `${offset}`+'px'
    }
    const slidTwo = {
        left: `${ofsetTwo}`+'px'
    }
    const textFirstP = `Good afternoon, I am a 
    junior frontend developer, I have been studying 
    for 1.5 years on video, books and courses.
    My projects are presented below as laid out for use, and on github.
    `;
    useEffect(()=> {
        printingText('paragrath',textFirstP, value, setValue);
    }, [])
    return (
        <section id='about' className='about__wrapper'>
            <h2 className='text-4xl self-center justify-self-center uppercase'>About Me.</h2>
            <div className='about'>
                <div className='about__paragrath'>
                    <p className='paragrath'>
                          {value}
                    </p>
                    <ul>
                        Books I've read:
                        <li>1) Grokking Algorithms.</li>
                        <li>2) Learning Python Fourth Edition - Mark Lutz.</li>
                        <li>3) A series of books - you don't know JS.</li>
                        <li>4) Site Lern JavaScript.ru</li>
                        <li>5) Mdn</li>
                        <li>And others..</li>
                    </ul> 
                </div>
                <div className='about__cards flex items-center justify-center'>
                    <div className='about__lines'>
                        <div style={slidSt} className='about__line'>
                            <div className='about__card'><img src={nowJs} height={200} width={200} alt='you don now JS' /></div>
                            <div className='about__card'><img height={200} width={200} src={py} alt='lern Python'/></div>
                            <div className='about__card'><img height={200} width={200} src={grok} alt='Grokking Algorithms' /></div>
                            <div className='about__card'><img height={200} width={200} src={curs} alt='Curs' /></div>
                            <div className='about__card'><img height={200} width={200} src={lernJs} alt='lernJs'/></div>
                            <div className='about__card'><img height={200} width={200} src={mdn} alt='Mdn'/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    <p className='about__paragrath'>I also took a Fullstack development course from the Finnish University in Helsinki</p>
                    <p>This is <a className='text-green-600 text-3xl' href='https://fullstackopen.com/en/'>link</a> on the curs.</p>
                    <p>This is <a className='text-green-600 text-3xl' href='https://github.com/Kostikbush/fullStack-cours-home-work.git'>link</a> git repo of this curs.</p>
                    <div className='text-center'>
                        <h3 className='text-4xl'>Phots works from the curs</h3>
                        <div className='curs-wrapper__container'>
                            <div className='curs-container__block'>
                                <div style={slidTwo} className='curs-block'>
                                    <img className='w-60 h-52' src={country1} alt='img'/>
                                    <img className='w-60 h-52 ' src={country2} alt='img'/>
                                    <img className='w-60 h-64' src={country3} alt='img'/>
                                    <img className='w-60 h-auto' src={country4} alt='img'/>
                                    <img className='w-60 h-52' src={fedback1} alt='img'/>
                                    <img className='w-60 h-52 mt-my' src={fedback2} alt='img'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}