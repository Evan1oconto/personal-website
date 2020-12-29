import React, { Component } from 'react'
import './App.css';
import About from './react_Components/about'
import Navigationbar from './react_Components/navigationbar'
import Introduction from './react_Components/introduction'
import Resume from './react_Components/resume'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="colorlib-page">
                    <div id="container-wrap">
                    <Navigationbar>
                    </Navigationbar>
                        <div id="colorlib-main">
                            <Introduction></Introduction>
                            <About></About>
                            <Resume></Resume>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}





export default App;
