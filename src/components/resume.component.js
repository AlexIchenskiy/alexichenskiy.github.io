import { Fade } from 'react-reveal';

function Resume(props) {
    return (
        <section className = 'resume' id = 'resume'>
            <Fade duration={1000} when={props.loaded} bottom>
                <div className = 'education'>
                    <div className = 'title'>
                        <span>{props.text.EDUCATION_TEXT.toUpperCase()}</span>
                    </div>
                    <div className = 'educationList'>
                        <div>
                            <h1>{props.text.UNIVERSITY_NAME_TEXT}</h1>
                            <h2>{props.text.UNIVERSITY_DATE_TEXT}</h2>
                        </div>
                        <div>
                            <h1>{props.text.SCHOOL_NAME_TEXT}</h1>
                            <h2>{props.text.SCHOOL_DATE_TEXT}</h2>
                        </div>
                    </div>
                </div>
                <div className = 'skills'>
                    <div className = 'title'>
                        <span>{props.text.PASSION_TEXT.toUpperCase()}</span>
                    </div>
                    <div>
                        <a className = 'roundButton'>
                            <span>{props.text.HTML_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.CSS_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.JS_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.REACT_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.JAVA_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.SPRING_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.LINUX_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.DOCKER_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.GIT_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.SCIENCE_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.REST_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.FRONTEND_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.STARTUPS_TEXT}</span>
                        </a>
                        <a className = 'roundButton'>
                            <span>{props.text.ART_TEXT}</span>
                        </a>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Resume;