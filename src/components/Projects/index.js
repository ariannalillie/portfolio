import ProjectCard from '../ProjectCard';
import './Projects.css';
import {projects} from '../../data/projects.js';

const Projects = () => {
    return (
        <div className='p'>
            <div className='p_text'>
                <h1 className='p_title'>Arianna's Projects</h1>
                <p className='p_description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue tristique, fringilla massa vel, viverra lectus. Sed et metus semper libero faucibus cursus. Sed eu egestas velit. Nam tincidunt, ex aliquet rutrum euismod, lacus quam scelerisque nunc, sit amet dapibus ipsum dolor sed metus.</p>
            </div>
            <div className='p_list'>
                {projects.map((project) => {
                    return (
                        <ProjectCard
                        key={project.id}
                        website={project.website}
                        image={project.image}
                        />
                    )
                })}

            </div>
        </div>
    )
};

export default Projects;
