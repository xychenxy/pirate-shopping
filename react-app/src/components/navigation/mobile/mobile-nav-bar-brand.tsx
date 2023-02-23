import { NavLink } from "react-router-dom";
import {
	MobileNavBarBrandContainer,
	MobileNavBarBrandLogo,
} from "./mobile-nav-bar.styled";
import { ReactComponent as Logo } from "../../../assets/pirate-ship.svg";

type MobileNavBarBrandProps = {
	handleClick: () => void;
};
export const MobileNavBarBrand = ({ handleClick }: MobileNavBarBrandProps) => {
	return (
		<MobileNavBarBrandContainer onClick={handleClick}>
			<NavLink to="/">
				<MobileNavBarBrandLogo>
					<Logo />
				</MobileNavBarBrandLogo>
			</NavLink>
		</MobileNavBarBrandContainer>
	);
};
