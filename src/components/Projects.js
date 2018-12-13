import React from'react';
import '../styles/components/Projects.styl';

class Projects extends React.Component {
    render() {
        const { refComponent } = this.props;
        return (
            <div className="Projects" ref={refComponent}>
                <h1>Projects</h1>
            </div>
        );
    }
}

export default Projects;