import './Intro.css';
import Arianna from '../../media/Arianna.png';

const Intro = () => {
    return (
        <div className='i'>
            <div className='i_left'>
                <div className='i_left_wrapper'>
                    <h2 className='i_intro'>Hello my name is</h2>
                    <h2 className='i_name'>Arianna Johnson</h2>
                    <div className='i_title'>
                        <div className='i_title_wrapper'>
                            <div className='i_title_item'>Web Developer</div>
                            <div className='i_title_item'>UI/UX Designer</div>
                            <div className='i_title_item'>Web Developer</div>
                            <div className='i_title_item'>UI/UX Designer</div>
                        </div>
                    </div>
                    <p className='i_description'>
                    I am a full-stack software engineer with experience in React, Redux, Javascript and Python. I'm a results-oriented, mission-driven, and passionate individual who excels in very demanding environments.
                    </p>
                </div>
            </div>
            <div className='i_right'>
                <div className='i_background'></div>
                <img src={Arianna} alt='Arianna' className='i_img'/>
            </div>
        </div>
    )
};

export default Intro;
