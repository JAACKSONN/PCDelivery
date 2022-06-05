import Image from "next/image";
import styles from "../../styles/Product.module.css";
import {useState} from "react"


const Product = () => {
    const [option, setOption] = useState(0)
    const item =  {
        id: 1,
        img: "/img/gpu.png",
        name: "NVIDIA Graphics Cards",
        price: [699, 799, 899],
        desc: "insert a description here"
    };
    return (
        <div className = {styles.container}>
            <div className = {styles.left}>
                <div className = {styles.imgContainer}>
                    <Image src = {item.img} alt = "" layout = "fill"/>
                </div>
            </div>
            <div className = {styles.right}>
                <h1 className = {styles.title}>{item.name}</h1>
                <span className = {styles.price}>${item.price[option]}</span>
                <p className = {styles.desc}>{item.desc}</p>
                <h3 className = {styles.choose}>Choose your card</h3>
                <div className = {styles.options}>
                    <div className = {styles.option} onClick = {() => setOption(0)}>
                        <Image src = "/img/featured3.png" layout = "fill" alt = ""/>
                        <span className = {styles.number}>RTX 3070</span>
                    </div>
                    <div className = {styles.option} onClick = {() => setOption(1)}>
                        <Image src = "/img/featured3.png" layout = "fill" alt = ""/>
                        <span className = {styles.number}>RTX 3080</span>
                    </div>
                    <div className = {styles.option} onClick = {() => setOption(2)}>
                        <Image src = "/img/featured3.png" layout = "fill" alt = ""/>
                        <span className = {styles.number}>RTX 3090</span>
                    </div>
                </div>
                <div className={styles.add}>
                    <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>
                        Add to Cart
                    </button>
                    </div>
            </div>
        </div>
    )
}

export default Product
