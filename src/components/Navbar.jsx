const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatPrice = (price) => price.toLocaleString("es-CL");

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div>
        <button className="btn btn-outline-light mx-1">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-light mx-1">🔓 Profile</button>
            <button className="btn btn-outline-light mx-1">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light mx-1">🔐 Login</button>
            <button className="btn btn-outline-light mx-1">🔐 Register</button>
          </>
        )}
      </div>
      <div>
        <button className="btn btn-success">
          🛒 Total: ${formatPrice(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
