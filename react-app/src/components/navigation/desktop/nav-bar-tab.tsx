import { NavBarTabContainer } from "./nav-bars.styled";

type NavBarTabProps = {
	path: string;
	label: string;
};
export const NavBarTab = ({ path, label }: NavBarTabProps) => {
	return (
		<NavBarTabContainer to={path} end>
			{label}
		</NavBarTabContainer>
	);
};
