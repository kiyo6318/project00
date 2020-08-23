const VeeValidate = window.VeeValidate;
const ValidationProvider = VeeValidate.ValidationProvider;
const ValidationObserver = VeeValidate.ValidationObserver;
VeeValidate.extend('required',VeeValidateRules.required);
new Vue({
    el: '#app',
    data: {
        width: "",
        height: "",
        depth: "",
        clearance: "",
        materialThickness: "",
        numberOfLayerBySurface: ""
    },
    validations: {
        width: {required},
        height: {required},
        depth: {required},
        clearance: {required},
        materialThickness: {required},
        numberOfLayerBySurface: {required}
    },
    computed: {
        topBottomOutWidth: function (){
            return (this.width) + ( this.clearance * 2 ) + ( this.materialThickness * 4 )
        },
        topBottomOutDepth: function (){
            return (this.depth) + ( this.clearance * 2 ) + ( this.materialThickness * 4 )
        },
        topBottomInWidth: function (){
            return (this.width) + ( this.clearance * 2 ) + ( this.materialThickness * 2)
        },
        topBottomInDepth: function (){
            return (this.depth) + ( this.clearance * 2 ) + ( this.materialThickness * 2)
        },
        sideOutWidth: function (){
            return (this.width) + ( this.clearance * 2 ) + ( this.materialThickness * 4)
        },
        sideOutHeight: function (){
            return (this.height) + ( this.clearance) + ( this.materialThickness * 2)
        },
        sideInWidth: function (){
            return (this.width) + ( this.clearance * 2) + ( this.materialThickness * 2)
        },
        sideInHeight: function (){
            return (this.height) + ( this.clearance)
        },
        frontBackOutHeight: function (){
            return (this.height) + ( this.clearance ) + ( this.materialThickness * 2)
        },
        frontBackOutDepth: function (){
            return (this.depth) + ( this.clearance * 2 ) + ( this.materialThickness * 2)
        },
        frontBackInHeight: function (){
            return (this.height) + ( this.clearance )
        },
        frontBackInDepth: function (){
            return (this.depth) + ( this.clearance ) + ( this.materialThickness * 2)
        }
    },
    methods: {
        status(validation){
            return {
                dirty: validation.$dirty,
                error: validation.$error
            }
        }
    }
});