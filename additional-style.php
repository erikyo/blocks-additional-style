<?php
/**
 * Plugin Name: Additional Style
 * Plugin URI: https://github.com/erikyo/blocks-additional-style
 * Description: This plugin provides an additional panel to add styles to the gutenberg blocks
 * Version: 0.0.1
 * Author: codekraft
 */
function ssc_editor_scripts() {
	$asset = include __DIR__ . '/build/additional-style.asset.php';
	wp_enqueue_script( 'additional-style', plugin_dir_url( __FILE__ ) . 'build/additional-style.js', $asset['dependencies'] );
}

add_action( 'enqueue_block_editor_assets', 'ssc_editor_scripts' );
