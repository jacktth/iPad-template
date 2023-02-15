import { Component, splitProps } from 'solid-js';

type HandProps = {
  rotate: string;
  class: string;
  length: number;
  width: number;
  fixed?: boolean;
  extended?: boolean;
};

export const Hand: Component<HandProps> = (props) => {
  const [local, rest] = splitProps(props, [
    'rotate',
    'length',
    'width',
    'fixed',
  ]);

  const extendedLine =
    props.extended === true ? (
      <line
        y1={-15}
        y2={-local.length}
        stroke="currentColor"
        stroke-width={local.width * 1.5}
        stroke-linecap="round"
        transform={local.rotate}
        {...rest}
      />
    ) : null;
  return (
    <>
      <line
        y1={local.fixed ? local.length - 95 : undefined}
        y2={-(local.fixed ? 95 : local.length)}
        stroke="currentColor"
        stroke-width={local.width}
        stroke-linecap="round"
        transform={local.rotate}
        {...rest}
      />
      {extendedLine}
    </>
  );
};
