<?php
/**
 * Campuspress-child Theme functions and definitions.
 *
 * @link    https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package campuspress-child
 */

add_action( 'wp_enqueue_scripts', 'campuspress_child_enqueue_styles' );

/**
 * Enqueue scripts and styles.
 */
function campuspress_child_enqueue_styles() {
	wp_enqueue_style( 'campuspress-flex-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'campuspress-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[ 'campuspress-flex-style' ]
	);
}

add_action( 'init', 'campuspress_child_register_blocks' );

/**
 * Register the custom blocks.
 */
function campuspress_child_register_blocks() {
	// TODO: Check the translation of our child theme.
	// load_child_theme_textdomain( 'campuspress-child', get_stylesheet_directory() . '/languages' );

	// Register the block 'Image Tabs'.
	register_block_type( get_stylesheet_directory() . '/blocks/image-tabs/build' );
}
