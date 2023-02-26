import { MobileNavBarToggleContainer } from "./mobile-nav-bar.styled";
import { ReactComponent as MenuLogo } from "../../../assets/menu.svg";

type NavBarTabProps = {
	// icon: string;
	handleClick: () => void;
};

export const MobileMenuToggleButton = ({ handleClick }: NavBarTabProps) => {
	return (
		<MobileNavBarToggleContainer
			className="material-icons"
			id="mobile-menu-toggle-button"
			onClick={handleClick}
		>
			<MenuLogo />
		</MobileNavBarToggleContainer>
	);
};
