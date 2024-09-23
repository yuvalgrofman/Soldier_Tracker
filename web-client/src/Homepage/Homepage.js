import React from 'react';
import HomepageBar from './HomepageBar';
import ButtonGrid from '../general/ButtonGrid';
import './Homepage.css';

function Homepage() {

    const buttonNamesBar = ['Soldiers', 'Exceptions', 'Settings'];
    const buttonPagesBar = ['/Soldiers', '/Excpetions', '/Settings'];

    const setContents = function() {
        const buttonNames = ["Shooting 1", "Shooting 2", "B3", "B4", "B5", "B6"]
        const buttonPages = ["B1", "B2", "B3", "B4", "B5", "B6"]
        return { buttonNames, buttonPages };
    }

    const { buttonNames, buttonPages } = setContents();

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <HomepageBar buttonNames={buttonNamesBar} buttonPages={buttonPagesBar} />
            <ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} />
        </main>
    );
}

export default Homepage;