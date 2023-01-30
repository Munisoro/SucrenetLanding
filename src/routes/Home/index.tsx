import React from "react";
import Carousel from "components/Carousel";
import About from 'components/About';
import Layout from "components/Layout";

function Home() {
    return (
        <Layout>
            <Carousel />
            <About />
        </Layout>
    );
}

export default Home;