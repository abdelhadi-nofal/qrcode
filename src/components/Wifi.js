import React from 'react'
import { Form, Col, Row } from "react-bootstrap";



function Wifi() {
    return (
        <div>
            <h2 style={{ textAlign: 'start' }}>WiFi QR Code

            </h2>
            <Row style={{ display: "flex" }}>

                <Form

                //  onSubmit={submitHandlerContact}
                >
                    <Form.Group controlId="name" className="py-3" >

                        <Row className="py-1">
                            <Col md={2}>
                                <p>Network Name
                                </p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="SSID"
                                // value={qrEmail}
                                // onChange={(e) => setqrEmail(e.target.value)}
                                ></Form.Control>
                            </Col>
                            <Col>

                                <Form.Check
                                    type="switch"

                                    label="Hidden"
                                />
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Password
                                    :</p>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                // value={qrEmail}
                                // onChange={(e) => setqrEmail(e.target.value)}
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row className="py-1">
                            <Col md={2}>
                                <p>Encryption</p>


                            </Col>
                            <Col md={4}>

                                <Form.Group>
                                    <input className='mx-1' type="radio" name="age" value="None" />
                                    <label className='mx-1' >None</label>
                                    <input className='mx-1' type="radio" name="age" value="WPA/WPA2" />
                                    <label className='mx-1' >WPA/WPA2</label>
                                    <input className='mx-1' type="radio" name="age" value="WEP" />
                                    <label className='mx-1' >WEP</label>
                                </Form.Group>



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
        </div >
    )
}

export default Wifi