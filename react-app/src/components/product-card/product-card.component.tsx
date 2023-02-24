import { FC } from "react";
import {
	Footer,
	Name,
	Price,
	ProductCartContainer,
} from "./product-card.styled";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import { BasicButton } from "../buttons/basic-button";
import { COLORS } from "../../utils/constant/colors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type ProductCardProps = {
	product: CategoryItem;
};
const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);

	const { name, price, imageUrl } = product;

	const addProductToCard = () => {
		dispatch(addItemToCart(cartItems, product));
	};
	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={name} />
			<BasicButton onClick={addProductToCard} color={COLORS.BLACK}>
				Add to card
			</BasicButton>
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Footer>
		</ProductCartContainer>
	);
};

export default ProductCard;
