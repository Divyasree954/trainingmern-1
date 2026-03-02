import User from "./components/User";
import { State } from "./hooks/State";
import Form from "./hooks/form";
const App = () => {
  return (
    <>
    <User
      name="Dsree"
      age={19}
      skills={["React", "JavaScript", "Node.js","Express.js","MongoDB"]}
    />
    <hr />
      <State />
    <hr />
      <Form />
</>
  );
};

export default App;

