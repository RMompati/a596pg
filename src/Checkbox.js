import {useReducer} from "react";

export function Checkbox() {
  const [checked, setChecked] = useReducer(
      (checked) => !checked,
      false
  )
  return (
      <>
        <label htmlFor="check">
          { checked ? "Checked" : "Not Checked" }
        </label>
        <input type="checkbox"
               name="check"
               id="check"
               onChange={setChecked}
        />
      </>
  );
}