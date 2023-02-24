import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from "../../components/navigation/desktop/nav-bar";
import { MobileNavBar } from "../../components/navigation/mobile/mobile-nav-bar";
import { PageLayout } from "../../components/page-layout/page-layout.component";

import {
	ContentLayout,
	ContentLayoutTitle,
	ContentLayoutBody,
	PageLayoutContainer,
	PageLayoutContent,
} from "./callback-page.styled";

export const CallbackPage = () => {
	const { error } = useAuth0();

	if (error) {
		return (
			<PageLayout>
				<ContentLayout>
					<ContentLayoutTitle id="page-title">
						Error
					</ContentLayoutTitle>
					<ContentLayoutBody>
						<p id="page-description">
							<span>{error?.message}</span>
						</p>
					</ContentLayoutBody>
				</ContentLayout>
			</PageLayout>
		);
	}

	return (
		<PageLayoutContainer>
			<NavBar />
			<MobileNavBar />
			<PageLayoutContent />
		</PageLayoutContainer>
	);
};
