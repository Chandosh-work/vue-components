let PlanItemComponet = {
    template: '#plan-template', 
    props: {
        name: String,
        selectedPlan: String
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select() {
            this.$emit("select", this.name)
        }
    }

};

let PlanPickerComponet =   {
    template: "#plan-picker-template",
    components: {
        'plan-item': PlanItemComponet
    },
    data() { 
        return {
            planList: ["The Single", "The Curious", "The Addict", "The Hacker"],
            selectedPlan: null
        }
    }, 
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }

};

Vue.component('slot-example', {
    template: "#slot-example-template", 
    data() {
        return {
            checked: false
        }
    }
});

Vue.component("notification-message", {
    template: "#notification-message-template", 
    props: {
        type: {
            type:String,
            required: true
        },
        header: {
            type:String,
            required: true
        },
    }
})

new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponet
    }
});