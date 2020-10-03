import React from 'react';
// import { ThemeConsumer } from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = () => (
  <UserPageTemplate pageType="article">
    <Card cardType="article"> </Card>
    <Card cardType="article"> </Card>
    <Card cardType="article"> </Card>
    <Card cardType="article"> </Card>
    <Card cardType="article"> </Card>
  </UserPageTemplate>
);

export default Articles;
