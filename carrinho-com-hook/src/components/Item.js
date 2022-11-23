import "./styles.css";
export function Item(props) {
  return (
    <div className="Item">
      <p>{props.label}</p>
      <p>Quantidade: {props.quantity}</p>
      <button onClick={props.onDecrement}>-</button>
      <button onClick={props.onReset}>Restaurar</button>
      <button onClick={props.onIncrement}>+</button>
    </div>
  );
}
