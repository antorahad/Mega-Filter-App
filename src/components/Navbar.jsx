const Navbar = ({handleSearch}) => {
    return (
        <div>
            <div className="navbar bg-neutral p-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-white">Eco Mart</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Name, Price, Brand, Category" className="input input-bordered w-[300px]" onChange={handleSearch}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;