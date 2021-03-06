// react
import React from 'react';

// components
import {Container, Row, Col} from 'react-bootstrap'
import Layout from './../src/components/Layout';

// next components
import Image from 'next/image'

export default function Home () {

  return (

    <Layout title="Sobre | MLED">
      <Container fluid style={{margin: "45px 0px"}}>

        <Row>
          <Col>
            <img src="/MLED - Sobre.png" alt="Sobre MLED" style={{width:"100%"}} />
          </Col>

          <Col>
            <h1>Sobre a MLED</h1>
            <p> Empresa focada em fornecer produtos com tecnologia LED, agregando valor aos profissionais do mercado de iluminação, eletricistas e clientes finais. Trabalhamos com produtos de alta qualidade com garantia, consultores experientes e equipe treinada. Profissionais comprometidos com o sucesso de nossos clientes.</p>
            <h2>Nossos Valores</h2>
            <p>Simplicidade, Segurança nos Negócios, Qualidade, Produtividade, Empresa Feliz, Gestão Participativa, Ética, Respeito pelo ser Humano, Transparência. Desenvolver soluções de comunicação e integração que potencializem e valorizem as necessidades de cada cliente.<br />- Missão: Prestar serviços de qualidade, aliados a produtos de alta tecnologia, sempre em parceria com grandes empresas, tendo como foco proporcionar aos nossos clientes benefícios e soluções.<br />- Satisfação: Acreditamos que o cliente é nosso melhor marketing, por esse motivo, a sua satisfação é ponto fundamental para a M.LED.<br />- Qualidade: Temos o firme compromisso com a qualidade dos serviços e produtos, garantindo a satisfação total dos nossos clientes. Objetivando o crescimento e acompanhando as constantes evoluções tecnológicas, em parceria com os melhores fabricantes e importadores. </p>
          </Col>
        </Row>

      </Container>
    </Layout>

  )

}
