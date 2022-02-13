import { Link } from 'react-scroll';

function Modal(props) {
    let offset = props.offset;

    const posstyle = props.modalOpened ? "" : " closed";
    let themestyle = "dark";
    let textstyle  = "light";

    if (offset > 2392) {
        themestyle = "dark";
        textstyle  = "light";
    } else if (offset > 1084) {
        themestyle = "light";
        textstyle  = "dark";
    }

    return (
        <div className = {"modal" + posstyle + " " + themestyle}>
            <ul>
                <Link to="home" onClick = {props.handleOpen}>
                    <li className = {textstyle}>{props.text.HOME_TEXT.toUpperCase()}</li>
                </Link>
                <Link to="about" onClick = {props.handleOpen}>
                    <li className = {textstyle}>{props.text.ABOUT_TEXT.toUpperCase()}</li>
                </Link>
                <Link to="resume" onClick = {props.handleOpen}>
                    <li className = {textstyle}>{props.text.RESUME_TEXT.toUpperCase()}</li>
                </Link>
                <Link to="works" onClick = {props.handleOpen}>
                    <li className = {textstyle}>{props.text.WORKS_TEXT.toUpperCase()}</li>
                </Link>
                <Link to="social" onClick = {props.handleOpen}>
                    <li className = {textstyle}>{props.text.SOCIAL_TEXT.toUpperCase()}</li>
                </Link>
            </ul>
        </div>
    )
}

export default Modal;