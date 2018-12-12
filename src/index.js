import React from 'react';
import ReactDOM from 'react-dom';
import FullPage from './views/FullPage';
import Background from './components/Background';
import './styles/index.styl';
import './styles/utils/fonts.styl';
import './styles/utils/grid.styl';
import './styles/utils/utils.styl';
import "gsap";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Background></Background>
                <FullPage></FullPage>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);

module.hot.accept();