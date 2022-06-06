import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg2.png" objectFit="cover" layout = "fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            BUILD AND GET YOUR DREAM PC TODAY ALL FROM THE COMFORT OF YOUR HOME
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CONTACT INFORMATION</h1>
          <p className={styles.text}>
            jackellinger@gmail.com
          </p>
          <p className={styles.text}>
          <a href = "https://www.twitter.com/">
            <img src = '/img/twitter.png' width = "25" height = "20"></img> 
            PCDelivery
            </a>
          </p>
          <p className={styles.text}>
            <a href = "https://www.youtube.com/">
          <img className ="image" src = '/img/youtube.png' width = "25" height = "25"></img> 
            PC Delivery
            </a>
          </p>
          <p className={styles.text}>
          <a href = "https://www.instagram.com/">
          <img src = '/img/insta.webp' width = "25" height = "25"></img>
            PC_Delivery </a>
          </p>
          <p className={styles.text}>
          <a href = "https://www.facebook.com/">
          <img src = '/img/facebook.webp' width = "25" height = "25"></img>
            PC_Delivery
            </a>
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OPERATING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 AM – 10:00 PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 AM – 12:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;