import { PageLayout, Loader } from "./page-loader.styled";

export const PageLoader = () => {
	const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

	return (
		<PageLayout>
			<Loader>
				<img src={loadingImg} alt="Loading..." />
			</Loader>
		</PageLayout>
	);
};
