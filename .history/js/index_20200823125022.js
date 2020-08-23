new Vue({
  el: "#app",
  data: {
    width: "",
    height: "",
    depth: "",
    clearance: "",
    materialThickness: "",
    numberOfLayerBySurface: "",
  },
  computed: {
    topBottomOutWidth: function () {
      return this.width + this.clearance * 2 * 10 + this.materialThickness * 4;
    },
    topBottomOutDepth: function () {
      return this.depth + this.clearance * 2 * 10 + this.materialThickness * 4;
    },
    topBottomInWidth: function () {
      return this.width + this.clearance * 2 * 10 + this.materialThickness * 2;
    },
    topBottomInDepth: function () {
      return this.depth + this.clearance * 2 * 10 + this.materialThickness * 2;
    },
    sideOutWidth: function () {
      return this.width + this.clearance * 2 * 10 + this.materialThickness * 4;
    },
    sideOutHeight: function () {
      return this.height + this.clearance * 10 + this.materialThickness * 2;
    },
    sideInWidth: function () {
      return this.width + this.clearance * 2 * 10 + this.materialThickness * 2;
    },
    sideInHeight: function () {
      return this.height + this.clearance * 10;
    },
    frontBackOutHeight: function () {
      return this.height + this.clearance * 10 + this.materialThickness * 2;
    },
    frontBackOutDepth: function () {
      return this.depth + this.clearance * 2 * 10 + this.materialThickness * 2;
    },
    frontBackInHeight: function () {
      return this.height + this.clearance * 10;
    },
    frontBackInDepth: function () {
      return this.depth + this.clearance * 10 + this.materialThickness * 2;
    },
    widthOverallSize: function () {
      return (
        this.width +
        this.clearance * 10 * 2 +
        this.materialThickness * this.numberOfLayerBySurface * 2
      );
    },
    depthOverallSize: function () {
      return (
        this.depth +
        this.clearance * 10 * 2 +
        this.materialThickness * this.numberOfLayerBySurface * 2
      );
    },
    heightOverallSize: function () {
      return (
        this.height +
        this.clearance * 10 +
        this.materialThickness * this.numberOfLayerBySurface * 2
      );
    },
    editWidthOverallSize: function () {
      return Math.floor(this.widthOverallSize / 10) * 10;
    },
    test: function () {
      a = 123;
      return a.slice(-1);
    },
  },
});
