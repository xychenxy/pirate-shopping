import { ButtonWrap, ButtonWrapProp } from "./buttons.styled";

type BasicButtonProps = ButtonWrapProp &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BasicButton = ({
	onClick,
	children,
	...otherProps
}: BasicButtonProps) => {
	return (
		<ButtonWrap onClick={onClick} {...otherProps}>
			{children}
		</ButtonWrap>
	);
};
