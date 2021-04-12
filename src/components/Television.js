import React from "react";

class Television extends React.Component {
    state = {
        on: false,
        channel: 0
    };

    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };

    channelUp = () => {
        this.setState({
            channel: this.state.channel + 1
        });
    };

    channelDown = () => {
        this.setState({
            channel: this.state.channel - 1
        });
    };

    render() {

        const { on, channel } = this.state;
        const myStyle = {
            width: 400,
            height: 300,
            background: this.state.on ? `#0ff` : "#999",
            border: `10px solid #333`
        };

        const myOuterStyle = {
            width: 420,
            background: "#222",
            padding: `0 0 20px 0`
        };

        return (
            <div style={myOuterStyle}>
                <div style={myStyle}>
                    <p> My Television: {!on ? 'OFF' : "On"}</p>
                    { on && <h3>Channel: {channel}</h3>}
                </div>
                <button onClick={this.toggle}>Power</button>
                <button onClick={this.channelUp}> ^ </button>
                <button onClick={this.channelDown}> V </button>
            </div>
        );
    }
}

export default Television;