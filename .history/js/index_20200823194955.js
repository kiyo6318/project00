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
      number = this.widthOverallSize + "";
      if (number) return Math.floor(this.widthOverallSize / 10) * 10;
    },
    afterEdit: function () {
      return this.edit(this.widthOverallSize);
    },
  },
  methods: {
    edit: function (number) {
      numStr = number + "";
      onesPlace = parseFloat(numStr.slice(-1));
      if (onesPlace <= 3) {
        return Math.floor(number / 10) * 10;
      } else if (onesPlace >= 4 && onesPlace <= 6) {
        return num.slice(0, -1) + "5";
      } else if (onesPlace >= 7 && onesPlace <= 9) {
        return Math.floor(number / 10) * 10 + 10;
      }
    },
  },
});
