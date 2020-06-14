import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Wrapper, Header, Button, Content, SectionTitle } from '../components';
import Form from '../components/Form/Form';

import config from '../../config/SiteConfig';

export default () => {
  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
        <SectionTitle uppercase={true}>Contact</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          <p>Super cool intro text to get people contacting me!</p>
          <Form />
        </Content>
      </Wrapper>
    </Layout>
  );
};
