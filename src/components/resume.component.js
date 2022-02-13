import Progressbar from "./progressbar.component";

function Resume(props) {
    return (
        <section className = "resume" id = "resume">
            <div className = "education">
                <div className = "title">
                    <span>{props.text.EDUCATION_TEXT}</span>
                </div>
                <div>
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
            <div className = "skills">
                <div className = "title">
                    <span>{props.text.SKILLS_TEXT}</span>
                </div>
                <div>
                    <div>
                        <span>{props.text.HTML_TEXT}</span>
                        <Progressbar progress = {95} color = {'#E6C229'} />
                    </div>
                    <div>
                        <span>{props.text.CSS_TEXT}</span>
                        <Progressbar progress = {90} color = {'#F17105'} />
                    </div>
                    <div>
                        <span>{props.text.JS_TEXT}</span>
                        <Progressbar progress = {88} color = {'#D11149'} />
                    </div>
                    <div>
                        <span>{props.text.REACT_TEXT}</span>
                        <Progressbar progress = {85} color = {'#6610F2'} />
                    </div>
                    <div>
                        <span>{props.text.GIT_TEXT}</span>
                        <Progressbar progress = {80} color = {'#1A8FE3'} />
                    </div>
                    <div>
                        <span>{props.text.REST_TEXT}</span>
                        <Progressbar progress = {88} color = {'#6DD3CE'} />
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Resume;