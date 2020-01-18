import React from 'react';
import { css } from '@emotion/core';

const styles = css`
	.routeSkipHeading {
		position: relative;
	}
	a.routeSkipLink {
		display: inline-block;
		margin-left: -0.75em;
		opacity: 0;
		position: absolute;
		text-decoration: none;

		&:before {
			content: '⇽';
			display: block;
		}
	}

	.routeSkipLink:focus,
	.routeSkipLink:hover {
		opacity: 1;
	}
`;

// this will route the focus to the heading element on the page you select from the navigation menu and also allow the user to use it as a link back to where they were instead of starting from the top of the page.
const RouteHeading = ({ level = 1, targetID, children }) => {
	const Heading = `h${level}`;
	// making ^^ dynamic will apply the correct tag, h1, h2, etc depending on what element you are focused on
	return (
		<Heading css={styles} className='routeSkipHeading'>
			<a
				href={`#${targetID}`}
				id='skip-link'
				className='routeSkipLink'
				aria-label={`skip to ${targetID}`}
				title={`Skip to ${targetID}`}
			></a>
			{children}
		</Heading>
	);
};
export default RouteHeading;
