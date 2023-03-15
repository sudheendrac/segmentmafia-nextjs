import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="https://segment.com/_next/static/images/favicon-32x32-58e71271c081d9f71b1d8a6fe1350a8a.png" alt="Segment logo" className={styles.logo} />
      </footer>
    </>
  )
}
