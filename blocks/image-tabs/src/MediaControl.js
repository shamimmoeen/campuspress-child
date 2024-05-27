import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function MediaControl( { previewUrl, handleSelect, handleRemove } ) {
	return (
		<BaseControl
			__nextHasNoMarginBottom
			label={ __( 'Image', 'campuspress-child' ) }
		>
			<div className="__custom_media_control">
				{ previewUrl ? (
					<>
						<div className="__custom_media_preview">
							<img src={ previewUrl } alt={ '' } />
						</div>

						<Button
							variant="link"
							isDestructive
							onClick={ handleRemove }
						>
							{ __( 'Remove', 'campuspress-child' ) }
						</Button>
					</>
				) : (
					<MediaUpload
						onSelect={ handleSelect }
						allowedTypes={ [ 'image' ] }
						render={ ( { open } ) => (
							<Button
								onClick={ open }
								variant={ 'secondary' }
								size={ 'compact' }
							>
								{ __( 'Media Library', 'campuspress-child' ) }
							</Button>
						) }
					/>
				) }
			</div>
		</BaseControl>
	);
}
