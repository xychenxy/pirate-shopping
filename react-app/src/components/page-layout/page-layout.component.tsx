import { NavBar } from "../navigation/desktop/nav-bar";
import { MobileNavBar } from "../navigation/mobile/mobile-nav-bar";
// import { PageFooter } from "./page-footer";

import {
	PageLayoutContainer,
	PageLayoutContainerContent,
} from "./page-layout.styled";

export const PageLayout = ({ children }: { children: React.ReactElement }) => {
	return (
		<PageLayoutContainer>
			<NavBar />
			<MobileNavBar />
			<PageLayoutContainerContent>{children}</PageLayoutContainerContent>
			{/* <PageFooter /> */}
		</PageLayoutContainer>
	);
};
