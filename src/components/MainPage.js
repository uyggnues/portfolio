import React from 'react';
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate()
    return (

        <div>
            <img src='https://i.pinimg.com/236x/17/d7/a2/17d7a2d33bc4c3ac756cb8311451bb00.jpg' alt="pfp" className='pfp'/>
            <div className='intro'>
                I am a software engineer in search of opportunities to embark on my journey in the field of computer science.
            </div>

            <div className='boxes'>
                <div className='about-me' onClick={() => navigate('/aboutMe')}>
                    <h1>Want to Know more About Me?</h1>
                </div>
                <div className='my-work' onClick={() => navigate('/myWork')}>
                    <h1>Want to See My Work?</h1>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
