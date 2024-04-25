<template>
  <div>
    <QrcodeStream @decode="decode" :track="drawoutline"></QrcodeStream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "QrScanner",
  components: {
    QrcodeStream,
  },
  methods: {
    decode(decodeString) {
      console.log(decodeString);
    },
    drawoutline(decodeData, context) {
      let points = [];
      for (let k in decodeData) {
        switch (k) {
          case "topLeftCorner":
            points[0] = decodeData[k];
            break;
          case "topRightCorner":
            points[1] = decodeData[k];
            break;
          case "bottomRightCorner":
            points[2] = decodeData[k];
            break;
          case "bottomLeftCorner":
            points[3] = decodeData[k];
            break;
          default:
            break;
        }
      }
      context.strokeStyle = "green";
      context.beginPath();
      console.log(points[0]);
      // context.moveTo(points[0].x, points[0].y);
      // for (const { x, y } of points) {
      //   context.lineTo(x, y);
      // }
      // context.lineTo(points[0].x, points[0].y);
      // context.closePath();
      // context.stroke();
    },
  },
};
</script>

<style lang="scss" scoped></style>
