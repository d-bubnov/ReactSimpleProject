import React from 'react';

// Hypnosis -------------------------------------------------------------------------------
const styleInputValue = {
    width:'150px'
}

class HypnosisForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: ""};

        this.onChange = this.onChange.bind(this);
        this.startHypnosis = this.startHypnosis.bind(this);
    }

    onChange(e) {
        let val = e.target.value;
        this.setState({number: val});
    }

    startHypnosis(e) {
        e.preventDefault();

        let btnHypnosis = document.getElementById('button-hypnosis');
        let hypnotoad = document.getElementById("hypnotoad");
        let inputHypnosis = document.getElementById('block-input-hypnosis');

        if (btnHypnosis && btnHypnosis.value ===  "Stop hypnosis!") {
            if (hypnotoad) {
                hypnotoad.style.display = 'none';
                hypnotoad.style.visibility = 'hidden';
            }

            if (inputHypnosis) {
                inputHypnosis.style.display = 'block';
            }

            btnHypnosis.value = "Start hypnosis!";
        } else if (btnHypnosis) {
            if (this.state.number === '' || this.state.number === "0") {
                return;
            }

            if (inputHypnosis) {
                inputHypnosis.style.display = 'none';
            }

            btnHypnosis.setAttribute('disabled', 'disabled');

            let timerHypnosisElement = document.getElementById("timer-hypnosis");
            if (timerHypnosisElement) {
                timerHypnosisElement.innerHTML = this.state.number;
                this.setState({number: ''});
                timerHypnosisElement.style.visibility = 'visible';
                timerHypnosisElement.style.display ='block';

                let timer = setInterval(function () {
                    if (timerHypnosisElement.innerHTML === "1") {
                        clearInterval(timer);
                        timerHypnosisElement.style.visibility = 'hidden';
                        timerHypnosisElement.style.display ='none';
                        btnHypnosis.value = "Stop hypnosis!";
                        btnHypnosis.removeAttribute('disabled');

                        if (hypnotoad) {
                            hypnotoad.style.display = 'block';
                            hypnotoad.style.visibility = 'visible';
                        }
                        // window.scrollTo(0, document.body.scrollHeight);
                    }
                    else {
                        timerHypnosisElement.innerHTML--;
                    }
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div className="center-cursive-text">
                <h3>
                    Do you want to start hypnosis?
                </h3>

                <h1 id="timer-hypnosis"></h1>
                <div id="hypnotoad">
                    <img src="/content/gif/hypnosis.gif"/>
                </div>
                <form onSubmit={this.startHypnosis}>
                    <p id="block-input-hypnosis">
                        <label>Please, input number (from 3 to 9)</label><br />
                        <input style={styleInputValue} type="number" min="3" max="9" placeholder="number..." value={this.state.number} onChange={this.onChange}/>
                    </p>
                    <input id="button-hypnosis" className="button-hypnosis" type="submit" value="Start hypnosis!" />
                </form>
            </div>
        );
    }
}

export default HypnosisForm;