import {
	BackgroundImage,
	DirectoryItemContainer,
	Body,
} from "./directory-item.styled";
import { DirectoryCategory } from "../directory/directory.component";
import { useNavigate } from "react-router-dom";

type CategoryItemProps = {
	category: DirectoryCategory;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
	const { imageUrl, title } = category;

	const navigate = useNavigate();

	const onNavigateHandler = () => navigate("shop/" + title);

	return (
		<DirectoryItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default CategoryItem;
