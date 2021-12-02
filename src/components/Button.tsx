type ButtonProps = {
    children?: string; //interrogação para ser opcional
}

export function Button(props: ButtonProps) {
    return(
        <button>{props.children || 'Clique aqui'}</button>
    )
}