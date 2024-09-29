import React from 'react';
import ButtonGrid from '../general/ButtonGrid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentDisplay } from '../general/Display';

function Content() {
    const { contentLink } = useParams();
    const contentDisplay = fetchContentDisplay(contentLink);
    const buttonNames = contentDisplay.tests.map((test) => test.name);
    const buttonPages = contentDisplay.tests.map((test) => test.link);

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className = "card-header d-flex flex-column align-items-center bg-light-gray">
                <span className="d-flex justify-content-center w-100 fw-bold">{contentDisplay.name}</span>
            </div>
            <ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} pagesURL={'Test'} />        
        </main>
    );
}

export default Content;