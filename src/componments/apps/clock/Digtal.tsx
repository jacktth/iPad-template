import { Component, splitProps, For } from 'solid-js';

type DigtalsProps = {
  numberOfDigtals: number;
};

const rotate = (index: number, length: number) =>
  `rotate(${(360 * index) / length})`;

const styles = {
  container: {
    fill: 'red',
    position: 'absoulte',
    textAlign: 'center',
  },
} as const;
// ` ${rotate(index(), 12)}`
export const Digtals: Component<DigtalsProps> = (props) => {
  const [local, rest] = splitProps(props, ['numberOfDigtals']);
  const array = [...Array(local.numberOfDigtals).keys()]
    .map((i) => i + 1)
    
  return (
    <For each={array}>
      {(n, index) => (
            <text class={`h${n}`} textContent={n}   />
      )}
    </For>
  );
};
const position = {
  twelve:{x:-10,y:-70},
  eleven:{x:-10,y:-70},
}