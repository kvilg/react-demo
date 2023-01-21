
import './header.model.css';

function Header() {
  return (
    <div className="Header">
        <div className="container">
            <nav className="nav">
                <a href="" className="nav-i">LOGO</a>
                <div className="nav-flex-r">
                    <a href="" className="nav-i-r">О нас</a>
                    <a href="" className="nav-i-r">Сделать заказ</a>
                    <a href="" className="nav-i-r">Контакты</a>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default Header;
