import odin from "../assets/odin.jpg";
import rune from "../assets/rune.jpg";
import peepo from "../assets/peepo.jpg";
import gitcalendar from "../assets/gitcalendar.jpg";
import allien from "../assets/allien.jpg";
import polichroma from "../assets/polichroma.jpg";
// import weather from "../assets/weather.jpg";
import credit from "../assets/credit.jpg";

import Slide from "react-reveal/Slide";

function Works(props) {
    return (
        <section className="works" id="works">
            <div className="working">
                <Slide bottom cascade>
                    <Slide bottom>
                        <div className="title">
                            <span>
                                {props.text.WORKING_ON_TEXT.toUpperCase()}
                            </span>
                        </div>
                    </Slide>
                    <div className="projects">
                        <a href="https://github.com/memgraph/odin">
                            <div className="odin project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${odin})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>{props.text.ODIN_TEXT}</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/memgraph/rune">
                            <div className="rune project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${rune})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>{props.text.RUNE_TEXT}</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/AlexIchenskiy/peepo-eats-api">
                            <div className="peepo project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${peepo})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>{props.text.PEEPO_TEXT}</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://alexichenskiy.github.io/GitCalendar/#/2023-05">
                            <div className="gitcalendar project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${gitcalendar})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>{props.text.GIT_CALENDAR_TEXT}</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://alexichenskiy.github.io/allien/">
                            <div className="allien project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${allien})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>{props.text.ALLIEN_TEXT}</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://alexichenskiy.github.io/polichroma/">
                            <div className="polichroma project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${polichroma})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>{props.text.POLICHROMA_TEXT}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </Slide>
            </div>
            <div className="learning">
                <Slide bottom cascade>
                    <Slide bottom>
                        <div className="title">
                            <span>{props.text.WIDGETS_TEXT.toUpperCase()}</span>
                        </div>
                    </Slide>
                    <div className="projects">
                        {/* <a href="https://alexichenskiy.github.io/weather-widget-react/">
                            <div className="weather project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${weather})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>
                                        {props.text.WEATHER_WIDGET_TEXT}
                                    </span>
                                </div>
                            </div>
                        </a> */}
                        <a href="https://alexichenskiy.github.io/credit-card-react/">
                            <div className="credit project">
                                <div
                                    className="projectBg"
                                    style={{
                                        backgroundImage: `url(${credit})`,
                                    }}
                                />
                                <div className="projectDescription">
                                    <span>{props.text.CARD_WIDGET_TEXT}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </Slide>
            </div>
        </section>
    );
}

export default Works;
