Vue.directive('select', {
    twoWay: true,
    priority: 1000,
    params: ['options'],
    bind: function () {
        var self = this
        $(this.el)
            .select2({ width: '100%' })
            .on('focus', function () {
                $(this).select2('focus');
            })
            .on('change', function () {
                self.set(this.value);
            });
    },
    update: function (value) {
        // set the new value and trigger the event.
        $(this.el).val(value).trigger('change');
    },
    unbind: function () {
        // destroy the component when not used anymore
        $(this.el).off().select2('destroy')
    },
    paramWatchers: {
        options: function (val, oldVal) {
            // when options changes,reset the value.
            $(this.el).val(undefined).trigger('change');
        }
    }
});