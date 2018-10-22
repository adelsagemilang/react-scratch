import React, {Component} from 'react';
import VisibleCounter from '../containers/VisibleCounter'
import '../styles/style.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Counter App</h1>
                </header>
                <VisibleCounter/>

            </div>
        );
    }
}

export default App;