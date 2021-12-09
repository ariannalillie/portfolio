import './Intro.css';

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
                            <div className='i_title_item'>option 3</div>
                            <div className='i_title_item'>option 4</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right_container'>right</div>
        </div>
    )
};

export default Intro;
