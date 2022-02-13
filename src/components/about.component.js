import DownloadIcon from "../icons/downloadicon.icon";
import resume from "../assets/AlexIchenskiyResume.pdf";
import me from "../assets/me.jpg";

function About(props) {
    return (
        <section className = "about" id = "about">
            <div className = "left">
                <div style = {{backgroundImage: `url(${me})`}}>
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
        </section>
    );
}

export default About;