import './Order.model.css';

function Order() {
    return (
      <div className="Order">
        <div className="container">
            <div className="order-logo-text">
                Order
            </div>
            <div className="email-order">
                <input className="imput-order" type="text" placeholder="Mail"/>
                <br/>
                <button className="btn">
                    запись
                </button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Order;
  