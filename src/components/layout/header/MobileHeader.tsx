import { links } from "./Header"


const MobileHeader = () => {
  return (
    <nav>
        <ul className="pt-2">
    {links.map((item) => (
        <li key={item.id} className="pb-5 ps-8">{item.title}</li>
    ))}</ul>
    </nav>
  )
}

export default MobileHeader