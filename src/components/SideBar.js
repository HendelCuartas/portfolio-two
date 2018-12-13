import React from 'react';
import '../styles/components/SideBar.styl';

class SideBar extends React.Component {
    labelRef = React.createRef();
    handleMouseEnter(i) {
        const el = document.getElementById(`SideBar-bullet${i}`);
        const positions = el.getBoundingClientRect();
    }
    handleMouseLeave(i) {
    }
    createBullets(number) {
        let bullets = [];
        for (let i = 0; i < number; i++) {
            bullets.push(
                <div
                    className="SideBar-bullet"
                    id={`SideBar-bullet${i}`}
                    key={i}
                    onClick={ () => { this.props.bulletClicked(i) } }
                    onMouseEnter={ () => { this.handleMouseEnter(i) } }
                    onMouseLeave={ () => { this.handleMouseLeave(i) } }
                ></div>
            )
        }
        return bullets;
    }
    render() {
        return (
            <div className="SideBar">
                <div className="SideBar-container">
                    { this.createBullets(3) }
                </div>
            </div>
        );
    }
}

export default SideBar;