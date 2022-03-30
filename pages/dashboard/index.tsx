import React, { FC } from 'react';
import Link from 'next/link';
import { Container, Row } from 'react-bootstrap';
import InvitesTable from '../../components/InvitesTable';
import UserGroup from '../../components/UserGroup';
import withAuthorization from '../../utils/withAuthorization';
import UserTagsForm from '../../components/UserTagsForm';
import UserTags from '../../components/UserTags';

const Dashboard:FC = () => (
  <div className="divide-gray-400 divide">
    <div className="py-20 bg-bottle text-white">
      <Container>
        <Row>
          <h1 className="text-3xl">Dashboard</h1>
        </Row>
      </Container>
    </div>
    <div className="py-10">
      <Container>
        <Link href="/group-registration">
          <button
            className="bg-prussian p-3 bg-prussian-blue text-white rounded-md font-medium text-center border-1 mr-3"
            type="button"
          >
            Register Group
          </button>
        </Link>
        <Link href="/users">
          <button
            className="bg-prussian p-3 bg-prussian-blue text-white rounded-md font-medium text-center border-1"
            type="button"
          >
            Find Users
          </button>
        </Link>
      </Container>
    </div>
    <div className="py-10">
      <Container>
        <UserGroup />
      </Container>
    </div>
    <div className="py-10">
      <Container>
        <InvitesTable />
      </Container>
    </div>
    <div className="py-10">
      <Container>
        <UserTags />
        <UserTagsForm />
      </Container>
    </div>
  </div>
);

export default withAuthorization(Dashboard);
