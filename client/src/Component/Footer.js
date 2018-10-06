import React, {Component} from 'react';
import {Container, Footer } from 'mdbreact';

class FooterPage extends Component {
    render(){
        return(
            <Footer  color="stylish-color-dark" className="page-footer font-small pt-0">
                <div style={{pading:50}} className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright:<a href="/"> Big Daddy Supremo Bank </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;