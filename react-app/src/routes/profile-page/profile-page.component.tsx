import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout } from "../../components/page-layout/page-layout.component";

import {
	ContentLayout,
	ContentLayoutBody,
	ProfileGridContainer,
	ProfileGridContainerHeader,
	ProfileGridContainerImage,
	ProfileGridContainerHeadline,
	ProfileGridContainerProfileTitle,
	ProfileGridContainerProfileDescription,
} from "./profile-page.styled";

export const ProfilePage = () => {
	const { user } = useAuth0();

	if (!user) {
		return null;
	}

	return (
		<PageLayout>
			<ContentLayout>
				<ContentLayoutBody>
					<ProfileGridContainer>
						<ProfileGridContainerHeader>
							<ProfileGridContainerImage
								src={user.picture}
								alt="Profile"
							/>
							<ProfileGridContainerHeadline>
								<ProfileGridContainerProfileTitle>
									{user.name}
								</ProfileGridContainerProfileTitle>
								<ProfileGridContainerProfileDescription>
									{user.email}
								</ProfileGridContainerProfileDescription>
							</ProfileGridContainerHeadline>
						</ProfileGridContainerHeader>
					</ProfileGridContainer>
				</ContentLayoutBody>
			</ContentLayout>
		</PageLayout>
	);
};
