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
            return this.width + ( this.clearance * 2 * 10 ) + ( this.materialThickness * 4 )
        },
        topBottomOutDepth: function (){
            return this.depth + ( this.clearance * 2 * 10 ) + ( this.materialThickness * 4 )
        },
        topBottomInWidth: function (){
            return this.width + ( this.clearance * 2 * 10) + ( this.materialThickness * 2)
        },
        topBottomInDepth: function (){
            return this.depth + ( this.clearance * 2 * 10) + ( this.materialThickness * 2)
        },
        sideOutWidth: function (){
            return this.width + ( this.clearance * 2 * 10) + ( this.materialThickness * 4)
        },
        sideOutHeight: function (){
            return this.height + (this.clearance * 10) + ( this.materialThickness * 2)
        },
        sideInWidth: function (){
            return this.width + ( this.clearance * 2 * 10) + ( this.materialThickness * 2)
        },
        sideInHeight: function (){
            return this.height + (this.clearance * 10)
        },
        frontBackOutHeight: function (){
            return this.height + (this.clearance * 10) + ( this.materialThickness * 2)
        },
        frontBackOutDepth: function (){
            return this.depth + ( this.clearance * 2 * 10) + ( this.materialThickness * 2)
        },
        frontBackInHeight: function (){
            return this.height + this.clearance
        },
        frontBackInDepth: function (){
            return this.depth + this.clearance + ( this.materialThickness * 2)
        }
    }
});