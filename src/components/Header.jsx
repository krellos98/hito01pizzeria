const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('/Header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",        
        height: "300px",       
      }}
      className="text-center text-light d-flex flex-column justify-content-center"
    >
      <h1 className="fw-bold bg-dark bg-opacity-50 p-2 rounded">
        ¡Pizzería Mamma Mía!
      </h1>
      <p className="bg-dark bg-opacity-50 p-1 rounded">
        Tenemos las mejores pizzas que podrás encontrar
      </p>
    </header>
  );
};

export default Header;