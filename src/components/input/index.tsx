import styles from './input.module.scss';

interface inputProps {
    label?: string;
    placeHolder?: string;
    function?: any;
    className?: any;
    value?: any;
}
  

export default function Input(inputData:inputProps){
    return(
        <>
            <div className={styles.inputContainer}>
                <label>{inputData.label}</label>
                <input 
                    className={inputData.className} 
                    placeholder={inputData.placeHolder} 
                    onChange={inputData.function}
                    value={inputData.value}
                />
            </div>
        </>
    );
}