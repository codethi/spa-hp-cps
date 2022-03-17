import "./Card.css";

export function Card(props) {
  return (
    <section className="card">
      <img src={props.image} alt="" />
      <div className="card-text">
        <h3 className="card-title">{props.name}</h3>
        <span className="card-house">{props.house}</span>
        <p className="card-actor">Artista: {props.actor}</p>
      </div>
    </section>
  );
}
