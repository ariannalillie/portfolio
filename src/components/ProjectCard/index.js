import './ProjectCard.css';

const ProjectCard = ({ website, image }) => {
    return (
        <div className='pc'>
            <div className='pc_browser'>
                <div className='pc_circle red'></div>
                <div className='pc_circle'></div>
                <div className='pc_circle green'></div>
            </div>
            <a href={website}>
                <img src={image} alt='' className='pc_img'/>
            </a>
        </div>
    )
};

export default ProjectCard;
