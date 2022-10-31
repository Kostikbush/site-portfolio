import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { AboutMe } from './Components/AboutMe/AboutMe';
import { Contacts } from './Components/Contact/Contact';
import FirstMessage from './Components/FirstMessage/FirstMessage';
import { Header } from './Components/Header/Header';
import { MySkils } from './Components/MySkils/MySkils';
import logo from './img/logo-app.jpg';

function App() {
	const [displayHeader, setDisplayHeader] = useState(false);
	const [firstFrame, setFirstFrames] = useState(true);
	const handleClick = (setFunc: Function, element: boolean) => {
		const header = document.querySelector('header');
		setFunc(!element);
		if (header) {
			header.classList.toggle('header_fixed');
		}
	};
	useEffect(() => {
		setTimeout(() => {
			setFirstFrames(false);
		}, 3000);
	}, []);
	return (
		<div className="App">
			<CSSTransition
				timeout={500}
				classNames="alert"
				unmountOnExit
				in={firstFrame}
			>
				<div className="my-logo__container">
					<div className="my-logo__img">
						<img alt="logo-Kostick-Busharove" src={logo} />
					</div>
				</div>
			</CSSTransition>
			<Header
				setDisplayHeader={setDisplayHeader}
				displayHeader={displayHeader}
				handleClick={handleClick}
			/>
			<main className="px-5">
				<FirstMessage />
				<AboutMe />
				<MySkils />
			</main>
			<Contacts />
		</div>
	);
}

export default App;
