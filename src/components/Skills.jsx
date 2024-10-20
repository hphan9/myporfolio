import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter50 from "../assets/img/meter50.svg";
import meter80 from "../assets/img/meter80.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import vs from "../assets/img/Visual-Studio-logo.png";
import colorSharp from "../assets/img/color-sharp.png";
import github from "../assets/img/GitHub.png";
import jira from "../assets/img/Jira.png";
import vsCode from "../assets/img/vscode.png";
export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> Description</p>
                            <Carousel responsive={responsive} infinite={true}  className="skill-slider">
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>C# .Net</h5>
                                </div>
                                <div className="item">
                                    <img src={meter50} alt="Image"/>
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>AWS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>SQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
};