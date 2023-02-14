import { Component, splitProps } from 'solid-js';

type CircleProps = { radius: number; class: string; fill: string };

export const Circle: Component<CircleProps> = (props) => {
  const [local, rest] = splitProps(props, ['radius', 'class', 'fill']);
  return <circle r={local.radius} class={local.class} fill={local.fill} {...rest} />;
};
