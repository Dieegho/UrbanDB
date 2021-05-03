import React from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import Card from 'react-bootstrap/Card';

const MyFooter = () => {
  return(
    <div>
      <Card className="bg-dark text-white">
          <Card.Title>Footer</Card.Title>
          <Card.Text>
            Este es el pulento Footer con nuestra información
          </Card.Text>
      </Card>

    </div>
  );
};

export default MyFooter;
