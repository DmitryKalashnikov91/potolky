import { links } from "./Header"


const MobileHeader = () => {
  return (
    <nav>
        <ul>
    {links.map((item) => (
        <li key={item.id}>{item.title}</li>
    ))}</ul>
    </nav>
  )
}

export default MobileHeader