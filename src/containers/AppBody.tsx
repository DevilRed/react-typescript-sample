// https://www.sohamkamani.com/blog/react/2018-08-22-using-react-with-typescript/
import React from "react";

// anothe way to set expected prop types
// typescript: type assertion
// to override its inferred type when you know beforehand what type of data is needed, ie:
// 'const name: variableType<someType>'
const AppBody: React.FC<{ header: string; quote?: string }> = ({
	header,
	quote,
	children
}) => {
	// type of event  (ie: MouseEventHandler, starting on: // line 727):
	// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6b5ceb41aafa8e41d0f99aabc910ebad5442c008/types/react/index.d.ts#L730

	// type of element being interacted with (starting on: line 28):
	// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6b5ceb41aafa8e41d0f99aabc910ebad5442c008/types/react/global.d.ts#L28

	// list event attribute types and what events they map (starting on: line 788):
	//  https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6b5ceb41aafa8e41d0f99aabc910ebad5442c008/types/react/index.d.ts#L788
	const myHandler:React.MouseEventHandler<HTMLDivElement> = (e) => {
		alert('some event');
	}
	return	(<section className="app-body" onClick={myHandler}>
			<section className="body-content">
				<h2>{header}</h2>
				{quote && <blockquote>{quote}</blockquote>}
			</section>
			{children && children }
		</section>)
};

export default AppBody;
