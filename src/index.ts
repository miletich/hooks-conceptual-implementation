import mockReact from "./mockReact";
import Counter from "./Counter";

console.log("Initial render");
const App = mockReact.render(Counter);

App.click();

console.log("Second render");
mockReact.render(Counter);
