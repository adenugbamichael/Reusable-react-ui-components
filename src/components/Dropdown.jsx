/* eslint-disable react/prop-types */
import { useState } from "react"
const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(!isOpen)
    // WHAT OPTION DID THE USR CLICK ON???
    console.log(option)
  }

  const handleOptionClick = () => {
    setIsOpen(!isOpen)
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
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
