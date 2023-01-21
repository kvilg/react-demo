import './content.model.css';

import AboutAs from '../AboutAs/AboutAs.js';
import LogoMain from '../LogoMain/LogoMain.js';
import Order from '../Order/Order.js';

function Content() {
  return (
    <div className="Content">
        <LogoMain/>
        <AboutAs/>
        <Order/>
    </div>
  );
}

export default Content;
