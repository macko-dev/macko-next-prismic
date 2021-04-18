import { Card, Title, Subtitle } from '../../styles/home/jobs/styles';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';

function JobCard({ job }): JSX.Element {
  return (
    <Card>
      <img src={job.data.cover.url} alt="Item" />
      <Card.Box>
        <h3 className="pb-3">{RichText.asText(job.data.page_title)}</h3>
        <p>{RichText.asText(job.data.description)}</p>
        <ul>
          {job.data.required?.map((item, index) => (
            <li key={index}>
              <img src="/assets/check.svg" alt="Check" />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <Button
          link={job.data.cta_link.url}
          backgroundColor={theme.color.primary[2]}
          backgroundHoverColor={theme.color.primary[3]}
          size="sm"
          variant="normal"
          color={theme.color.white}
          classNames="mr-3 mb-lg-2"
        >
          Candidatar
        </Button>
        <Button
          link={'/'}
          backgroundColor={theme.color.primary[4]}
          backgroundHoverColor={theme.color.primary[4]}
          size="sm"
          variant="ghost"
          color={theme.color.primary[4]}
        >
          Leia Mais
        </Button>
      </Card.Box>
    </Card>
  );
}

export default function Jobs({ list }): JSX.Element {
  return (
    <Container className="pb-5">
      <Title>Vagas em destaque</Title>
      <Subtitle>
        Colaboramos para o sucesso da empresa e de profissionais, através da
        compreensão dos objetivos e valores
      </Subtitle>
      <hr className="pr-4 vertical-line mx-auto" />
      <Row className="d-flex align-content-stretch flex-wrap  justify-content-center">
        {list.map((job) => (
          <Col key={job.uid} lg={5}>
            <JobCard job={job} />
          </Col>
        ))}
        <Button
          classNames="mt-5"
          link={'/vagas'}
          backgroundColor={theme.color.primary[2]}
          backgroundHoverColor={theme.color.primary[3]}
        >
          Mais Vagas
        </Button>
      </Row>
    </Container>
  );
}
