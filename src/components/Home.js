import React from 'react';
import '../styles/components/Home.styl';

class Home extends React.Component {
    render() {
        const { refComponent } = this.props;
        return (
            <div className="Home" ref={refComponent}>
                <div className="Home-container">
                    <h1 className="Home-title">Creative Developer</h1>
                    <p className="Home-subtitle">
                        Hi, I’m
                        <span className="Home-subtitleBold"> Héndel Cuartas</span>
                        , an Interactive Media Designer and Developer based in
                        <span className="Home-subtitleBold"> Mexico City.</span>
                        {"\n"} Currently working as a Front End Developer at
                        <span className="Home-subtitleBold"> Foo Studio </span>
                        , a creative agency.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;