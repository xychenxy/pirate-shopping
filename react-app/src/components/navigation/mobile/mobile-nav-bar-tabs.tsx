import { useAuth0 } from "@auth0/auth0-react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

import { MobileNavBarTabsContainer } from "./mobile-nav-bar.styled";

type MobileNavBarTabsProps = {
	handleClick: () => void;
};
export const MobileNavBarTabs = ({ handleClick }: MobileNavBarTabsProps) => {
	const { isAuthenticated } = useAuth0();

	return (
		<MobileNavBarTabsContainer>
			<MobileNavBarTab
				path="/shop"
				label="Shop"
				handleClick={handleClick}
			/>
			<MobileNavBarTab
				path="/checkout"
				label="Checkout"
				handleClick={handleClick}
			/>

			{isAuthenticated && (
				<>
					<MobileNavBarTab
						path="/profile"
						label="Profile"
						handleClick={handleClick}
					/>
					{/* <MobileNavBarTab
						path="/admin"
						label="Admin"
						handleClick={handleClick}
					/> */}
				</>
			)}
		</MobileNavBarTabsContainer>
	);
};
