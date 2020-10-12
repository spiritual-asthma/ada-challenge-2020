import React from 'react';
import NodeFetcher from './NodeFetcher';
import DetailView from './DetailView';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">
        <div>
			 <Row>
			    <Col xs={6} md={4}>
			          <NodeFetcher />
			    </Col>
			    <Col xs={12} md={8}>
				      <DetailView />
			    </Col>
			  </Row>
        </div>
    </div>
  );
}

export default App;
