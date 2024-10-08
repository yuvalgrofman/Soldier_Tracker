import React from 'react';
import ButtonGrid from '../general/ButtonGrid';
import { fetchContentDisplays } from '../general/Display';

function Contents() {

    const contents = fetchContentDisplays();
    const buttonNames = contents.map((content) => content.name);
    const buttonPages = contents.map((content) => content.link);

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2" >
            <ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} pagesURL={'Content'} />
        </main>
    );
}

export default Contents;