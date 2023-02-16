import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Footer,
	Name,
	Price,
	ProductCartContainer,
} from "./product-card.styled";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";

type ProductCardProps = {
	product: CategoryItem;
};
const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const { name, price, imageUrl } = product;

	const addProductToCard = () => {
		dispatch(addItemToCart(cartItems, product));
	};
	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={name} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCard}
			>
				Add to card
			</Button>
		</ProductCartContainer>
	);
};

export default ProductCard;
