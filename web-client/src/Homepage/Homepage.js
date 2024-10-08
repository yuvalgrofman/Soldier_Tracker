import React from 'react';
import HomepageBar from './HomepageBar';
import ButtonGrid from '../general/ButtonGrid';
import './Homepage.css';
import { fetchContentDisplays } from '../general/Display';
import logo from '../images/logo.png'
import exceptionIcon from '../images/icon-exception.png'
import soldiersIcon from '../images/icon-soldier.png'
import testsIcon from '../images/icon-tests.png'
import settingsIcon from '../images/icon-settings.png'
import { useNavigate } from 'react-router-dom';

//TODO: the new homepage replaced a previous tests menu. There should
//      be a new tests menu (I added a button for it but still didn't
//      implement the page itself)

/* ~~ Old Home Page ~~

function Homepage() {

    const buttonNamesBar = ['Soldiers', 'Exceptions', 'Settings'];
    const buttonPagesBar = ['/Soldiers/Company/1009', '/Exceptions/Company/1009', '/Settings'];

    const contents = fetchContentDisplays();
    const buttonNames = contents.map((content) => content.name);
    const buttonPages = contents.map((content) => content.link);

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2" >
            <HomepageBar buttonNames={buttonNamesBar} buttonPages={buttonPagesBar} />
            <ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} pagesURL={'Content'} />
        </main>
    );
}
*/

function Homepage() {
    const navigate = useNavigate();

    const handleButtonClick = (route) => {
        navigate(route);
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            {/* logo */}
            <div className="logo mb-3">
                <img
                    src={logo}
                    alt="Logo"
                    className="img-fluid"
                />
            </div>

            {/* Icons */}
            <div className="icons d-flex flex-wrap justify-content-center w-100">
                <div className="icon-item text-center m-2">
                    <div className="icon-link-wrapper" onClick={() => handleButtonClick('/Soldiers/Company/1009')}>
                        <img src={soldiersIcon} alt="Soldiers" className="img-fluid" />
                        <p className="icon-title">חיילים</p>
                    </div>
                </div>

                <div className="icon-item text-center m-2">
                    <div className="icon-link-wrapper" onClick={() => handleButtonClick('/Content')}>
                        <img src={testsIcon} alt="Tests" className="img-fluid" />
                        <p className="icon-title">מבחנים</p>
                    </div>
                </div>

                <div className="icon-item text-center m-2">
                    <div className="icon-link-wrapper" onClick={() => handleButtonClick('/Exceptions/Company/1009')}>
                        <img src={exceptionIcon} alt="Exceptions" className="img-fluid" />
                        <p className="icon-title">חריגים</p>
                    </div>
                </div>

                <div className="icon-item text-center m-2">
                    <div className="icon-link-wrapper" onClick={() => handleButtonClick('/Settings')}>
                        <img src={settingsIcon} alt="Settings" className="img-fluid" />
                        <p className="icon-title">הגדרות</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;