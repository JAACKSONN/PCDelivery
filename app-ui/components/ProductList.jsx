import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <div className = {styles.container}>
            <h1 className = {styles.title}>Build now!</h1>
            <p className = {styles.desc}>Pick out each part of your dream PC and get it delivered to your door!</p>
            <div className = {styles.wrapper}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default ProductList
