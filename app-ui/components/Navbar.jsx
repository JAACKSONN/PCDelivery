import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.item}>
                <div className = {styles.callButton}>
                    <Image src = "/img/telephone.png" alt = "" width = "32" height = "32"/>
                 </div>
                 <div className = {styles.texts}>
                    <div className = {styles.text}>Need help?</div>
                    <div className = {styles.text}>123-456-7890</div>
                 </div>
            </div>
            


            <div className = {styles.item}>
                <ul className = {styles.list}>
                    <li className = {styles.listItem}>Homepage</li>
                    <li className = {styles.listItem}>Parts</li>
                    <li className = {styles.listItem}>Start building</li>
                    <Image src = "/img/logo.png" alt = "" width = "380" height = "214"/>
                    <li className = {styles.listItem}>Discounts</li>
                    <li className = {styles.listItem}>Blog</li>
                    <li className = {styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className = {styles.item}>
                <div className = {styles.cart}>
                    <Image src = "/img/cart.png" alt = "" width = "45" height = "45"/>
                    <div className = {styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
