import React from 'react';
import '../styles/components/SideBar.styl';

class SideBar extends React.Component {
    labelRef = React.createRef();
    state = {
        active: 0,
    }
    handleMouseEnter(i) {
        const el = document.getElementById(`SideBar-bullet${i}`);
        const positions = el.getBoundingClientRect();
    }
    handleMouseClick(i) {
        this.setState({ active: i });
    }
    componentDidMount() {
        const el = document.getElementById(`SideBar-bullet0`);
        el.classList.add('SideBar-hover');
    }
    componentDidUpdate() {
        const bullets = document.querySelectorAll('.SideBar-bullet');
        for (let i=0; i<bullets.length; i++) bullets[i].classList.remove('SideBar-hover');
        const el = document.getElementById(`SideBar-bullet${this.state.active}`);
        el.classList.add('SideBar-hover');
    }
    createBullets(number) {
        let bullets = [];
        for (let i = 0; i < number; i++) {
            bullets.push(
                <div
                    className="SideBar-bullet"
                    id={`SideBar-bullet${i}`}
                    key={i}
                    onClick={ () => { this.props.bulletClicked(i); this.handleMouseClick(i) } }
                    //onMouseEnter={ () => { this.handleMouseEnter(i) } }
                    //onMouseLeave={ () => { this.handleMouseLeave(i) } }
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