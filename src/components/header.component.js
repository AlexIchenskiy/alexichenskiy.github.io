import { Link } from 'react-scroll';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import DownIcon from '../icons/downicon.icon';
import GithubIcon from '../icons/githubicon.icon';
import WorksIcon from '../icons/worksicon.icon';

function Header(props) {
    return (
        <header id = "home">
            <section>
                <h1 className = 'bgHoverShape'>{props.text.NAME_TEXT}</h1>
                <Fade delay={2000} duration={1000} when={props.loaded} cascade>
                    <h3><Fade delay={1500} bottom cascade>{props.text.NAME_SUB_TEXT}</Fade></h3>
                    <hr />
                    <div>
                        <Link to = "works">
                        <div>
                            <WorksIcon />
                            <span>{props.text.WORKS_TEXT}</span>
                        </div>
                        </Link>
                        <a href = "https://github.com/AlexIchenskiy">
                            <div>
                                <GithubIcon />
                                <span>{props.text.GITHUB_TEXT}</span>
                            </div>
                        </a>
                    </div>
                </Fade>
            </section>
            <Fade delay={2000} duration={1000} when={props.loaded}>
                <Link to = "about"><DownIcon /></Link>
            </Fade>
      </header>
    );
  }
  
  export default Header;