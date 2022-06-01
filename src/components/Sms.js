import React from 'react'
import { Form, Col, Row } from "react-bootstrap";


function Sms() {
    return (
        <div>
            <h2 style={{ textAlign: 'start' }}>SMS QR Code
            </h2>
            <Row style={{ display: "flex" }}>

                <Form

                //  onSubmit={submitHandlerContact}
                >
                    <Form.Group controlId="name" className="py-3" >

                        <Row className="py-1">
                            <Col md={2}>
                                <p>Number:</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Your phone number"
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

export default Sms