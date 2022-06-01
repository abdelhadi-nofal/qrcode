import './App.css';
import React, { useState, useContext, createContext } from 'react'
import { Container, Tabs, Tab, Row, Col, Form, Button } from 'react-bootstrap'
import Url from './components/Url'
import Email from './components/Email'
import Sms from './components/Sms'
import Text from './components/Text'
import Vcard from './components/Vcard'
import Wifi from './components/Wifi'
import DownloadFile from './components/DownloadFile'
import UploadFile from './components/UploadFile'
// import './bootstrap.min(1).css';
import './bootstrap.min(2).css';
export const FinalContext = createContext()




function App() {


  const [finalResult, setFinalResult] = useState("");







  return (
    <div className="App">
      <h1>Qr Code</h1>
      <Container>
        <Row >
          <Col md={8} >
            <FinalContext.Provider value={{ finalResult, setFinalResult }}>
              <Container style={{ minHeight: '607px', border: '1px solid white', padding: '15px', borderRadius: '5px' }}>
                <Tabs defaultActiveKey="url" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="url" title="URL">
                    <Url finalResult={finalResult} />
                  </Tab>
                  <Tab eventKey="profile" title="EMAIL">
                    <Email />
                  </Tab>
                  <Tab eventKey="vcard" title="VCARD">
                    <Vcard />
                  </Tab>
                  <Tab eventKey="wifi" title="WIFI">
                    <Wifi />
                  </Tab>
                  <Tab eventKey="sms" title="SMS">
                    <Sms />
                  </Tab>
                  <Tab eventKey="text" title="TEXT">
                    <Text />
                  </Tab>
                  <Tab eventKey="download" title="DOWNLOAD FILE">
                    <DownloadFile />
                  </Tab>
                  <Tab eventKey="upload" title="UPLOAD FILE">
                    <UploadFile />
                  </Tab>
                </Tabs>
              </Container>
            </FinalContext.Provider>
          </Col>
          <Col md={4}>
            <Container style={{ minHeight: '607px', border: '1px solid white', padding: '15px', borderRadius: '5px' }}>
              <Col md='auto' >
                <Row>
                  <Form.Label style={{ textAlign: 'start' }} htmlFor="exampleColorInput">Color</Form.Label>
                  <Form.Control
                    type="color"
                    style={{ width: '100%' }}
                    title="Choose your color"
                  />
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Form.Label style={{ textAlign: 'start' }} htmlFor="exampleColorInput">Logo</Form.Label>

                  <Form.Control

                    type="file"
                    title="Choose your logo"
                  />
                </Row>

                <Row></Row>



              </Col>
              <Col >
                {/* <Row style={{ marginTop: '20px' }}>
                    <Button  >generate_qr</Button>
                </Row> */}
                <Row style={{ marginTop: '20px' }}>
                  {finalResult === "" ? (
                    <div></div>
                  ) : (
                    <img src={`data:image/png;base64, ${finalResult}`} alt={finalResult} />
                  )}
                </Row>

              </Col>
            </Container>

            {/* <Result /> */}

          </Col>
        </Row>
      </Container>






    </div>
  );
}

export default App;
