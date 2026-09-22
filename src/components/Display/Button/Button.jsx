import styles from "./Button.module.css"


export default function Button({ children, onClick }) {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            <span className={styles.buttonInner}>{children}</span>
        </button>
    )
}

