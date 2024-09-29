import React from 'react';
import HomepageBar from './HomepageBar';
import ButtonGrid from '../general/ButtonGrid';
import './Homepage.css';
import { fetchContentDisplays } from '../general/Display';
import backgroundImage from '../images/background.jpeg';

var style={  
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

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

export default Homepage;