import { MobileNavBarToggleContainer } from "./mobile-nav-bar.styled";

type NavBarTabProps = {
	icon: string;
	handleClick: () => void;
};

export const MobileMenuToggleButton = ({
	icon,
	handleClick,
}: NavBarTabProps) => {
	return (
		<MobileNavBarToggleContainer
			className="material-icons"
			id="mobile-menu-toggle-button"
			onClick={handleClick}
		>
			{icon}
		</MobileNavBarToggleContainer>
	);
};
