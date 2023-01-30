import React from "react";
import Header from "components/Header";
import Service from "components/Service";
import Callback from "components/Callback";
import Layout from "components/Layout";

function Servicios() {
    return (
        <Layout>
            <Header title="Planes" />
            <Service />
            <Callback />
        </Layout>
    );
}

export default Servicios;