import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import MediaControl from './MediaControl';
import Tabs from './Tabs';
import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		uniqueId,
		tab1ImageMediumUrl,
		tab1Title,
		tab1Description,
		tab1Link,
		tab2ImageMediumUrl,
		tab2Title,
		tab2Description,
		tab2Link,
	} = attributes;

	useEffect( () => {
		if ( ! uniqueId ) {
			setAttributes( { uniqueId: clientId } );
		}
	}, [] );

	const onSelectTab1Image = ( media ) => {
		const {
			sizes: {
				full: { url: fullUrl },
				medium: { url: mediumUrl },
			},
		} = media;

		setAttributes( { tab1ImageUrl: fullUrl, tab1ImageMediumUrl: mediumUrl } );
	};

	const onSelectTab2Image = ( media ) => {
		const {
			sizes: {
				full: { url: fullUrl },
				medium: { url: mediumUrl },
			},
		} = media;

		setAttributes( { tab2ImageUrl: fullUrl, tab2ImageMediumUrl: mediumUrl } );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Tab 1 Data', 'campuspress-child' ) }>
					<MediaControl
						previewUrl={ tab1ImageMediumUrl }
						handleSelect={ ( media ) => onSelectTab1Image( media ) }
						handleRemove={ () =>
							setAttributes( {
								tab1ImageMediumUrl: null,
								tab1ImageUrl: null,
							} )
						}
					/>
					<TextControl
						label={ __( 'Title', 'campuspress-child' ) }
						value={ tab1Title }
						onChange={ ( value ) =>
							setAttributes( { tab1Title: value } )
						}
					/>
					<TextareaControl
						label={ __( 'Description', 'campuspress-child' ) }
						value={ tab1Description }
						onChange={ ( value ) =>
							setAttributes( { tab1Description: value } )
						}
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
					<MediaControl
						previewUrl={ tab2ImageMediumUrl }
						handleSelect={ ( media ) => onSelectTab2Image( media ) }
						handleRemove={ () =>
							setAttributes( {
								tab2ImageMediumUrl: null,
								tab2ImageUrl: null,
							} )
						}
					/>
					<TextControl
						label={ __( 'Title', 'campuspress-child' ) }
						value={ tab2Title }
						onChange={ ( value ) =>
							setAttributes( { tab2Title: value } )
						}
					/>
					<TextareaControl
						label={ __( 'Description', 'campuspress-child' ) }
						value={ tab2Description }
						onChange={ ( value ) =>
							setAttributes( { tab2Description: value } )
						}
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
