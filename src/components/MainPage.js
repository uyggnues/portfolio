import React from 'react';

const MainPage = () => {
    return (
        <div>
            <img src='https://i.pinimg.com/236x/17/d7/a2/17d7a2d33bc4c3ac756cb8311451bb00.jpg' alt="pfp" className='pfp'/>
            <div className='intro'>
                I am a self-proclaimed software engineer in search of opportunities to embark on my journey in the field of computer science.
            </div>

            <div className='boxes'>
                <div className='about-me'></div>
                <div className='my-work'></div>
            </div>
        </div>
    );
}

export default MainPage;
