import './Toggle.css';
import Sun from '../../media/sun.png';
import Moon from '../../media/moon.png';

const Toggle = () => {
    return (
        <div className='t'>
            <img src={Sun} alt='sun' className='t_icon'/>
            <img src={Moon} alt='moon' className='t_icon'/>
            <div className='t_button'></div>
        </div>
    )
};

export default Toggle;
