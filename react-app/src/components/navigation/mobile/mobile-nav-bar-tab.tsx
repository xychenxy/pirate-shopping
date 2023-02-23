import { MobileNavBarTabNavLink } from "./mobile-nav-bar.styled";

type MobileNavBarTab = {
	path: string;
	label: string;
	handleClick: () => void;
};

export const MobileNavBarTab = ({
	path,
	label,
	handleClick,
}: MobileNavBarTab) => {
	return (
		<MobileNavBarTabNavLink onClick={handleClick} to={path} end>
			{label}
		</MobileNavBarTabNavLink>
	);
};
