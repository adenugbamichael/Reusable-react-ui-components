/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel"

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      console.log("event.target")
    }

    document.addEventListener("click", handler, true)

    return () => {
      document.removeEventListener("click", handler, true)
    }
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  window.timeTwo = performance.now()
  const handleOptionClick = (option) => {
    window.timeOne = performance.now()
    // CLOSE DROPDOWN
    setIsOpen(false)
    // WHAT OPTION DID THE USR CLICK ON???
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div className='w-48 relative'>
      {" "}
      <Panel
        className='flex justify-between items-center cursor-pointer '
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full '>{renderedOptions}</Panel>
      )}
    </div>
  )
}

export default Dropdown
