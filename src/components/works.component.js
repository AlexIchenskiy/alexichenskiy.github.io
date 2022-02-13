import allien from '../assets/allien.png';
import polichroma from '../assets/polichroma.png';
import weather from '../assets/weather.png';
import credit from '../assets/credit.png';

function Works(props) {
    return (
        <section className = "works" id = "works">
            <div className = "working">
                <div className = "title"><span>{props.text.WORKING_ON_TEXT}</span></div>
                <div className = "projects">
                    <a href = "https://alexichenskiy.github.io/allien/">
                        <div className = "allien project" 
                             style = {{backgroundImage: `url(${allien})`}}>
                            <div>
                                <span>{props.text.ALLIEN_TEXT}</span>
                            </div>
                        </div>
                    </a>
                    <a href = "https://alexichenskiy.github.io/polichroma/">
                        <div className = "polichroma project" 
                             style = {{backgroundImage: `url(${polichroma})`}}>
                            <div>
                                <span>{props.text.POLICHROMA_TEXT}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className = "learning">
                <div className = "title"><span>{props.text.LEARNING_TEXT}</span></div>
                <div className = "projects">
                    <a href = "https://alexichenskiy.github.io/weather-widget-react/">
                        <div className = "weather project"
                            style = {{backgroundImage: `url(${weather})`}}>
                            <div>
                                <span>{props.text.WEATHER_WIDGET_TEXT}</span>
                            </div>
                        </div>
                    </a>
                    <a href = "https://alexichenskiy.github.io/credit-card-react/">
                        <div className = "credit project"
                            style = {{backgroundImage: `url(${credit})`}}>
                            <div>
                                <span>{props.text.CARD_WIDGET_TEXT}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Works;