import { PageLayout } from "../../components/page-layout/page-layout.component";
import { NotFoundContainer } from "./not-found-page.styled";

export const NotFoundPage = () => {
	return (
		<PageLayout>
			<NotFoundContainer>
				<h1>404 Not Found</h1>
			</NotFoundContainer>
		</PageLayout>
	);
};
