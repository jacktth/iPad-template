import { createSignal } from "solid-js";
import Clock from 'react-clock';

export default function Counter() {
  const [count, setCount] = createSignal(new Date());

  setInterval(() => setCount(new Date()), 1000);

  return <div>Count: {count()}</div>;
}
