import React from 'react';
import '../styles/noMatch.scss';

class NoMatch extends React.Component {
    render() {
        return (
            <div className="noMatch" >
                <p> Not found in our library</p>
            </div>
        )
    }
}

export default NoMatch;