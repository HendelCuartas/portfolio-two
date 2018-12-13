import React from'react';
import '../styles/components/Contact.styl';

class Contact extends React.Component {
    render() {
        const { refComponent } = this.props;
        return (
            <div className="Contact" ref={refComponent}>
                <h1>Contact</h1>
            </div>
        );
    }
}

export default Contact;