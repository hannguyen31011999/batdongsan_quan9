import { Fragment } from 'react';
import BannerContainer from 'components/Client/Banner/BannerContainer';
import HeaderClient from 'components/Client/Header/HeaderClient';
import 'styles/assets/icon/LineIcons.3.0.css';
import 'styles/assets/scss/main.scss';

function App() {
  return (
    <Fragment>
      <div className="main-app">
        <HeaderClient />
        <BannerContainer />
      </div>
    </Fragment>
  );
}

export default App;
