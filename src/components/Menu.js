import React from 'react';
import './headerstyle.scss'
class Menu extends React.Component {
    render() {
        return (
            <div className="bread-crumb sm-4 md-2">
                <a href="#/" className="item active">
                    <span className="arrow"></span>
                    <span className="hide-mobile">Review & Schedule</span>
                    <span className="show-mobile">Review & Schedule</span>
                </a>
                <a href="#/" className="item">
                    <span className="arrow"></span>
                    <span className="hide-mobile">Select Address</span>
                    <span className="show-mobile">Select Address</span>
                </a>
                <a href="#/" className="item">
                    <span className="arrow"></span>
                    <span className="hide-mobile">Check Quote</span>
                    <span className="show-mobile">Check Quote</span>
                </a>
                <a href="#/" className="item">
                    <span className="hide-mobile">Order placed</span>
                    <span className="show-mobile">Order placed</span>
                </a>
            </div>
        )
    }
}
export default Menu;