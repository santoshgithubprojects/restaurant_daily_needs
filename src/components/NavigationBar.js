import React from "react";
import {connect} from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../src/index.css';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loginText: "Sign In"
        };
      }

    render() {

        return (
            <div>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">PROVERY</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/login">
                                {this.state.loginText}
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

NavigationBar.propTypes = {
    loginText:PropTypes.string
};

function mapStateToProps (state) {
    return {
      loginText: state.loginText
    };
  };

  export default connect(mapStateToProps) (NavigationBar);