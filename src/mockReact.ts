type State = string | number | boolean;
type SetState<T extends State> = (newState: T) => void;
type RenderedComponent = {
  render: () => void;
  click: () => void;
};
type ReactComponent = () => RenderedComponent;

let state: State; // no existential types in ts

const mockReact = {
  render: <C extends ReactComponent>(Component: C): RenderedComponent => {
    const comp = Component();
    comp.render();
    return comp;
  },
  useState: <T extends State>(initialState: T): [T, SetState<T>] => {
    // new variable for the purpose of type coercion
    let hookState: T = (state as T) || initialState;

    const setState: SetState<T> = newState => {
      state = hookState = newState;
    };

    return [hookState, setState];
  }
};

export default mockReact;
