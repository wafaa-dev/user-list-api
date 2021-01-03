import React from 'react';
import "./Style.css";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

const UserCard =({ user }) => {
  return (
    <div>
      <Card>
        <CardImg className="photo" 
        src="user.png" alt="profile photo" />
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
           
          <CardText> {user.email} </CardText>
          <CardText>{user.phone} </CardText>
           <CardText> {user.website} </CardText>
        
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
