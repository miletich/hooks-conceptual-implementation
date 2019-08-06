import mockReact from "./mockReact";

const Counter = () => {
  const [count, setCount] = mockReact.useState<number>(0);

  return {
    click: () => setCount(count + 1),
    render: () => console.log(count)
  };
};

export default Counter;
