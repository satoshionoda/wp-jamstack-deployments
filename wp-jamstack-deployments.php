<?php

/**
 * Plugin Name: JAMstack Deployments MOD
 * Plugin URI: https://github.com/satoshionoda/wp-jamstack-deployments
 * Description: A WordPress plugin for JAMstack deployments on Netlify (and other platforms).
 * Author: Christopher Geary / modified by Satoshi Onoda
 * Version: 1.1.1-mod
 */

if (!defined('ABSPATH')) {
    exit;
}

define('YOHAK_jamstack_deployments_mod_FILE', __FILE__);
define('YOHAK_jamstack_deployments_mod_PATH', untrailingslashit(plugin_dir_path(__FILE__)));
define('YOHAK_jamstack_deployments_mod_URL', untrailingslashit(plugin_dir_url(__FILE__)));

require_once(YOHAK_jamstack_deployments_mod_PATH . '/src/App.php');

YOHAK\JAMstackDeployments\App::instance();
