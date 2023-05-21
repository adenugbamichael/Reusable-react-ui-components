/* eslint-disable react/prop-types */
import { useState } from "react"
const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false)
    // WHAT OPTION DID THE USR CLICK ON???
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  })

  return (
    <div>
      {" "}
      <div onClick={handleClick}>{value?.label || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
