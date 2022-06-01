import React from 'react'
import { Button, Form, Row, Col, Container } from "react-bootstrap";


function Email() {
    return (
        <div>
            <h2 style={{ textAlign: 'start' }}>Email QR Code
            </h2>
            <Row style={{ display: "flex" }}>

                <Form

                //  onSubmit={submitHandlerContact}
                >
                    <Form.Group controlId="name" className="py-3" >

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
                                <p>Subject:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter email subject"
                                // value={qrEmail}
                                // onChange={(e) => setqrEmail(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Message:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control rows={5} cols={60} as="textarea" placeholder="Enter your text..." />

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

export default Email