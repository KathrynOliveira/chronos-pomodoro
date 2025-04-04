type InputProps = {
    id: string;
} & React.ComponentProps<'input'>

export function Input({id, type} : InputProps){
    return(
        <div>
            <label htmlFor={id}>task</label>
            <input id={id} type={type}></input>
        </div>
    )
}