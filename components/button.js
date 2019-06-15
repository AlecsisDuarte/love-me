import React from 'react';
import Router from 'next/router';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => Router.push("/" + this.props.page)}>
                    {this.props.text}
                </button>
                <style jsx>{`
                    button {
                        background: black;
                        color: white;
                        cursor: pointer;
                        font-size: 1.5em;
                        border: 2px solid gray;
                        border-radius: 8px;
                        padding: 10px;
                    }
                    div {
                        display: inline;
                        padding: 8px;
                    }
                    button :hover {
                        background: white;
                        color: black;
                        border-color: white;
                    }

                    @media (max-width: 500px) {
                        button {
                            font-size: 1.1em;
                            padding: 6px;
                        }
                        div {
                            padding: 4px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Button;