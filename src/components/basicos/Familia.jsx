import React, { cloneElement } from 'react';

export default props => {
	return (
		<div>
			{ 
				// React.Children.map(props.children, (child, index) => 
				// 	cloneElement(child, {...props, key: index})
				// )
				// OU
				props.children.map((child, index) => 
					cloneElement(child, {...props, key: index})
				)
			}
		</div>
	);
};