import React from 'react';
import HomepageBar from './HomepageBar';
import ButtonGrid from '../general/ButtonGrid';
import './Homepage.css';
import { useState, useEffect } from 'react';
import { fetchContentDisplays } from '../general/API';

function Homepage() {
    // const [buttonNames, setButtonNames] = useState([]);
    // const [buttonPages, setButtonPages] = useState([]);

    // useEffect(() => {
    //     fetchContentDisplays().then((fetchContentDisplays) => {
    //         let fetchedButtonNames = fetchContentDisplays.map((content) => content.name);
    //         let fetchedButtonPages = fetchContentDisplays.map((content) => content.link);
    //         setButtonNames(fetchedButtonNames);
    //         setButtonPages(fetchedButtonPages);
    //     });
    // }, []);

    const buttonNamesBar = ['Soldiers', 'Exceptions', 'Settings'];
    const buttonPagesBar = ['/Soldiers', '/Excpetions', '/Settings'];

    const contents = fetchContentDisplays();
    const buttonNames = contents.map((content) => content.name);
    const buttonPages = contents.map((content) => content.link);

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <HomepageBar buttonNames={buttonNamesBar} buttonPages={buttonPagesBar} />
            <ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} pagesURL={'Content'} />
        </main>
    );
}

export default Homepage;