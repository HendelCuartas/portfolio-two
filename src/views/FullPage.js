import React from 'react';
import '../styles/views/FullPage.styl';
import HendelLogo from '../components/HendelLogo';
import Home from '../components/Home';

class FullPage extends React.Component {
    render() {
        return (
            <div className="FullPage">
                <Home></Home>
                <HendelLogo></HendelLogo>
            </div>
        );
    }
}

export default FullPage;