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
                        <Progressbar progress = {95} color = {'#7DDF64'} />
                    </div>
                    <div>
                        <span>{props.text.CSS_TEXT}</span>
                        <Progressbar progress = {90} color = {'#C0DF85'} />
                    </div>
                    <div>
                        <span>{props.text.JS_TEXT}</span>
                        <Progressbar progress = {88} color = {'#DEB986'} />
                    </div>
                    <div>
                        <span>{props.text.REACT_TEXT}</span>
                        <Progressbar progress = {85} color = {'#DB6C79'} />
                    </div>
                    <div>
                        <span>{props.text.GIT_TEXT}</span>
                        <Progressbar progress = {80} color = {'#ED4D6E'} />
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Resume;