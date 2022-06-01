import React, { useState, useContext } from 'react'
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import axios from 'axios'
import { FinalContext } from '../App'




function Url() {
    const { finalResult, setFinalResult } = useContext(FinalContext)



    const [qrVar, setQrVar] = useState("")

    // console.log(finVar);

    const submitHandler = (e) => {
        e.preventDefault();


        async function fetchDataUrl() {
            const { data } = await axios.post(`/api/generate_qr/`, {
                name: qrVar,
            });
            setFinalResult(data);

            // console.log(data);
        }
        fetchDataUrl();
    };


    return (
        <div>

            <h2 style={{ textAlign: 'start' }}>Url QR Code
            </h2>
            <Container style={{ display: "flex" }}>
                <Col lg="8">

                    <Form.Control onChange={(e) => {
                        setQrVar(e.target.value)
                    }} type='text' placeholder="Enter your website..." />
                </Col>

                {/* <Row style={{ marginTop: '20px' }}> */}
                <Button onClick={submitHandler} >generate_qr</Button>
                {/* </Row> */}


            </Container>
        </div>
    )
}

export default Url