import React from 'react'; // react

// components
import {Container, Row, Col} from 'react-bootstrap'
import Layout from './../src/components/Layout';
import DBoard from './../src/components/DBoard';

export default function Outros () {

  return (

    <Layout title="Outros | MLED">

      <section>

        <DBoard img="/MLED - Catalogo.webp" name="Catalogo.pdf" link="/Download/Catalogo V2.pdf" title="Nossos Produtos" caption="Catálogo com as principais informações sobre os nossos produtos." />

      </section>

      <div style={{minHeight: "350px"}}></div>

    </Layout>

  )

}
