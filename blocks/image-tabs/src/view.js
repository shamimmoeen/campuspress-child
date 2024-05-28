import TabsAutomatic from './tabsAutomatic';

// Initialize tabs.
window.addEventListener( 'load', function() {
	const tabLists = document.querySelectorAll( '.__automatic_image_tabs' );

	tabLists.forEach( ( tabList ) => {
		new TabsAutomatic( tabList );
	} );
} );
