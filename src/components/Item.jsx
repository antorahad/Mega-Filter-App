const Item = ({ item }) => {
    const { id, image, name, price, category, brand } = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="w-[100%] h-[300px]"><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Category: ${category}</p>
                    <p>Brand: ${brand}</p>
                    <div className="card-actions justify-start mt-5">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;