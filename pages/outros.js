// react
import React from 'react';

// components
import {Container, Row, Col} from 'react-bootstrap'
import Layout from './../src/components/Layout';
import DBoard from './../src/components/DBoard';

export default function Outros () {

  return (

    <Layout title="Outros | MLED">

      <DBoard img="/MLED - Catalogo.png" name="Catalogo.pdf" link="/Download/Catalogo V2.pdf" title="Produtos" caption="Catálogo com as principais informações sobre os nossos produtos."></DBoard>

      <h1 style={{minHeight:"600px"}}>_</h1>
    </Layout>

  )

}
