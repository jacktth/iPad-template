import { Component, splitProps, For } from 'solid-js';

type DigtalsProps = {
  numberOfDigtals: number;
  radius: number;
};

function circleXY(r: number, n: number) {
  // minR is the smaller radius for the digtal number rending in the clock
  const minR = r / 1.21;
  // Convert angle to radians, 30 * n is the expexted degree for the numbers, -n is because of inverted actual coordinates
  const theta = ((30 * (-n) - 90) * Math.PI) / 180;
  // In svg, the x y coordinates are inverted so it is minus x instead of minus y
  return { x: -minR * Math.cos(theta), y: minR * Math.sin(theta) };
}


export const Digtals: Component<DigtalsProps> = (props) => {
  const [local, rest] = splitProps(props, ['numberOfDigtals']);
  const array = [...Array(local.numberOfDigtals).keys()]
    .map((i) => i + 1)
    .reverse();
  return (
    <For each={array}>
      {/* {(n, index) => <text class={`h${n}`} textContent={n} />} */}
      {(n, index) => (
        <>
          <text
            class={`hs${n}`}
            textContent={n}
            x={circleXY(props.radius, n).x}
            y={circleXY(props.radius, n).y}
            transform={n === 12 ? 'translate(-8.5,6)' : 'translate(-5,6)'}
          />
        </>
      )}
    </For>
  );
};
