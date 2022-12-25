import React, {useState, useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {

    const {id} = useParams([]);
    const [product, setProduct] = useState([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
        const getProduct = async () =>{
            setLoding(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoding(false);
        }
        getProduct();

    }, []);

    const Loding = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} /> 
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} />
                    
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-upper-case text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display 5">{product.title}</h1>
                    <p className="lead fw-bolder">
                    Rating{product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button className="btn btn-outline-dark">
                        Add to cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark px-3 py-2 ms-2">
                        Go to cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
       <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loding /> : <ShowProduct />}
                </div>

            </div>
       </div>
    );
}
export default Product;