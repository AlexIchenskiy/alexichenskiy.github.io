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
                <span>
                    <h3><Fade delay={1500} duration={500} bottom cascade>{props.text.NAME_SUB_TEXT_FIRST}</Fade></h3>
                    <h3><Fade delay={1500} duration={500} bottom cascade>{props.text.NAME_SUB_TEXT_SECOND}</Fade></h3>
                </span>
                <Fade delay={2500} duration={1000} when={props.loaded} cascade>
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
            <Fade delay={3000} duration={1000} when={props.loaded}>
                <Link to = "about"><DownIcon /></Link>
            </Fade>
      </header>
    );
  }
  
  export default Header;