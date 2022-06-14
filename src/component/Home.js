import React, {Component} from "react";
import {Button, Card, CardGroup, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";
import logo from "../logo.svg";
import { MdSearch, MdChat, MdLocationOn } from "react-icons/md";
import '../assets/Home.css';
import { FcOk } from "react-icons/fc";
import { FaGraduationCap, FaCheckCircle, FaStar, FaRegStar } from "react-icons/fa";
import user1 from '../user1.jpg';
import user2 from '../user2.jpg';
import user3 from '../user3.jpg';
import livre from '../livres.jpg';
import Steps from "rc-steps";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {subject: ''};
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={3} className="side">

                        <img
                            src={logo}
                            width={120}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />

                            <Steps direction="vertical" current={1} >
                                <Steps.Step title="Votre demande" icon={<FcOk />}/>
                                <Steps.Step title="Nos propositions"/>
                                <Steps.Step title="Paiement"/>
                            </Steps>

                        <img
                            src={livre}
                            width={300}
                            className="d-inline-block picture"
                            alt="React Bootstrap logo"
                        />

                    </Col>
                    <Col sm={8} className="ms-5">
                        <p className="title my-3"> En quelle matière avez-vous besoin d'aide ?</p>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder={"SVT, piano, anglais, maths ..."}
                                aria-label="matière"
                                aria-describedby="search"
                                onChange={event => this.setState({subject: event.target.value})}
                            />
                            <Button variant="light" type={"submit"} >
                                <MdSearch />
                            </Button>
                        </InputGroup>



                        <p className="title">Les Teach'rs d'{this.state.subject.toLowerCase()} qui pourraient vous correspondre</p>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={user1} />
                                <Card.Body>
                                    <Card.Title>Maria Dardell</Card.Title>
                                    <FaStar /><FaStar /><FaStar /><FaStar />< FaRegStar />
                                    <Card.Subtitle className="m-2 text-muted">20h données</Card.Subtitle>
                                    <ListGroup className="mx-4">
                                        <ListGroup.Item> < FaGraduationCap />  HEC, 1ère année</ListGroup.Item>
                                        <ListGroup.Item><MdChat />  Bilingue</ListGroup.Item>
                                        <ListGroup.Item><FaCheckCircle />  Diplôme vérifié</ListGroup.Item>
                                        <ListGroup.Item><MdLocationOn />  Paris</ListGroup.Item>
                                    </ListGroup>
                                    <div className="fw-bold text-start ms-2">Description</div>
                                    <Card.Text className="m-2 text-muted">
                                        Je vous remercie de cette opportunité.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                                <Button>Choisir</Button>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={user2} />
                                <Card.Body>
                                    <Card.Title>Maria Dardell</Card.Title>
                                    <FaStar /><FaStar /><FaStar /><FaStar />< FaRegStar />
                                    <Card.Subtitle className="m-2 text-muted">20h données</Card.Subtitle>
                                    <ListGroup className="mx-4">
                                        <ListGroup.Item> < FaGraduationCap />  HEC, 1ère année</ListGroup.Item>
                                        <ListGroup.Item><MdChat />  Bilingue</ListGroup.Item>
                                        <ListGroup.Item><FaCheckCircle />  Diplôme vérifié</ListGroup.Item>
                                        <ListGroup.Item><MdLocationOn />  Paris</ListGroup.Item>
                                    </ListGroup>
                                    <div className="fw-bold text-start ms-2">Description</div>
                                    <Card.Text className="m-2 text-muted">
                                        Je vous remercie de cette opportunité.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                                <Button>Choisir</Button>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={user3} />
                                <Card.Body>
                                    <Card.Title>Maria Dardell</Card.Title>
                                    <FaStar /><FaStar /><FaStar /><FaStar />< FaRegStar />
                                    <Card.Subtitle className="m-2 text-muted">20h données</Card.Subtitle>
                                    <ListGroup className="mx-4">
                                        <ListGroup.Item> < FaGraduationCap />  HEC, 1ère année</ListGroup.Item>
                                        <ListGroup.Item><MdChat />  Bilingue</ListGroup.Item>
                                        <ListGroup.Item><FaCheckCircle />  Diplôme vérifié</ListGroup.Item>
                                        <ListGroup.Item><MdLocationOn />  Paris</ListGroup.Item>
                                    </ListGroup>
                                    <div className="fw-bold text-start ms-2">Description</div>
                                    <Card.Text className="m-2 text-muted">
                                        Je vous remercie de cette opportunité.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Card.Text>
                                </Card.Body>
                                <Button>Choisir</Button>
                            </Card>
                        </CardGroup>

                        <Button variant="outline-secondary" className="prec" disabled='true'>Precedent</Button>
                        <Button className="tuileNav suiv">Suivant</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home
