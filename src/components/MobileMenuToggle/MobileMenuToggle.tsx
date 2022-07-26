import { List, X } from "phosphor-react";
import { useContext } from "react";
import { Context, MenuContextType } from "../../contexts/MobileMenuContext";

export default function MobileMenuToggle() {
  const context = useContext<MenuContextType>(Context);

  function handleToggle() {
    context.setMenuState(!context.menuState);
  }

  return (
    <a className="flex min-w-[46] min-h-46" onClick={handleToggle}>
      {context.menuState ? <X size={40} color={"#fff"} /> : <List size={40} color={"#fff"} />}
    </a>
  );
}
