import DownloadIcon from "../icons/downloadicon.icon";

function About(props) {
    return (
        <section className = "about" id = "about">
            <div className = "left">
                <div>
                </div>
            </div>
            <div className = "right fill-button-outer">
                <h1>{props.text.ABOUT_ME_TEXT}</h1>
                <h3>{props.text.ABOUT_ME_SUB_TEXT}</h3>
                <div>
                    <DownloadIcon />
                    <span>{props.text.DOWNLOAD_RESUME_TEXT}</span>
                </div>
            </div>
        </section>
    );
}

export default About;