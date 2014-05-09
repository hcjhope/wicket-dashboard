$('.gridster>ul').gridster({
    widget_selector: 'li.widget',
    widget_margins: [10, 10],
    widget_base_dimensions: [600, 330],
    min_cols: 2,
    draggable: {
        stop: function(e, ui) {
            ${stopBehavior};
        }
    },
    resize: {
        enabled: true,
        stop: function(e, ui, widget) {
            ${stopBehavior};
        }
    }
}).data('gridster');
