import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

import "../styles.scss"

interface IIndexProps {
    products: IProduct[]
}

const Index = (props: IIndexProps) => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <img src="/static/aquarium.svg" alt="a" className="background-image" />
                <div className="promotional-message">
                    <h3>Entre Hilos & Agujas te trae</h3>
                    <h2>Mascarillas</h2>
                    <p>Una <strong>exclusiva colección de mascarillas</strong> que siguen todos los lineamientos dados por el ministerio de salud.</p>
                </div>
                <ProductList products={props.products} />
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    )
}

Index.getInitialProps = async () => {
    return {
        products: [
            {id: "faceMask_1", name: "El diseño que usted escoja", price: 3500, image: "/products/faceMask_10.jpg", description: "Si tiene una idea, podemos ayudarle a plasmarla en una mascarilla."} as IProduct,
            {id: "faceMask_3", name: "Para los mas pequeños", price: 3500, image: "/products/faceMask_3.jpeg",description: "Diseños especiales para los más chicos del hogar."} as IProduct,
            {id: "faceMask_5", name: "Para su negocio", price: 3500, image: "/products/faceMask_6.jpeg",description: "Confeccionamos al gusto. Si necesita mascarillas con el logo de negocio, con gusto podemos ayudarle."} as IProduct,
            {id: "faceMask_4", name: "Estilos distintos, estilos 3D", price: 3500, image: "/products/faceMask_4.jpeg",description: "Le ofrecemos diseños distintos para mejorar el confort: porque todos merecen estar protegidos y cómodos."} as IProduct,
        ]
    }
}

export default Index
