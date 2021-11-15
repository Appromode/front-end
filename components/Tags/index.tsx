import React, { FC, useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useFilter from '../../utils/useFilter';
import Tag from '../Tag';

const Tags:FC = () => {
  const [input, setInput] = useState(undefined);

  const data = useMemo(() => [
    'TypeScript',
    'HTML',
    'JavaScript',
  ], []);

  const results = useFilter(data, input);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value.toLowerCase());
  };

  return (
    <Container>
      <Row>
        <Col>
          {
            results.length
              ? results.map((tag) => (
                <Tag tagName={tag} key={tag} />
              ))
              : <div>Find Tag</div>
          }
          <input type="text" onChange={onChange} />
        </Col>
      </Row>
    </Container>
  );
};

export default Tags;
