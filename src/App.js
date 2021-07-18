import { Row, Col } from 'antd'
import Header from './components/Header'
import Table from './components/Table'

function App() {
  return (
    <div>
     <Header />
     <Row>
       <Col xs={24} md={{ span: 12, offset: 6}}>
        <Table />
       </Col>
     </Row>
     
    </div>
  );
}

export default App;
