import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <UserPageTemplate>
    <Card cardType="note"> </Card>
    <Card cardType="note"> </Card>
    <Card cardType="note"> </Card>
    <Card cardType="note"> </Card>
    <Card cardType="note"> </Card>
  </UserPageTemplate>
);

export default Notes;
