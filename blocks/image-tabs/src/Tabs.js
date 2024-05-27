import { __ } from '@wordpress/i18n';

export default function Tabs( { attributes } ) {
	const {
		uniqueId,
		tab1ImageUrl,
		tab1Title,
		tab1Description,
		tab1Link,
		tab2ImageUrl,
		tab2Title,
		tab2Description,
		tab2Link,
		ariaLabel
	} = attributes;

	const tab1Id = `tab-1-${ uniqueId }`;
	const tab2Id = `tab-2-${ uniqueId }`;
	const panel1Id = `panel-1-${ uniqueId }`;
	const panel2Id = `panel-2-${ uniqueId }`;

	return (
		<div className="__image_tabs">
			<div
				role="tablist"
				aria-label={ ariaLabel }
				className="__images __image_tabs_block_tablist"
			>
				<button
					role="tab"
					aria-selected="true"
					aria-controls={ panel1Id }
					id={ tab1Id }
					style={
						tab1ImageUrl ? { backgroundImage: `url(${ tab1ImageUrl })` } : {}
					}
				>
					<span>{ __( '01', 'campuspress-child' ) }</span>
				</button>
				<button
					role="tab"
					aria-selected="false"
					aria-controls={ panel2Id }
					id={ tab2Id }
					tabIndex={ -1 }
					style={
						tab2ImageUrl ? { backgroundImage: `url(${ tab2ImageUrl })` } : {}
					}
				>
					<span>{ __( '02', 'campuspress-child' ) }</span>
				</button>
			</div>

			<div
				id={ panel1Id }
				role="tabpanel"
				tabIndex="0"
				aria-labelledby={ tab1Id }
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
				id={ panel2Id }
				role="tabpanel"
				tabIndex="0"
				aria-labelledby={ tab2Id }
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
