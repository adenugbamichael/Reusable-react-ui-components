/* eslint-disable react/prop-types */
const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>
  })

  return (
    <div>
      {" "}
      <div>Select...</div>
      <div>{renderedOptions}</div>
    </div>
  )
}

export default Dropdown
