import './App.css';
import { FieldI } from "./components/RenderFields";
import FormFields from './components/FormFields';

function App() {
  const config = [
    {
      id: "first_name",
      type: "inputText",
      label: "First Name",
      defaultValue: "Clown",
      required: true,
    },
    {
      id: "last_name",
      type: "inputText",
      label: "Last Name",
      required: true
    },
    {
      id: "email",
      type: "inputEmail",
      label: "Email",
      required: true
    },
    {
      id: "password",
      type: "inputPassword",
      label: "Password",
      required: true
    },
  ] as FieldI[]
  return (
    <div className="App">
        <FormFields
          fields={config}
          onSubmit={() => alert('Success')}
        />
    </div>
  );
}

export default App;
