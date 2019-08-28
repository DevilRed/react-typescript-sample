import React from "react";

import "./AppHeader.css";
import AppHeaderNavLink, { NavLink } from "../components/AppHeaderNavLink";

// define our AppHeader properties that will be passed into the component
export type AppHeaderProps = {
	title: string;
	description: string;
	links: NavLink[];
};

// FC = functional component
// set the component type the same of expected props
// <type> = type assertion, when what type of data is needed beforehand
const AppHeader: React.FC<AppHeaderProps> = React.memo(
	({ title, description, links }) => {// set the expected props to be passed in the component
		return (
			<header className="app-header">
				<section className="app-title">
					<h1>{title}</h1>
					<small>{description}</small>
				</section>
				<span className="fill-space" />
				<section className="app-links">
					{links &&
						links.map((link: NavLink) => (
							<AppHeaderNavLink
								label={link.label}
								route={link.route}
								key={link.label}
							/>
						))}
				</section>
			</header>
		);
	}
);

export default AppHeader;