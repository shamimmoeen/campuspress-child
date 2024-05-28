// tabsAutomatic.js
class TabsAutomatic {
	constructor( containerNode ) {
		this.containerNode = containerNode;
		this.tablistNode = this.containerNode.querySelector( '[role=tablist]' );
		this.tabs = Array.from( this.tablistNode.querySelectorAll( '[role=tab]' ) );
		this.tabPanels = this.tabs.map( ( tab ) =>
			this.containerNode.querySelector(
				`#${ tab.getAttribute( 'aria-controls' ) }`,
			),
		);

		this.firstTab = this.tabs[ 0 ];
		this.lastTab = this.tabs[ this.tabs.length - 1 ];

		// Store references to bound event handlers.
		this.boundKeydownHandler = this.onKeydown.bind( this );
		this.boundClickHandler = this.onClick.bind( this );

		this.tabs.forEach( ( tab ) => {
			tab.tabIndex = -1;
			tab.setAttribute( 'aria-selected', 'false' );

			tab.addEventListener( 'keydown', this.boundKeydownHandler );
			tab.addEventListener( 'click', this.boundClickHandler );
		} );

		this.setSelectedTab( this.firstTab, false );
	}

	// Add removeEventListeners method.
	removeEventListeners() {
		// Remove event listeners using stored references.
		this.tabs.forEach( ( tab ) => {
			tab.removeEventListener( 'keydown', this.boundKeydownHandler );
			tab.removeEventListener( 'click', this.boundClickHandler );
		} );
	}

	setSelectedTab( currentTab, setFocus = true ) {
		this.tabs.forEach( ( tab, index ) => {
			const tabPanel = this.tabPanels[ index ];

			if ( currentTab === tab ) {
				tab.setAttribute( 'aria-selected', 'true' );
				tab.removeAttribute( 'tabindex' );

				tabPanel.classList.remove( 'is-hidden' );

				if ( setFocus ) {
					tab.focus();
				}
			} else {
				tab.setAttribute( 'aria-selected', 'false' );
				tab.tabIndex = -1;

				tabPanel.classList.add( 'is-hidden' );
			}
		} );
	}

	setSelectedToPreviousTab( currentTab ) {
		if ( currentTab === this.firstTab ) {
			this.setSelectedTab( this.lastTab );
		} else {
			const index = this.tabs.indexOf( currentTab );
			this.setSelectedTab( this.tabs[ index - 1 ] );
		}
	}

	setSelectedToNextTab( currentTab ) {
		if ( currentTab === this.lastTab ) {
			this.setSelectedTab( this.firstTab );
		} else {
			const index = this.tabs.indexOf( currentTab );
			this.setSelectedTab( this.tabs[ index + 1 ] );
		}
	}

	/* EVENT HANDLERS */
	onKeydown( event ) {
		const tgt = event.currentTarget;
		let flag = false;

		switch ( event.key ) {
			case 'ArrowLeft':
				this.setSelectedToPreviousTab( tgt );
				flag = true;
				break;

			case 'ArrowRight':
				this.setSelectedToNextTab( tgt );
				flag = true;
				break;

			case 'Home':
				this.setSelectedTab( this.firstTab );
				flag = true;
				break;

			case 'End':
				this.setSelectedTab( this.lastTab );
				flag = true;
				break;

			default:
				break;
		}

		if ( flag ) {
			event.stopPropagation();
			event.preventDefault();
		}
	}

	onClick( event ) {
		this.setSelectedTab( event.currentTarget );
	}
}

export default TabsAutomatic;
