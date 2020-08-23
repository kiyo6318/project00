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
    computed: {
        topBottomOutWidth: function (){
            return (this.width + ( this.clearance * 2 ) + ( this.materialThickness * 4 )).toString();
        },
        topBottomOutDepth: function (){
            return (this.depth) + ( this.clearance * 2 ) + ( this.materialThickness * 4 ).toString();
        },
        topBottomInWidth: function (){
            return (this.width) + ( this.clearance * 2 ) + ( this.materialThickness * 2).toString();
        },
        topBottomInDepth: function (){
            return (this.depth) + ( this.clearance * 2 ) + ( this.materialThickness * 2).toString();
        },
        sideOutWidth: function (){
            return (this.width) + ( this.clearance * 2 ) + ( this.materialThickness * 4).toString();
        },
        sideOutHeight: function (){
            return (this.height) + ( this.clearance) + ( this.materialThickness * 2).toString();
        },
        sideInWidth: function (){
            return (this.width) + ( this.clearance * 2) + ( this.materialThickness * 2).toString();
        },
        sideInHeight: function (){
            return (this.height) + ( this.clearance).toString();
        },
        frontBackOutHeight: function (){
            return (this.height) + ( this.clearance ) + ( this.materialThickness * 2).toString();
        },
        frontBackOutDepth: function (){
            return (this.depth) + ( this.clearance * 2 ) + ( this.materialThickness * 2).toString();
        },
        frontBackInHeight: function (){
            return (this.height) + ( this.clearance ).toString();
        },
        frontBackInDepth: function (){
            return (this.depth) + ( this.clearance ) + ( this.materialThickness * 2).toString();
        }
    }
});