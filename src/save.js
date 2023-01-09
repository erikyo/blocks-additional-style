import classnames from 'classnames';
import { capitalToloDash } from './utils/fn';

/**
 * I know this is not the save function but is a hook to change some data before
 * Add custom dataset to element before save.
 *
 * @param {Object} extraProps Block element.
 * @param {Object} blockType  Blocks object.
 * @param {Object} attributes Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
export const addExtraProps = ( extraProps, blockType, attributes ) => {
	const { additionalCSS, additionalClasses } = attributes;

	const classes = [];

	if ( additionalClasses.length ) {
		additionalClasses.forEach( ( cssClass ) => {
			if ( cssClass[ 0 ] === 'sscAbsolute' ) {
				additionalCSS.position = 'absolute';
			} else if ( cssClass[ 0 ] === 'sscHide' ) {
				additionalCSS.opacity = 0;
			}
			classes.push( capitalToloDash( cssClass[ 0 ] ) );
		} );
	}

	// add all the custom properties to the element
	Object.assign( extraProps, {
		style: { ...additionalCSS, ...extraProps.style },
		className: classnames( extraProps.className, ...classes ),
	} );

	return extraProps;
};
