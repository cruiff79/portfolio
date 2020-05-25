import React from 'react';
import github from '../image/github.png';

class Contact extends React.Component {
    render() {
        return (
            <div className="App-contact" id="contact">
                <h1>Contact</h1>
                <h5>jinyoungpark106@gmail.com</h5>
                <a href="https://github.com/cruiff79"><img src={github} alt="github" /></a>
            </div>
        );
    }
}

export default Contact;
