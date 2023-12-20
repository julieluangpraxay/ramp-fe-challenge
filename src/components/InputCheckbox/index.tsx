import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        htmlFor={inputId}
        className={`RampInputCheckbox--label ${checked ? "RampInputCheckbox--label-checked" : ""} ${
          disabled ? "RampInputCheckbox--label-disabled" : ""
        }`}
      />
    </div>
  )
}
