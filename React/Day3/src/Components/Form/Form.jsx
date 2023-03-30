import BasicTextFields from "./InputField";

function Form({ setStudent }) {
  return (
    <div>
      <BasicTextFields setStudent={setStudent} />
    </div>
  );
}

export default Form;
