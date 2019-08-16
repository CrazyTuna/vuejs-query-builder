Vue.directive('switch', {
    twoWay: true,
    params: ['onText', 'offText'],
    priority: 1000,
    bind: function () {
        var self = this;
        this.switchEl = $(this.el)
            .bootstrapSwitch({onText : this.params.onText, offText : this.params.offText })
            .on('switchChange.bootstrapSwitch', function (event, state) {
                self.set(state ? self.params.onText : self.params.offText);
            });
    },
    update: function (value) {
        // set the new value and trigger the event.        
        this.switchEl.bootstrapSwitch('state', value === this.params.onText, true);
    },
    unbind: function () {
        // destroy the component when not used anymore
        this.switchEl.off().bootstrapSwitch('destroy');
    }
});