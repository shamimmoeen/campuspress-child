import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { Image } from '@10up/block-components';
import { Button } from '@wordpress/components';
import './editor.scss';
import Tabs from './Tabs';

export default function Edit( { attributes, setAttributes } ) {
	const {
		tab1Image,
		tab1Title,
		tab1Description,
		tab1Link,
		tab2Image,
		tab2Title,
		tab2Description,
		tab2Link,
	} = attributes;

	const handleTab1ImageSelect = ( image ) => {
		setAttributes( { tab1Image: image.id } );

		const {
			sizes: {
				full: { url },
			},
		} = image;

		setAttributes( { tab1ImageUrl: url } );
	};

	const handleTab2ImageSelect = ( image ) => {
		setAttributes( { tab2Image: image.id } );

		const {
			sizes: {
				full: { url },
			},
		} = image;

		setAttributes( { tab2ImageUrl: url } );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Tab 1 Data', 'campuspress-child' ) }>
					<div className="components-base-control __image_field">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								{ __( 'Image', 'campuspress-child' ) }
							</label>

							<Image
								id={ tab1Image }
								size="medium"
								onSelect={ handleTab1ImageSelect }
								labels={ {
									title: '',
								} }
							/>

							{ tab1Image && (
								<Button
									variant="link"
									isDestructive
									onClick={ () =>
										setAttributes( { tab1Image: null, tab1ImageUrl: null } )
									}
								>
									{ __( 'Remove', 'campuspress-child' ) }
								</Button>
							) }
						</div>
					</div>

					<TextControl
						label={ __( 'Title', 'campuspress-child' ) }
						value={ tab1Title }
						onChange={ ( value ) => setAttributes( { tab1Title: value } ) }
					/>
					<TextareaControl
						label={ __( 'Description', 'campuspress-child' ) }
						value={ tab1Description }
						onChange={ ( value ) => setAttributes( { tab1Description: value } ) }
					/>
					<TextControl
						type="url"
						label={ __( 'Link', 'campuspress-child' ) }
						value={ tab1Link }
						onChange={ ( value ) => setAttributes( { tab1Link: value } ) }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Tab 2 Data', 'campuspress-child' ) }
					initialOpen={ false }
				>
					<div className="components-base-control __image_field">
						<div className="components-base-control__field">
							<label className="components-base-control__label">
								{ __( 'Image', 'campuspress-child' ) }
							</label>

							<Image
								id={ tab2Image }
								size="medium"
								onSelect={ handleTab2ImageSelect }
								labels={ {
									title: '',
								} }
							/>

							{ tab2Image && (
								<Button
									variant="link"
									isDestructive
									onClick={ () =>
										setAttributes( { tab2Image: null, tab2ImageUrl: null } )
									}
								>
									{ __( 'Remove', 'campuspress-child' ) }
								</Button>
							) }
						</div>
					</div>
					<TextControl
						label={ __( 'Title', 'campuspress-child' ) }
						value={ tab2Title }
						onChange={ ( value ) => setAttributes( { tab2Title: value } ) }
					/>
					<TextareaControl
						label={ __( 'Description', 'campuspress-child' ) }
						value={ tab2Description }
						onChange={ ( value ) => setAttributes( { tab2Description: value } ) }
					/>
					<TextControl
						type="url"
						label={ __( 'Link', 'campuspress-child' ) }
						value={ tab2Link }
						onChange={ ( value ) => setAttributes( { tab2Link: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Tabs attributes={ attributes } />
		</div>
	);
}
