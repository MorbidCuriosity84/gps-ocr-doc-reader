import React, {Component} from 'react';
import logo from "../pilot-supplies.png";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    {/* Loads Logo found in App.css , change className to App-logo to make it spin*/}
                    <img src={logo} className="logo" alt="logo" />
                    <h1 className="App-title">Release form OCR</h1>
                </header>
            </div>
        );
    }
}

export default Header;