import DownloadIcon from "../icons/downloadicon.icon";
import resume from "../assets/AlexIchenskiyResume.pdf";

import Fade from "react-reveal/Fade";

function About(props) {
    return (
        <section className = "about" id = "about">
            <Fade duration={1000} when={props.loaded} bottom>
                <div className = "left">
                    <div style={{transform: `rotate(${props.offset/5 - 40}deg)`}}>
                    </div>
                </div>
                <div className = "right fill-button-outer">
                    <h1>{props.text.ABOUT_ME_TEXT}</h1>
                    <h3>{props.text.ABOUT_ME_SUB_TEXT}</h3>
                    <a href = {resume} download>
                        <div>
                            <DownloadIcon />
                            <span>{props.text.DOWNLOAD_RESUME_TEXT}</span>
                        </div>
                    </a>
                </div>
            </Fade>
        </section>
    );
}

export default About;