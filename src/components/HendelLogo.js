import React from 'react';
import '../styles/components/HendelLogo.styl';

class HendelLogo extends React.Component {
    render() {
        return (
            <p className="HendelLogo" onClick={this.props.logoClicked}>HÉNDEL</p>
        );
    }
}

export default HendelLogo;