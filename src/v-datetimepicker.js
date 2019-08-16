Vue.directive('datetimepicker', {
    twoWay: true,
    priority: 1000,
    bind: function () {
        var self = this;
        this.datetimeEl = $(this.el)
            .datetimepicker({
                useCurrent: false,
                format: 'DD/MM/YYYY'
            })
            .on('dp.change', function (e) {
                self.set(self.inputEl.val());
            });

        this.inputEl = this.datetimeEl.find('input')
            .on("focus", function () {
                self.datetimeEl.data("DateTimePicker").show();
            });
    },
    update: function (value) {
        // set the new value and trigger the event.
        this.inputEl.val(value).trigger('change');
    },
    unbind: function () {
        // destroy the component when not used anymore
        this.datetimeEl.off().datetimepicker('destroy');
    }
});
