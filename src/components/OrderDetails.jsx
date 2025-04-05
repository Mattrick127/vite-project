function OrderDetails ({itemsInBag}) {
    return ( 
            <>
                <section className="summary">
                    <strong>Order Details</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                                    
                        { itemsInBag.map(item =>                             
                            <tr>
                                <td>{item.quantity}x {item.name}</td>
                                <td>$ {item.price * item.quantity}</td>
                            </tr>
                        ) }
                            
                            <tr>
                                <th>Total</th>
                                <th>$ 119.99</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </>
    )
}

export default OrderDetails