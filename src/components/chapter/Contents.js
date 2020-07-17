import React from 'react';
import multiClass from 'classnames';
import StylesModule from '../../style_modules/Contents.module.css';
import Loading from '../widgets/Loading';
import RevelationIcon from '../widgets/RevelationIcon';

const Content = ({ selectedContent }) => {

    const showRevelationsIcon = (revelation) => (
        <RevelationIcon placeName={revelation} iconSize={100} />
    )

    //Showing the content with this Function..
    const showContent = (content) => (
        content ?
            <section className={multiClass(StylesModule.contentSection, 'mt-4 mb-4')}>
                <div className={'d-flex'}>
                    <div className={StylesModule.icon}>
                        {showRevelationsIcon(content[0].revelationPlace)}
                    </div>

                    <div>
                        <h1>{content[0].nameArabic}</h1>
                        <h3>{content[0].nameComplex}</h3>
                    </div>
                </div>

                <hr className={StylesModule.hr} />

                <div className={StylesModule.contentMiddle}>
                    <ul>
                        <li>
                            <p>
                                <span>Verses </span>
                                <span className={StylesModule.circle}>
                                    {content[0].versesCount}
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>Revelation Order </span>
                                <span className={StylesModule.circle}>
                                    {content[0].revelationOrder}
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>Revelation Place </span>
                                <span className={StylesModule.roundedBox}>
                                    {content[0].revelationPlace}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={StylesModule.contentFooter}>
                    <span>
                        Pages from
                        <b><span className={StylesModule.circle}>{content[0].pages[0]}</span></b> to
                        <b><span className={StylesModule.circle}>{content[0].pages[1]}</span></b>
                    </span>
                </div>

            </section>
            :
            <div>
                <Loading type={'spin'} color={'darkslategray'} height={25} width={25} />
            </div>
    )

    console.log(selectedContent);

    //The Returinig Statement..  
    return (
        <div>
            {showContent(selectedContent)}
        </div>
    )
}

export default Content;