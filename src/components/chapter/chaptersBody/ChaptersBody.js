import React, {useState} from 'react';
import Multiple from 'classnames';
import ScrollPage from 'react-scrollbars-custom';
import ToggleButton from '../../widgets/ToggleButton';
import StylesModule from '../../../style_modules/Contents.module.css';

const Body = ({ pageStarts, pageEnds }) => {
    //The Hooks for Setting the Mood of Reading page..
    const [mood, setMood] = useState(false);

    // console.log(pageStarts, pageEnds)

    ///Make the Array with pages to map data with images..
    const makeArrayWithData = (one, two) => {
        let putInside = [];

        for (one; one <= two; one++) {
            putInside.push(one);
        }

        return putInside;
    }

    //Showing The Multiple pages Data with images...
    const showMultiplePages = (str, end) => {
        let PAGES = makeArrayWithData(str, end);

        return PAGES.map((item, index) => (
            <div key={index}>
                <div className={Multiple('text-center p-2', StylesModule.PN)}>
                    <span className={StylesModule.circle}>{item}</span>
                </div>
                <img
                    className={Multiple('img-fluid')}
                    src={`/quran-pages/${item}.png`}
                    alt={`Starts At: ${str} Ends At: ${end}`}
                />
            </div>
        ))
    }

    //Rendaring the Template to view...
    const renderPages = (start, end) => (
        start !== end ?
            showMultiplePages(start, end)
            :
            <img
                className={'img-fluid'}
                src={`/quran-pages/${start || end}.png`}
                alt={`Starts At: ${start} Ends At: ${end}`}
            />
    )

    ///The Returining Statement...
    return (
        <div className={StylesModule.contentsBody}>
            <ToggleButton click={() => {mood ? setMood(false): setMood(true)}}/>

            <div style={{background: mood ? 'rgb(251, 239, 175)': '#fff'}}>
                <ScrollPage style={{ width: '100%', height: 800 }}>
                    {renderPages(pageStarts, pageEnds)}
                </ScrollPage>
            </div>
        </div>
    )
}

export default Body;