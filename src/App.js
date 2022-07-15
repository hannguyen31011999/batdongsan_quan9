import HeaderClient from 'components/Client/Header/HeaderClient';
import { Fragment } from 'react';
import 'styles/assets/icon/LineIcons.3.0.css';
import 'styles/assets/scss/main.scss';

function App() {
  return (
    <Fragment>
      <div className="main-app">
        <HeaderClient />
      </div>
    </Fragment>
  );
}

export default App;
