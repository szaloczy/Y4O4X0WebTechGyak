import styles from './Button.module.css' //EXTERNAL STYLING


function Button(){

    const styles = {            //INLINE CSS STYLING
        backgroundColor:" hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        margin: "5px"
    }

    return(
        <button  /* className={styles.button} EXTERNAL */ style={styles}>Click me</button>
    );
}

export default Button