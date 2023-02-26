import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { PageLayout } from "../../components/page-layout/page-layout.component";
import Spinner from "../../components/spinner/spinner.component";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProfileAsync } from "../../store/profile/profile.action";
import {
	selectProfileData,
	selectProfileIsLoading,
} from "../../store/profile/profile.selector";
import { ProfileDataProps } from "../../store/profile/profile.reducer";

import {
	ContentLayout,
	UserInfoContainer,
	PurchaseHistory,
	UserImage,
	UserDetail,
	ItemContainer,
} from "./profile-page.styled";

export const ProfilePage = () => {
	const dispatch = useAppDispatch();
	const profileData = useAppSelector(selectProfileData);
	const isLoading = useAppSelector(selectProfileIsLoading);

	const [ordersData, setOrdersData] = useState<ProfileDataProps[]>([]);

	const { user } = useAuth0();

	if (!user) return null;

	useEffect(() => {
		if (user?.email) {
			dispatch(fetchProfileAsync(user.email));
		}
	}, [user]);

	useEffect(() => {
		setOrdersData(profileData);
	}, [profileData]);

	return (
		<PageLayout>
			<ContentLayout>
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<UserInfoContainer>
							<UserImage src={user?.picture} alt="Profile" />
							<UserDetail>
								<p>{user?.name}</p>
								<p>{user?.email}</p>
							</UserDetail>
						</UserInfoContainer>

						<PurchaseHistory>
							<table>
								<thead>
									<tr>
										<th>Order ID</th>
										<th>Items</th>
										<th>Status</th>
										<th>Subtotal</th>
									</tr>
								</thead>
								<tbody>
									{ordersData.map((order) => {
										return (
											<tr>
												<td>{order.order_id}</td>
												<td>
													{order.items.map((item) => {
														return (
															<ItemContainer>
																<p>
																	{item.name}
																</p>
																<p>
																	Price: $
																	{item.price}
																</p>
																<p>
																	Quantity:{" "}
																	{
																		item.quantity
																	}
																</p>
															</ItemContainer>
														);
													})}
												</td>
												<td>{order.status}</td>
												<td>${order.subtotal}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</PurchaseHistory>
					</>
				)}
			</ContentLayout>
		</PageLayout>
	);
};
