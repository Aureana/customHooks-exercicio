import { useCounter } from "../hooks/useCounter";
import Item  from "../components/Item";
import { useState } from "react";

export const Cart = () => {
  // const [quantity, setQuantity] = useState(0);

  //  const { quantity, somar, subtrair, reset } = useCounter(0, 1);
  //  const { quantityPares, somarPares, subtrairPares, resetPares } = useCounter(
  //   0,
  //   2
  //   );

  // const quantity = useCounter(0, 2);
  // console.log(quantity);

  const [contador, setContador] = useState(0)

  const onChangeContador = (e) => {
    setContador(e.target.value)
  }

  const {quantity, somar, subtrair, resetar} = useCounter(contador)

  return(
    <div>
    <h1>Meu carrinho</h1>
    <Item
      label="My produto massa"
      quantity={quantity}
      onIncrement={somar}
      onDecrement={subtrair}
      onReset={resetar}
    />

  <input className="texto" placeholder="Insira o valor do contador"
    value={contador} onChange={onChangeContador} type="Number"> </
  input>
  </div>
  )
   
    

}
