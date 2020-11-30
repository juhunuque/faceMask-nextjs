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
import { client }  from './../prismic-configuration';
import Prismic from 'prismic-javascript'

import "../styles.scss"

interface IIndexProps {
    products: any
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
                <ProductList products={props.products.results} />
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <ContactButton />
            <Footer />
        </div>
    )
}

Index.getInitialProps = async (context) => {
    const req = context.req
    const products = await client(req).query(
        [Prismic.Predicates.at('document.type', 'mask-type')],
        { pageSize : 100 }
    );
    return {
        products
    }
}
export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(Index);
