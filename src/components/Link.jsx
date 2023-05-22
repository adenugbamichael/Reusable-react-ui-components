/* eslint-disable react/prop-types */
import classNames from "classnames"
import useNavigation from "../hooks/use-navigation"

function Link({ to, children, className, activeClasName }) {
  const { navigate, currentPath } = useNavigation()

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClasName
  )

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return
    }
    event.preventDefault()

    navigate(to)
  }
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
