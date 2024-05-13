import { useState } from "react";
import {toast } from 'react-toastify';

export const ButtonSubscribe = () => {

    const [subscribirte, setSubscribirte] = useState(false);

  return (
    <button onClick={() => {
        toast.success("Felicidades, ya estas suscrito")
        setSubscribirte(!subscribirte);
    }}>
        {subscribirte ? "Ya estás suscrito": "Suscribete"}
    </button>
  )
}
