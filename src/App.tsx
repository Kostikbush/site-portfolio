import { useState } from 'react';

import { AboutMe } from './Components/AboutMe/AboutMe';
import { Contacts } from './Components/Contact/Contact';
import FirstMessage from './Components/FirstMessage/FirstMessage';
import { Header } from './Components/Header/Header';
import { MySkils } from './Components/MySkils/MySkils';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {alertOnWindow} from './store/siteReducer';

function App() {
  const [displayHeader, setDisplayHeader] = useState(false);
  const handleClick = (setFunc: Function, element:boolean) => {
    const header = document.querySelector('header');
    setFunc(!element);
    if(header){
        header.classList.toggle('header_fixed')
    }
}
  return (
    <div className="App">
      <Header setDisplayHeader={setDisplayHeader} displayHeader={displayHeader} handleClick={handleClick}/>
      <main className='px-5'>
        <FirstMessage/>
        <AboutMe/>
        <MySkils/>
      </main>
      <Contacts/>
    </div>
  );
}

export default App;
