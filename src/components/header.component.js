import { Link } from 'react-scroll';

import DownIcon from '../icons/downicon.icon';
import GithubIcon from '../icons/githubicon.icon';
import WorksIcon from '../icons/worksicon.icon';

import ParticlesBg from 'particles-bg'

function Header(props) {
    return (
        <header id = "home">
            <ParticlesBg type = "circle" bg = {true} />
            <section>
                <h1>{props.text.NAME_TEXT}</h1>
                <h3>{props.text.NAME_SUB_TEXT}</h3>
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
            </section>
            <Link to = "about"><DownIcon /></Link>
      </header>
    );
  }
  
  export default Header;