import styles from './styles.module.css'

type InputProps = {
    id: string;
    label?: string;
} & React.ComponentProps<'input'>

export function Input({id, type, label, ...rest} : InputProps){
    return(
        <div>
            { label && <label htmlFor={id}>{label}</label>}
            <input className={styles.input} id={id} type={type} {...rest} ></input>
        </div>
    )
}