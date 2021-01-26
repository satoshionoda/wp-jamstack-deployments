;(function ($, window, document, undefined) {
    $(function () {
        
        var image = $('.wp-jamstack-deployments-mod-badge img');
        var imageSrc = image.prop('src');
        var refreshTimout = null;
        
        var updateNetlifyBadgeUrl = function () {
            if (!image.length) {
                return;
            }
            var d = new Date();
            image.prop('src', imageSrc + '?v=s_' + d.getTime());
            refreshTimout = setTimeout(updateNetlifyBadgeUrl, 15000);
        };

        refreshTimout = setTimeout(updateNetlifyBadgeUrl, 15000);
        
        $('.wp-jamstack-deployments-mod-button').click(function (e) {
            console.log(wpjd);
            e.preventDefault();
            $.ajax({
                type: 'POST',
                url: wpjd_mod.ajaxurl,
                data: {
                    action: 'wp_jamstack_deployments_mod_manual_trigger',
                    security: wpjd_mod.deployment_button_nonce,
                },
                dataType: 'json',
                success: updateNetlifyBadgeUrl,
            });
            clearTimeout(refreshTimout);
        });

    });
})(jQuery, window, document);
