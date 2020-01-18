import React, { useState, useRef, useEffect } from 'react';
// import uuid from 'uuid';

import './dropdown.scss';

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
	// useRef() is part of the React package and allows you to create references to areas for focus management. It marks an element as important for focus.
	const activatorRef = useRef(null);
	const dropdownListRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const clickHandler = () => {
		setIsOpen(!isOpen);
	};

	const keyHandler = e => {
		if (e.key === 'Escape' && isOpen) {
			setIsOpen(false);
		}
	};

	const clickOutsideHandler = e => {
		// e.target
		if (
			dropdownListRef.current.contains(e.target) ||
			activatorRef.current.contains(e.target)
		) {
			return;
		}
		setIsOpen(false);
	};
	useEffect(() => {
		if (isOpen) {
			dropdownListRef.current.querySelector('a').focus();

			document.addEventListener('mousedown', clickOutsideHandler);
		} else {
			document.addEventListener('mousedown', clickOutsideHandler);
		}
	}, [isOpen]);
	return (
		<div className='dropdown-wrap' onKeyUp={keyHandler}>
			{/* good to use the aria-haspopup attribute because in a screen reader it will say there is something associated with this button that you will interact with. Which is a dropdown menu in our case. */}
			<button
				aria-haspopup='true'
				aria-controls='dropdown1' //would usually make this dynamic
				onClick={clickHandler}
				ref={activatorRef}
				className='dropdown-activator'
			>
				{activatorText}
			</button>
			<ul
				id='dropdown1'
				className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
				// if dropdown (state) is open set class to active if not pass an empty string so it doesn't add a css class.
				ref={dropdownListRef}
			>
				{items.map((item, index) => {
					return (
						<li key={index}>
							<a href={item.url}>item.text</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Dropdown;
