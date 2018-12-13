import React from 'react';
import '../styles/components/SideBar.styl';

class SideBar extends React.Component {
    createBullets(number) {
        let bullets = [];
        for (let i = 0; i < number; i++) {
            bullets.push(
                <div
                    className="SideBar-bullet"
                    onClick={ () => { this.props.bulletClicked(i) } }
                    key={i}
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