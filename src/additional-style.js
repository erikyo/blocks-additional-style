/**
 * WordPress Dependencies
 */
import { addFilter } from '@wordpress/hooks';

import { StyleAdvancedControls } from './admin/styleExtras';
import { editAttributes } from './admin/editAttributes';

import { addAttributes } from './blockAttributes';
import { addExtraProps } from './save';

addFilter(
	'blocks.registerBlockType',
	'sscEditor/add-attributes',
	addAttributes
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'sscEditor/addExtraProps',
	addExtraProps
);

addFilter(
	'editor.BlockEdit',
	'sscEditor/advancedStyleControls',
	StyleAdvancedControls
);

addFilter(
	'editor.BlockListBlock',
	'sscEditor/with-client-id-class-name',
	editAttributes
);
