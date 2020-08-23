new Vue({
    el: '#app',
    data: {
        width: 0,
        height: 0,
        depth: 0,
        clearance: 0,
        materialThickness: 0,
        numberOfLayerBySurface: 0
    },
    computed: {
        topBottomOutWidth: function (){
            return Number(this.width + ( this.clearance * 2 ) + ( this.materialThickness * 4 ))
        },
        topBottomOutDepth: function (){
            return this.depth + ( this.clearance * 2 ) + ( this.materialThickness * 4 )
        },
        topBottomInWidth: function (){
            return this.width + ( this.clearance * 2 ) + ( this.materialThickness * 2)
        },
        topBottomInDepth: function (){
            return this.depth + ( this.clearance * 2 ) + ( this.materialThickness * 2)
        },
        sideOutWidth: function (){
            return this.width + ( this.clearance * 2 ) + ( this.materialThickness * 4)
        },
        sideOutHeight: function (){
            return this.height + this.clearance + ( this.materialThickness * 2)
        },
        sideInWidth: function (){
            return this.width + ( this.clearance * 2) + ( this.materialThickness * 2)
        },
        sideInHeight: function (){
            return this.height + this.clearance
        },
        frontBackOutHeight: function (){
            return this.height + this.clearance + ( this.materialThickness * 2)
        },
        frontBackOutDepth: function (){
            return this.depth + ( this.clearance * 2 ) + ( this.materialThickness * 2)
        },
        frontBackInHeight: function (){
            return this.height + this.clearance
        },
        frontBackInDepth: function (){
            return this.depth + this.clearance + ( this.materialThickness * 2)
        }
    }
});