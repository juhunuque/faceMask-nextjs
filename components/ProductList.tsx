import Product, { IProduct } from "./Product"

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    const products = props.products.sort((a, b) => {
        if (parseInt(a['uid']) > parseInt(b['uid'])) {
            return 1;
        } else if(parseInt(a['uid']) < parseInt(b['uid'])) {
            return -1;
        } else {
            return 0
        }
    })
    return (
        <div className="product-list">
            {products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}

export default ProductList
