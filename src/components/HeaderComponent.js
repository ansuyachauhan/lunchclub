import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label
} from "reactstrap";

const links = [
    { href: "/home", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/membership", text: "Membership" },
    { href: "/events", text: "Events" },
    { href: "/gallery", text: "Gallery" },
    { href: "#recipes", text: "Recipes" },
    { href: "/contact", text: "Contact" },
    
  ];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isModalOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogin(event) {
    alert(` Invalid Username/Password`);
    this.toggleModal();
    event.preventDefault();
}

  render() {
    return (
      <div>
          <>
        <Navbar className="" color="dark" dark sticky="top" expand="md">
          <NavbarBrand href="/"><h1>LunchClub</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto nav-menu" color="white" >
              {links.map(createNavItem)}
              <Button className="btn btn-warning" onClick={this.toggleModal}>Login</Button>{' '}
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><h1>Login</h1></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={input => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                            innerRef={input => this.remember = input} />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                    </ModalBody>
                </Modal>
            </>
      </div>
    );
  }
}

export default Header;