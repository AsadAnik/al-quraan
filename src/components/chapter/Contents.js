import React from 'react';
import ContentsHeader from './chaptersBody/ChaptersHeader';
import ContentsBody from './chaptersBody/ChaptersBody';
import StylesModule from '../../style_modules/Contents.module.css';
import Loading from '../widgets/Loading';

const Content = ({ selectedContent }) => {

    //Showing the content with this Function..
    const showContent = (content) => (
        content ?
            <div>
                <ContentsHeader content={content} />

                <ContentsBody 
                    pageStarts={content[0].pages[0]} 
                    pageEnds={content[0].pages[1]}
                />
            </div>
            :
            <div className={StylesModule.loading}>
                <Loading 
                    type={'spin'} 
                    color={'darkslategray'} 
                    height={25} 
                    width={25}
                />
            </div>
    )

    // console.log(selectedContent);

    //The Returinig Statement..  
    return (
        <div>
            {showContent(selectedContent)}
        </div>
    )
}

export default Content;