import React from 'react';
import ButtonGrid from '../general/ButtonGrid';
import { fetchSettingDisplays } from '../general/Display';

function Setting() {
    const settingDisplay = fetchSettingDisplays();
    const buttonNames = settingDisplay.tests.map((test) => test.name);
    const buttonPages = settingDisplay.tests.map((test) => test.link);

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className = "card-header d-flex flex-column align-items-center bg-light-gray">
                <span className="d-flex justify-content-center w-100 fw-bold">{settingDisplay.name}</span>
            </div>
            <ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} />        
        </main>
    );
}

export default Setting;