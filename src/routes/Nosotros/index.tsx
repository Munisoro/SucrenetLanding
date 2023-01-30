import React from "react";
import About from "../../components/About";
import Header from "../../components/Header";
import Layout from "components/Layout";

function Nosotros() {
    return (
        <Layout>
            <Header title='Nosotros' />
            <About />
        </Layout>
    );
}

export default Nosotros;