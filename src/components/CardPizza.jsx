const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>


      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">

        <h5 className="card-title text-center">{name}</h5>

        <hr />

        <p><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <hr />
        <h6 className="text-center fw-bold">Precio: ${price.toLocaleString("es-CL")}</h6>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-primary">Ver más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
