import ProjectCard from '../ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='p'>
            <div className='p_text'>
                <h1 className='p_title'>Arianna's Projects</h1>
                <p className='p_description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue tristique, fringilla massa vel, viverra lectus. Sed et metus semper libero faucibus cursus. Sed eu egestas velit. Nam tincidunt, ex aliquet rutrum euismod, lacus quam scelerisque nunc, sit amet dapibus ipsum dolor sed metus.</p>
            </div>
            <div className='p_list'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
};

export default Projects;
