import './btn.css'

const MyButton = (props) => {
    return (
        <div>
            <button
                onClick={props.onClick}
                className="btn"
                style={props.myStyle}
            >
                {props.text}
            </button>
        </div>
    )
}

export default MyButton;