import React from 'react';
import '../styles/views/FullPage.styl';
import HendelLogo from '../components/HendelLogo';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SideBar from '../components/SideBar';
import '../vendors/ScrollToPlugin';

class FullPage extends React.Component {
    fullPageRef = React.createRef();
    homeRef = React.createRef();
    projectsRef = React.createRef();
    contactRef = React.createRef();
    bulletClicked(i) {
        console.log('entra', i)
        switch(i) {
            case 0:
                this.animateScroll(this.homeRef.current.offsetTop)
                break;
            case 1:
                this.animateScroll(this.projectsRef.current.offsetTop)
                break;
            case 2:
                this.animateScroll(this.contactRef.current.offsetTop)
                break;
        }
    }
    animateScroll(topY) {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: topY,
                autoKill: true
            },
            ease: Power2.easeOut
        })
    }
    render() {
        return (
            <div className="FullPage" ref={this.fullPageRef}>
                <Home refComponent={this.homeRef}></Home>
                <Projects refComponent={this.projectsRef}></Projects>
                <Contact refComponent={this.contactRef}></Contact>
                <HendelLogo logoClicked={() => this.animateScroll(0)}></HendelLogo>
                <SideBar bulletClicked={i => this.bulletClicked(i)}></SideBar>
            </div>
        );
    }
}

export default FullPage;