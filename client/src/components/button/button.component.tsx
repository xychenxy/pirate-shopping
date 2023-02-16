import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
	ButtonSpinner,
} from "./button.styled";
export enum BUTTON_TYPE_CLASSES {
	base = "base",
	google = "google-sign-in",
	inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
	return {
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType];
};

type ButtonProps = {
	buttonType?: BUTTON_TYPE_CLASSES;
	isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	buttonType,
	children,
	isLoading,
	...otherProps
}: ButtonProps) => {
	const CustomButton = getButton(buttonType);

	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
