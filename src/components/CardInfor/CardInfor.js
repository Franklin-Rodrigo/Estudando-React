import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';

export default function CardInfor() {
  return (
    <Row className=" text-center" >
    <Card className="text-center">
    <Card.Header className="border">Mais Informações</Card.Header>
    <ListGroup variant="flush" className="text-center">
      <ListGroup.Item action className="hover">
        Cursos
      </ListGroup.Item>
      <ListGroup.Item action className="hover">
        Quem somos 
      </ListGroup.Item>
      <ListGroup.Item action className="hover">
        Como funciona
      </ListGroup.Item>
      <ListGroup.Item action className="hover">
        Politica de privacidade
      </ListGroup.Item>
      <ListGroup.Item action className="hover">
        termo de Compromisso
      </ListGroup.Item>
      <ListGroup.Item action className="hover">
        F.A.Q
      </ListGroup.Item>
      <ListGroup.Item action className="hover">
        Confiabilidade
      </ListGroup.Item>
      <ListGroup.Item action className="hover">
        Seu certificado em 2 passos
      </ListGroup.Item>
    </ListGroup>
  </Card>
  </Row>
  );
}