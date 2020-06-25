import React from "react";
import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import ContactButton from '../components/ContactButton';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head'
import Router from "next/router";
import withGA from "next-ga";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles.scss"

interface IIndexProps {
    products: IProduct[]
}

const Index = (props: IIndexProps) => {
    return (
        <div className="app">
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    title: 'Entre hilos & agujas',
                    images: [
                        {
                            url: 'https://entrehilosyagujas.com/img/products/faceMask_10.jpg',
                            width: 800,
                            height: 600,
                        },
                    ],
                    locale: 'es_ES',
                    url: 'https://mascarillas.entrehilosyagujas.com/',
                    site_name: 'Entre hilos y agujas',
                    description: 'Una exclusiva colección de mascarillas que siguen todos los lineamientos dados por el Ministerio de Salud.'
                }}
            />
            <Head>
                <title>Entre hilos & agujas</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Entre hilos & agujas" key="title" />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Header />
            <main className="main">
                <div className="promotional-message">
                    <h3>Entre Hilos & Agujas te trae</h3>
                    <h2>Mascarillas</h2>
                    <p>Una <strong>exclusiva colección de mascarillas</strong> que siguen todos los lineamientos dados por el Ministerio de Salud.</p>
                </div>
                <ProductList products={props.products} />
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <ContactButton />
            <Footer />
        </div>
    )
}

Index.getInitialProps = async () => {
    return {
        products: [
            {id: "faceMask_1", name: "El diseño que usted elija", price: 1500, image: "/products/faceMask_10.jpg", description: "Si tiene una idea, podemos ayudarle a plasmarla en una mascarilla."} as IProduct,
            {id: "faceMask_3", name: "Para los más pequeños", price: 1500, image: "/products/faceMask_3.jpeg",description: "Diseños especiales para los más chicos del hogar."} as IProduct,
            {id: "faceMask_5", name: "Para su negocio", price: 2500, image: "/products/faceMask_6.jpeg",description: "Confeccionamos a su gusto. Si necesita mascarillas con el logo del negocio, podemos ayudarle."} as IProduct,
            {id: "faceMask_4", name: "Diferentes estilos", price: 2000, image: "/products/faceMask_4.jpeg",description: "Diseños sencillos y 3D para mejorar el confort, porque todos merecen estar protegidos y cómodos."} as IProduct,
        ]
    }
}
export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(Index);
