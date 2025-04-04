import styles from './styles.module.css'

type ButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>

export function Button({icon, color = 'green', ...props} : ButtonProps){
    return(
        <div>
            <button className={`${styles.button} ${styles[color]}`} {...props} >{icon}</button>
        </div>
    )
}