import { Container, Col,  } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
                <Col sm={6}>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Github"/></a>
                <a href="#"><img src={navIcon2} alt="Linkedin"/></a>
                <a href="#"><img src={navIcon3} alt="Blog"/></a>
              </div>
                </Col>
            </Container>
        </footer>
    )
}