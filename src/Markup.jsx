// prettier-ignore
const icon_arrow = (<svg className="icon_arrow" width="12" height="12" xmlns="http://www.w3.org/2000/svg"> <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" /></svg>);
// prettier-ignore
const icon_check = (<svg className="icon_check" width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8" /></svg>);
// prettier-ignore
const icon_copy = (<svg className="icon_copy" width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF" /></svg>);

const Markup = function (props) {
    return (
        <main>
            <div className="wrapper">
                <h1 className="title">Password Generator</h1>

                <div className="header">
                    <p className="password password-empty">P4$5W0rD!</p>
                    <p className="copied copied-hidden">Copied</p>
                    <button
                        className="copy-btn"
                        aria-label="Copy"
                        onClick={props.copyText}
                    >
                        {icon_copy}
                    </button>
                </div>

                <div className="container">
                    <div className="upper-box">
                        <p className="upper-box__text">Character Length</p>
                        <p className="upper-box__num" id="length">
                            10
                        </p>
                    </div>

                    <div className="range-box">
                        <input
                            className="range-widget"
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            defaultValue="50"
                            onChange={props.changeSettings}
                        />
                    </div>

                    <ul className="ul">
                        <li className="li" data-type="uppercase">
                            <label onClick={props.changeSettings}>
                                <input
                                    id="uppercase"
                                    type="checkbox"
                                    defaultChecked
                                />
                                <span className="ul__check"></span>
                                <span className="ul__text">
                                    Include Uppercase Letters
                                </span>
                            </label>
                        </li>
                        <li className="li" data-type="lowercase">
                            <label onClick={props.changeSettings}>
                                <input
                                    id="lowercase"
                                    type="checkbox"
                                    defaultChecked
                                />
                                <span className="ul__check"></span>
                                <span className="ul__text">
                                    Include Lowercase Letters
                                </span>
                            </label>
                        </li>
                        <li className="li" data-type="numbers">
                            <label onClick={props.changeSettings}>
                                <input
                                    id="numbers"
                                    type="checkbox"
                                    defaultChecked
                                />
                                <span className="ul__check"></span>
                                <span className="ul__text">
                                    Include Numbers
                                </span>
                            </label>
                        </li>
                        <li className="li" data-type="symbols">
                            <label onClick={props.changeSettings}>
                                <input id="symbols" type="checkbox" />
                                <span className="ul__check"></span>
                                <span className="ul__text">
                                    Include Symbols
                                </span>
                            </label>
                        </li>
                    </ul>

                    <div className="strength-box">
                        <p className="strength-box__title">Strength</p>
                        <p className="strength-box__level">Medium</p>
                        <div className="strength-box__box yel">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <button className="generate-btn" onClick={props.generate}>
                        <span>Generate</span>
                        {icon_arrow}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Markup;
