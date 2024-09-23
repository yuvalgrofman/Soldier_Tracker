import React from 'react';
import ButtonGrid from '../general/ButtonGrid';

function Content({testNames, testPages}) {

    return (
        <ButtonGrid buttonNames={testNames} buttonPages={testPages} />        
    );
}

export default Content;