import { useBlockProps } from '@wordpress/block-editor';
import Tabs from './Tabs';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<Tabs attributes={ attributes } />
		</div>
	);
}
