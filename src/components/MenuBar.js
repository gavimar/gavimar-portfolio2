import React from 'react';
import { Fragment } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default class MenuBar extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Fragment>
      <Navbar className = "navbar"  light expand="md" style={{backgroundColor: '#5dbcd2'}}>
        
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="inactive" activeClassName="active"  href="./App" style = {{color:"#FFFFFF"}} activeStyle={{
    fontWeight: "bold",    backgroundColor: 'blue' }}>Home</NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink exact to="/Portfolio" activeClassName="active" tag={RRNavLink} style = {{color:"#FFFFFF"}}>Portfolio</NavLink> */}
             <NavLink className="inactive" activeClassName="active" href="#Portfolio"  style = {{color:"#FFFFFF"}} activeStyle={{
    fontWeight: "bold",    backgroundColor: 'blue' }}>Portfolio</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style = {{color:"#FFFFFF"}}>
                Contact
                </DropdownToggle>
              <DropdownMenu right style={{backgroundColor: '#5dbcd2'}}>
                <DropdownItem style = {{color:"#FFFFFF"}}>
                  Linkedin
                  </DropdownItem>
                <DropdownItem style = {{color:"#FFFFFF"}}>
                  Twitter
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem style = {{color:"#FFFFFF"}}>
                  CV
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </Fragment>
  }
}