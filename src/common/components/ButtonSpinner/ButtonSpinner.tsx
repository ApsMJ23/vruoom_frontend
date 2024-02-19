// This is a custom spinner component that is used in the Button component
// It's a simple spinner that is displayed when the button is in a loading state
import styles from './ButtonSpinner.module.scss';

type ButtonSpinnerProps = {
    height?: string;
    width?: string;
    color?: string;
}


const ButtonSpinner = (props:ButtonSpinnerProps) => {
    const {height,width} = props;
    return (
        <div style={{height:height,width:width}} className={styles.loader}></div>
    )
}

export default ButtonSpinner;