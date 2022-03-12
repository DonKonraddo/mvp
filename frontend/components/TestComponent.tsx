type Props = {
  name?: string;
};

export const TestComponent = (props: Props) => {
  return <div>Hello: {props?.name || ''}</div>;
};
