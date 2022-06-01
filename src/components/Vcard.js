import React from 'react'
import { Button, Form, Row, Col, Container } from "react-bootstrap";

function Vcard() {
    return (
        <div>
            <h2 style={{ textAlign: 'start' }}>vCard QR Code</h2>
            <Row style={{ display: "flex" }}>

                <Form

                //  onSubmit={submitHandlerContact}
                >
                    <Form.Group controlId="name" className="py-3" >
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Your Name:</p>
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                // value={qrFirstName}
                                // onChange={(e) => setqrFirstName(e.target.value)}
                                ></Form.Control>
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                // value={qrLastName}
                                // onChange={(e) => setqrLastName(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Conatct: </p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="tel"
                                    placeholder="Mobile"
                                // value={qrTelMobile}
                                // onChange={(e) => setqrTelMobile(e.target.value)}
                                ></Form.Control>

                                <Row className="py-1">
                                    <Col>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Phone"
                                        // value={qrTelPhone}
                                        // onChange={(e) => setqrTelPhone(e.target.value)}
                                        ></Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Fax"
                                        // value={qrTelFax}
                                        // onChange={(e) => setqrTelFax(e.target.value)}
                                        ></Form.Control>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Email:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="email"
                                    placeholder="your@email.com"
                                // value={qrEmail}
                                // onChange={(e) => setqrEmail(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Company:</p>
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                    type="text"
                                    placeholder="Comapny"
                                // value={qrCom}
                                // onChange={(e) => setqrCom(e.target.value)}
                                ></Form.Control>
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Job"
                                // value={qrJob}
                                // onChange={(e) => setqrJob(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Street:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                // value={qrStreet}
                                // onChange={(e) => setqrStreet(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>City:</p>
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                // value={qrCity}
                                // onChange={(e) => setQqrCity(e.target.value)}
                                ></Form.Control>
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                    type="tel"
                                    placeholder="ZIP"
                                // value={qrZip}
                                // onChange={(e) => setqrZip(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>State:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                // value={qrState}
                                // onChange={(e) => setqrState(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Country:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                // value={qrCountry}
                                // onChange={(e) => setqrCountry(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Website:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="www.your-website.com"
                                // value={qrWeb}
                                // onChange={(e) => setqrWeb(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>

                </Form>


                {/* <Col md={2}>
                    {qrContact === "" ? (
                        <div></div>
                    ) : (
                        <img src={`data:image/png;base64, ${qrContact}`} alt={qrContact} />
                    )}
                </Col> */}
            </Row>
        </div>
    )
}

export default Vcard