import { useState, useEffect } from 'react';

import {FaReact} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {GrHtml5} from 'react-icons/gr';
import {TbBrandCss3} from 'react-icons/tb';
import {SiRedux} from 'react-icons/si';
import {SiTypescript} from 'react-icons/si';
import {SiJest} from 'react-icons/si';
import {DiGithub} from 'react-icons/di';
import {IoIosInfinite} from 'react-icons/io';
import {DiPhotoshop} from 'react-icons/di';
import {FaFigma} from 'react-icons/fa';
import {AiOutlineDoubleLeft} from 'react-icons/ai';
import {TbBrandSass} from 'react-icons/tb';
import {TbBrandTailwind} from 'react-icons/tb'

import sortAn from '../../img/sortAn.jpg';
import bad from '../../img/bad.jpg';
import clock from '../../img/clock.jpg';
import todo from '../../img/todo.jpg';
import mogo from '../../img/mogo.jpg';
import mntn from '../../img/mntn.jpg';
import post from '../../img/post.jpg';
import posts from '../../img/posts.jpg';
import cats from '../../img/cats.jpg';

import './mySkils.css';

export const MySkils = () => {
    const windowWidth = window.outerWidth;
    const [offset, setOffset] = useState(0);
    const [numberPlusMinusOffset, setNumberPlusMinusOffset] = useState(615);
    const [sizeJs, setSizeJs] = useState(60);
    const [sizeH, setSizeH] = useState(60);
    const [sizeC, setSizeC] = useState(60);
    useEffect(()=> {
        if(windowWidth < 675 && windowWidth > 349){
            setNumberPlusMinusOffset(280);
        }else if(windowWidth < 350 ) {
            setNumberPlusMinusOffset(230)
        }else if(windowWidth >=675 ){
            setNumberPlusMinusOffset(615)
        }
        if(windowWidth < 850 && windowWidth > 50){
            setSizeH(35)
            setSizeJs(35)
            setSizeC(50)
        }
        if(windowWidth < 500 && windowWidth > 450){
            setSizeH(25)
            setSizeJs(25)
            setSizeC(40)
        }
        if(windowWidth < 450){
            setSizeH(20)
            setSizeJs(20)
            setSizeC(35)
        }
    }, [])

    const plusLeft = () => {
        if(numberPlusMinusOffset === 615 && offset < -2900){
            setOffset(0)
        }else if(numberPlusMinusOffset === 280 && offset < -2800){
            setOffset(0)
        }else if(numberPlusMinusOffset === 230 && offset < -2300){
            setOffset(0)
        }
        else{
            setOffset(offset - numberPlusMinusOffset)
        }
    }
    const minusLeft = () => {
        if(numberPlusMinusOffset === 615 && offset > -615){
            setOffset(0)
        }else if(numberPlusMinusOffset === 280 && offset > -280){
            setOffset(0)
        }else if(numberPlusMinusOffset === 230 && offset > -230){
            setOffset(0)
        }
        else{
            setOffset(offset + numberPlusMinusOffset)
        }
    }
    const leftStyle = {
        left: offset + 'px'
    }
    const whiteI ={
        color: '#fff',
        stroke: '#fff'
    } 
    return (
        <section id='scils' className="wrapper__cards mb-14 relative">
            <h2 className='uppercase text-white'>My skills</h2>
            <div className='items-center justify-center w-full flex flex-col'>
                <div className='cards__skils__wrapper'>
                    <div style={leftStyle}  className="cards__skils">
                        <div className="skill">
                            <h3>HTML</h3>
                            <GrHtml5 size={85}/>
                        </div>
                        <div className="skill">
                            <h3>CSS</h3>
                            <TbBrandCss3 size={85}/>
                        </div>
                        <div className="skill">
                            <h3>JavaScript</h3>
                            <TbBrandJavascript size={85}/>
                        </div>
                        <div className="skill">
                            <h3>React</h3>
                            <FaReact size={85}/>
                        </div>
                        <div className="skill">
                            <h3>Redux</h3>
                            <SiRedux size={85}/>
                        </div>
                        <div className="skill">
                            <h3>Tipescript</h3>
                            <SiTypescript size={85}/>
                        </div>
                        <div className="skill">
                            <h3>Testing with Jest</h3>
                            <SiJest size={85}/>
                        </div>
                        <div className="skill">
                            <h3>SASS</h3>
                            <TbBrandSass size={85}/>
                        </div>
                        <div className="skill">
                            <h3>github</h3>
                            <DiGithub size={85}/>
                        </div>
                        <div className="skill">
                            <h3>CI-CD</h3>
                            <IoIosInfinite size={85}/>
                        </div>
                        <div className="skill">
                            <h3>PHOTOSHOP</h3>
                            <DiPhotoshop size={85}/>
                        </div>
                        <div className="skill">
                            <h3>Figma</h3>
                            <FaFigma size={85}/>
                        </div>
                    </div>
                    
                </div>
                <div className='text-white but'>
                        <button onClick={minusLeft}><AiOutlineDoubleLeft/></button>
                        <button onClick={plusLeft}><AiOutlineDoubleLeft className='rotate-180'/></button>
                </div>
                <div className='text-center mt-5 text-white'>
                    <h3 className='text-white'>My projects</h3>
                        <div className="container">
                            <div className="gallery relative">
                                <figure className="item gallery__item gallery__item--1">
                                <a target="_blank" href='https://kostikbush.github.io/Cool-Elements-for-the-site_sort/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={sortAn} alt="Gallery image 1" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        Simple filter.
                                        <br/>
                                        Made with 
                                        <span className='text-white flex justify-around w-full'>
                                            <TbBrandJavascript size={sizeJs}/>
                                            <GrHtml5 className='wh' size={sizeC} style={whiteI}/>
                                            <TbBrandCss3/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>

                                </figure>
                                <figure className="item gallery__item gallery__item--2">
                                <a target="_blank" href='https://todo-app-3vhjez0at-kostikbush.vercel.app/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={todo} alt="Gallery image 2" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        PWA To-do list App.
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <FaReact size={sizeJs}/>
                                            <SiRedux size={sizeJs}/>
                                            <TbBrandSass size={sizeJs}/>
                                            <TbBrandTailwind size={sizeJs}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                                <figure className="item gallery__item gallery__item--3">
                                <a target="_blank" href='https://kostikbush.github.io/MoGo/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={mogo} alt="Gallery image 3" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        Adaptive layout.
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <GrHtml5 size={sizeH} className='wh'/>
                                            <TbBrandCss3 size={sizeC}/>
                                            <TbBrandJavascript size={sizeJs}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                                <figure className="item gallery__item gallery__item--4">
                                <a target="_blank" href='https://kostikbush.github.io/MNTN/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={mntn} alt="Gallery image 4" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        Adaptive layout.
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <GrHtml5 size={sizeH} className='wh'/>
                                            <TbBrandCss3 size={sizeC}/>
                                            <TbBrandJavascript size={sizeJs}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                                <figure className="item gallery__item gallery__item--5">
                                <a target="_blank" href='https://kostikbush.github.io/post-like/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={post} alt="Gallery image 5" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        Element of site whith post.
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <FaReact size={sizeJs}/>
                                            <SiRedux size={sizeJs}/>
                                            <TbBrandCss3 size={sizeC}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                                <figure className="item gallery__item gallery__item--6">
                                <a target="_blank" href='https://kostikbush.github.io/posts-json-placeholder/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={posts} alt="Gallery image 6" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        Element of site whith posts. 
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <FaReact size={sizeJs}/>
                                            <SiRedux size={sizeJs}/>
                                            <TbBrandCss3 size={sizeC}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                                <figure className="item gallery__item gallery__item--7">
                                <a target="_blank" href='https://kostikbush.github.io/Cool-Elements-for-the-site_dropdown_piple/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={bad} alt="Gallery image 6" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        Filter for selecting the number of people
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <TbBrandJavascript size={sizeJs}/>
                                            <GrHtml5 size={sizeH} className='wh' style={whiteI}/>
                                            <TbBrandCss3 size={sizeC}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                                <figure className="item gallery__item gallery__item--8">
                                <a target="_blank" href='https://kostikbush.github.io/clock/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={clock} alt="Gallery image 6" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                       Clock.
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <TbBrandJavascript size={sizeJs}/>
                                            <GrHtml5 size={sizeH} className='wh' style={whiteI}/>
                                            <TbBrandCss3 size={sizeC}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                                <figure className="item gallery__item gallery__item--9">
                                    <a target="_blank" href='https://kostikbush.github.io/like-cats/' className='absolute w-full h-full top-0 left-0 z-50'></a>
                                    <img src={cats} alt="Gallery image 6" className="gallery__img" />
                                    <p className='text-img justify-between'>
                                        Like for cats.
                                        <br/>
                                        Made with 
                                        <span className='flex justify-around w-full'>
                                            <FaReact size={sizeJs}/>
                                            <SiRedux size={sizeJs}/>
                                            <TbBrandCss3 size={sizeC}/>
                                        </span>
                                        <span>click to view this project</span>
                                    </p>
                                </figure>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}