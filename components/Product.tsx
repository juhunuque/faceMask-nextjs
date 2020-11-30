import {withRouter, Router} from 'next/router'

export interface IProduct {
    id: string
    name: string
    price: string
    url: string
    description: string
    image: string
}

interface IProductProps {
    product: IProduct
    router: Router
}

const Product = (props: IProductProps) => {
    const title = props.product['data']['title'][0]['text']
    const description = props.product['data']['description'][0]['text']
    const price = props.product['data']['price'][0]['text']
    const picture = props.product['data']['picture']['url']

    return (
        <div className="product">
            <h2 className="product__title">{title}</h2>
            <p className="product__description">{description}</p>
            <img src={picture} alt="" className="product__image"/>
            <div className="product__price-button-container">
                <div className="product__price">{price}</div>
            </div>
        </div>
    )
}

export default withRouter(Product)
