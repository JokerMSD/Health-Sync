import Toggle from "react-toggle";
import Style from "./style.module.scss";
import { FiMenu } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <header className={Style.Header}>
          <div className={Style.headerContainer}>
            <button className={Style.menuBtn}>
              <FiMenu className={Style.menuIcon}/>
            </button>
            <label>
          <Toggle
            defaultChecked={darkMode}
            icons={{
              checked: <MdNightlight className={Style.nightMode} />,
              unchecked: <BsFillSunFill className={Style.dayMode}/>,
            }}
            onChange={handleDarkMode}
          />
        </label>
          </div>
      </header>
    </>
  );
};
