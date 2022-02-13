import { Link } from 'react-scroll';

function Navigation(props) {
    let offset = props.offset;
    let style = {};

    if (offset > 96 && offset < 522) {
        style = "hidden";
    } else if (offset > 522) {
        style = "shown";
    } else {
        style = "bg-hidden";
    }
    return (
      <nav className = {style}>
        <ul>
            <Link to="home"><li>{props.text.HOME_TEXT.toUpperCase()}</li></Link>
            <Link to="about"><li>{props.text.ABOUT_TEXT.toUpperCase()}</li></Link>
            <Link to="resume"><li>{props.text.RESUME_TEXT.toUpperCase()}</li></Link>
            <Link to="works"><li>{props.text.WORKS_TEXT.toUpperCase()}</li></Link>
            <Link to="social"><li>{props.text.SOCIAL_TEXT.toUpperCase()}</li></Link>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;