type InputProps = {
    placeholder: string,
}
function Input(props: InputProps) {
    const {placeholder} = props;
    return (
        <input
            placeholder={placeholder}
            required
            className='want_to_watch-from_input' />
    )
}
export default Input;