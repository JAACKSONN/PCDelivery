import styles from "../styles/Cart.module.css";
import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {
    return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Final Build</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
              <tr className={styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={"/img/gpu.png"}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>RTX 3070</span>
                </td>
                <td>
                  <span className={styles.type}>GPU</span>
                </td>
                <td>
                  <span className={styles.price}>$699</span>
                </td>
                <td>
                  <span className={styles.quantity}>1</span>
                </td>
                <td>
                  <span className={styles.total}>
                    $699
                  </span>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={"/img/gpu.png"}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>RTX 3070</span>
                </td>
                <td>
                  <span className={styles.type}>GPU</span>
                </td>
                <td>
                  <span className={styles.price}>$699</span>
                </td>
                <td>
                  <span className={styles.quantity}>1</span>
                </td>
                <td>
                  <span className={styles.total}>
                    $699
                  </span>
                </td>
              </tr>
          </tbody>
        </table>
      </div>

      <div className = {styles.right}>
        <div className = {styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>$67
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>$100
            </div>
            <button className = {styles.button}>CHECKOUT</button>
        </div>
      </div>

    </div>
    )
}

export default Cart
