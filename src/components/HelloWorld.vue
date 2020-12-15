<template>
<vc-viewer class="viewer" :animation="animation" :timeline="timeline" :camera.sync="camera" @ready="ready">
  <!-- <vc-layer-imagery>
      <vc-provider-imagery-tile-mapservice :url="url"></vc-provider-imagery-tile-mapservice>
    </vc-layer-imagery> -->
</vc-viewer>
</template>

<script>
export default {
  data() {
    return {
      animation: false,
      timeline: false,
      camera: {
        position: {
          lng: 119.782,
          lat: 31.740,
          height: 100000
        },
        heading: 360,
        pitch: -90,
        roll: 0
      },
      url: "http://192.168.1.158/java_api/DProxy/http://58.216.48.11:6080/arcgis/rest/services/CZ_Vector/MapServer"
    }
  },
  methods: {
    ready(cesiumInstance) {
      const _this = this;
      const {
        Cesium,
        viewer
      } = cesiumInstance;
      const imageryProvider_world = new Cesium.ArcGisMapServerImageryProvider({
        url: _this.url
      });
      viewer.imageryLayers.addImageryProvider(imageryProvider_world);
      viewer.entities.add({
        id: '常州欢迎你',
        position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
        billboard: new Cesium.BillboardGraphics({
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.1
        }),
        label: new Cesium.LabelGraphics({
          text: 'Hello Word',
          fillColor: Cesium.Color.GOLD,
          font: '24px sans-serif',
          horizontalOrigin: 1,
          outlineColor: new Cesium.Color(0, 0, 0, 1),
          outlineWidth: 2,
          pixelOffset: new Cesium.Cartesian2(17, -5),
          style: Cesium.LabelStyle.FILL
        })
      });
      //去掉logo
      viewer._cesiumWidget._creditContainer.style.display = "none";
    }
  }
}
</script>

<style>
.viewer {
  overflow: hidden;
}
</style>