import React from 'react';
import ReactDOM from 'react-dom';

// Button show/hide time! ---------------------------------------------------------------
class ButtonComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {class: 'button-show-time', label: 'Show time!'};
        this.press = this.press.bind(this);
    }

    componentDidMount() {
        function tickTimer(){
            ReactDOM.render(
                <div> Current time: {new Date().toLocaleTimeString()} </div>,
                document.getElementById("div-current-time")
            );
        }

        this.timer = setInterval(tickTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    press(){
        let isShowTime = this.state.class==="button-show-time";
        let className = isShowTime ? "button-hide-time" : "button-show-time";
        let labelText = isShowTime ? "Hide time!" : "Show time!";

        this.setState({class: className});
        this.setState({label: labelText});

        let timeElement = document.getElementById('div-current-time');
        if (timeElement && timeElement.style) {
            timeElement.style.visibility = isShowTime ? "visible" : "hidden";
        }
    }

    render() {
        //console.log("render button show/hide time");
        return <div className="center-cursive-text">
            If you want, you can look at current time! Push the button «Show time!»
            <div className="show-time-block">
                <div id="div-btn-time"><button onClick={this.press} className={this.state.class}>{this.state.label}</button></div>
                <div id="div-current-time"></div>
            </div>
            If you don't want look at current time! Push the button «Hide time!»
        </div>;
    }
}

export default ButtonComponent;