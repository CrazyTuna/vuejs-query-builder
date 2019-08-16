var OperationComponent = Vue.extend({
    name: 'operation',
    props: ['fields', 'fieldTypes',  'op'],
    template: '#operation-template',
    computed: {
        selectedFieldItem: function () {
            var self = this;
            return this.fields.filter(function (o) {
                return o.name === self.op.selectedField;
            })[0];
        },
        filteredOperators: function () {
            if (this.selectedFieldItem) {
                var self = this;
                return this.fieldTypes.filter(function (o) {
                    return o.name === self.selectedFieldItem.type;
                })[0].operators;
            }
            return [];
        },
        query: function () {
            return '<label class="text-success">' + this.op.selectedField + '</label><label>&nbsp;' + this.op.selectedOperator + '&nbsp;</label><label class="text-danger">' + this.op.selectedValue + '</label>';
        },
        rawQuery: function () {
            if (this.op.type === "expr") {
                return this.op.selectedField + " " + this.op.selectedOperator + " '" + this.op.selectedValue + "'";
            }
            return '(' + this.$refs.items.map(function (item) {
                return item.rawQuery;
            }).join(' ' + this.op.type + ' ') + ')';
        }
    },
    methods: {
        addRule: function () {
            this.op.items.push({ type: "expr", selectedField: {}, selectedOperator: {}, selectedValue: '' });
        },
        addGroup: function () {
            this.op.items.push({ type: "AND", items: [{ type: "expr", selectedField: {}, selectedOperator: {}, selectedValue: '' }] });
        },
        removeItem: function (index) {
            this.op.items.splice(index, 1)
        }
    }
});
Vue.component('operation', OperationComponent);
