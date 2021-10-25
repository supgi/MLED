import React from 'react'; // react

// components
import {Container, Row, Col} from 'react-bootstrap'
import Layout from './../src/components/Layout';

import Image from 'next/image' // next components

export default function Sobre () {

  return (

    <Layout title="Sobre | MLED">
      <Container fluid style={{margin: "45px 0px"}}>
        <section>

          <Row>
            <Col sm={4} style={{padding: "3px 12px"}}>
              <img src="/MLED - Sobre.png" alt="Sobre MLED" style={{width:"100%", maxWidth: "380px", padding: "0px"}} />
            </Col>

            <Col style={{padding: "10px 15px"}}>
              <h2><b>Sobre a MLED</b></h2>
              <p> Empresa focada em fornecer produtos com tecnologia LED, agregando valor aos profissionais do mercado de iluminação, eletricistas e clientes finais. Trabalhamos com produtos de alta qualidade com garantia, consultores experientes e equipe treinada. Profissionais comprometidos com o sucesso de nossos clientes.</p>
              <h2><b>Nossos Valores</b></h2>
              <p>Simplicidade, segurança nos negócios, qualidade, produtividade, empresa feliz, gestão participativa, ética, respeito pelo ser humano, transparência. Desenvolver soluções de comunicação e integração que potencializem e valorizem as necessidades de cada cliente.<br />- Missão: Prestar serviços de qualidade, aliados a produtos de alta tecnologia, sempre em parceria com grandes empresas, tendo como foco proporcionar aos nossos clientes benefícios e soluções.<br />- Satisfação: Acreditamos que o cliente é nosso melhor marketing, por esse motivo, a sua satisfação é ponto fundamental para a M.LED.<br />- Qualidade: Temos o firme compromisso com a qualidade dos serviços e produtos, garantindo a satisfação total dos nossos clientes. Objetivando o crescimento e acompanhando as constantes evoluções tecnológicas, em parceria com os melhores fabricantes e importadores. </p>
            </Col>
          </Row>

        </section>
      </Container>
    </Layout>

  )

}
