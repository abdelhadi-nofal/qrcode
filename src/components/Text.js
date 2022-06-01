import React, { useContext, useState } from 'react'
import { Form, Col, Container, Button } from "react-bootstrap";
import { FinalContext } from '../App'
import axios from 'axios'



function Text() {
    const { finalResult, setFinalResult } = useContext(FinalContext)
    const [qrVar, setQrVar] = useState("")

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
            <h2 style={{ textAlign: 'start' }}>Text QR Code
            </h2>
            <Container style={{ display: "flex" }}>
                <Col lg="8">
                    <Form.Control onChange={(e) => {
                        setQrVar(e.target.value)
                    }} rows={10} cols={60} as="textarea" placeholder="Enter your text..." />
                </Col>


                <Button onClick={submitHandler} >generate_qr</Button>



            </Container>
        </div>
    )
}

export default Text