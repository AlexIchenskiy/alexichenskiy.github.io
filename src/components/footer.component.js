import { Link } from "react-scroll";

import { Fade } from "react-reveal";

import UpIcon from "../icons/upicon.icon";
import LinkedinIcon from "../icons/linkedinicon.icon";
import GithubIcon from "../icons/githubicon.icon";

function Footer(props) {
    return (
        <footer id="social">
            <Fade duration={1000} when={props.loaded} cascade>
                <Link to="home" smooth>
                    <UpIcon />
                </Link>
                <div>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/alex-ichenskiy-555774231/">
                                <LinkedinIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/AlexIchenskiy">
                                <GithubIcon />
                            </a>
                        </li>
                    </ul>
                </div>
                <span>
                    <h3>{props.text.DESIGN_BY_TEXT}</h3>
                    <a href="https://github.com/AlexIchenskiy">
                        {props.text.ME_TEXT}
                    </a>
                </span>
            </Fade>
        </footer>
    );
}

export default Footer;
