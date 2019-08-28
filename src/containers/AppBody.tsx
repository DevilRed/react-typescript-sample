import React from "react";

// anothe way to set expected prop types
const AppBody: React.FC<{ header: string; quote?: string }> = ({
	header,
	quote,
	children
}) => (
		<section className="app-body">
			<section className="body-content">
				<h2>{header}</h2>
				{quote && <blockquote>{quote}</blockquote>}
			</section>
			{children && children }
		</section>
	);

export default AppBody;
