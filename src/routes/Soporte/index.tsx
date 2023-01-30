import React, { FC } from "react";
import Layout from "components/Layout";
import Header from "components/Header";
import Contact from "components/Contact";

const Soporte: FC = () => (
    <Layout>
        <Header title="Soporte" />
        <Contact />
    </Layout>
)

export default Soporte;