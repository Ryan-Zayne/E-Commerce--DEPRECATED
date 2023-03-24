const Card = ({ as = 'article', children, className }) => {
	const Element = as;
	return (
		<Element id="Card" className={className}>
			{children}
		</Element>
	);
};

const CardHeader = ({ children, className }) => (
	<header id="Card_Header" className={className}>
		{children}
	</header>
);

const CardBody = ({ children, className }) => (
	<div id="Card_Body" className={className}>
		{children}
	</div>
);

const CardFooter = ({ children, className }) => (
	<div id="Card_Footer" className={className}>
		{children}
	</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
