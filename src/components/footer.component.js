import { Link } from 'react-scroll';

import UpIcon from "../icons/upicon.icon";
import LinkedinIcon from "../icons/linkedinicon.icon";
import GithubIcon from "../icons/githubicon.icon";

function Footer(props) {
    return (
        <footer id = "social">
            <Link to = "home"><UpIcon /></Link>
            <div>
                <ul>
                    <li>
                        <a href = "https://www.linkedin.com/in/alex-ichenskiy-555774231/">
                            <LinkedinIcon />
                        </a>
                    </li>
                    <li>
                        <a href = "https://github.com/AlexIchenskiy">
                            <GithubIcon />
                        </a>
                    </li>
                </ul>
            </div>
            <span>
                <h3>{props.text.DESIGN_BY_TEXT}</h3>
                <a href = "https://www.styleshout.com/">
                    {props.text.STYLESHOUT_TEXT}
                </a>
            </span>
        </footer>
    );
}

export default Footer;