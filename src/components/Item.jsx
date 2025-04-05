function Item ({item, selectProduct}) {

    function quantityHandler(e){
        e.stopPropagation();
        alert('change quantity')
    }

    return (
        
                    
        <div onClick={() => selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`}>
            <div className="photo">
                <img src={"./img/" + item.photo}/>
            </div>
            <div className="description">
                <span className="name">{item.name}</span>
                <span className="price">$ {item.price}</span>
        { item.isInBag &&
                <div className="quantity-area">
                    <button onClick ={(e) => quantityHandler(e)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick ={(e) => quantityHandler(e)}>+</button>
                </div>

                
        }
            </div>
        </div>
    )
}
export default Item;