Vue.directive('sortable', {
    twoWay: true,
    params: ['items'],
    bind: function () {
        var self = this;
        this.sortable = Sortable.create(this.el, {
            draggable: 'li',
            group: 'operationGroup',
            handle: '.btn-drag',
            animation: 150,
            //forceFallback:true,
            onAdd: function (evt) {
                // We are not manipulating the DOM so remove the DOm element
                evt.item.remove();
                self.vm.$nextTick(function () {
                    // Add the element after the next tick
                    self.params.items.splice(evt.newIndex, 0, self.vm.$root.$get('sortableMovedItem'));
                });
            },
            onUpdate: function (/**Event*/evt) {
                // We are not manipulating the DOM so remove the DOm element
                evt.item.remove();
                // Remove the item at the old position                
                var removed = self.params.items.splice(evt.oldIndex, 1);
                self.vm.$nextTick(function () {
                    // Readd the element after the next tick
                    self.params.items.splice(evt.newIndex, 0, removed[0]);
                });
            },
            onRemove: function (evt) {
                self.vm.$root.$set('sortableMovedItem', self.params.items.splice(evt.oldIndex, 1)[0]);
            }
        });
    },
    update: function (value) {
        var toto = "";
        //this.set(input.value);
    },
    unbind: function () {
        // destroy the component when not used anymore
        this.sortable.destroy();
    }
});