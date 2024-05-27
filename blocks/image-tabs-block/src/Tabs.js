import { __ } from '@wordpress/i18n';

export default function Tabs( { attributes } ) {
	const {
		tab1ImageUrl,
		tab1Title,
		tab1Description,
		tab1Link,
		tab2ImageUrl,
		tab2Title,
		tab2Description,
		tab2Link,
	} = attributes;

	return (
		<div className="__image_tabs">
			<div
				role="tablist"
				aria-label={ __( 'Tabs', 'campuspress-child' ) }
				className="__images __image_tabs_block_tablist"
			>
				<button
					role="tab"
					aria-selected="true"
					aria-controls="panel-1"
					id="tab-1"
					style={
						tab1ImageUrl ? { backgroundImage: `url(${ tab1ImageUrl })` } : {}
					}
				>
					<span>{ __( '01', 'campuspress-child' ) }</span>
				</button>
				<button
					role="tab"
					aria-selected="false"
					aria-controls="panel-2"
					id="tab-2"
					style={
						tab2ImageUrl ? { backgroundImage: `url(${ tab2ImageUrl })` } : {}
					}
				>
					<span>{ __( '02', 'campuspress-child' ) }</span>
				</button>
			</div>

			<div
				id="panel-1"
				role="tabpanel"
				tabIndex="0"
				aria-labelledby="tab-1"
				className="__content"
			>
				<p>
					<span className="__bold">{ tab1Title }</span>
					{ tab1Description }
				</p>
				<a
					className="wp-block-button__link wp-element-button"
					href={ tab1Link }
				>
					{ __( 'Read More', 'campuspress-child' ) }
				</a>
			</div>

			<div
				id="panel-2"
				role="tabpanel"
				tabIndex="0"
				aria-labelledby="tab-2"
				className="__content is-hidden"
			>
				<p>
					<span className="__bold">{ tab2Title }</span>
					{ tab2Description }
				</p>
				<a
					className="wp-block-button__link wp-element-button"
					href={ tab2Link }
				>
					{ __( 'Read More', 'campuspress-child' ) }
				</a>
			</div>
		</div>
	);
}
