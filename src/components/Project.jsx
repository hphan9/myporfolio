import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/reactivities.png";
import projImg2 from "../assets/img/fragment.jpg";

export const Project = () => {
    const projects = [
        {
            title: "Reactivities",
            description: "An event-creation and booking web-app using .NET Core for back-end and React TypeScript for front-end",
            imgUrl: projImg1
        },
        {
            title: "Fragments",
            description: "A cloud-based microservice for a fictional company. The application architecture uses AWS S3, Amazon Cognito, Elastic Beanstalk, AWS Dynamo DB.",
            imgUrl: projImg2
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Volunteer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Open Source</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index}
                                                    {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Second">Second</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}