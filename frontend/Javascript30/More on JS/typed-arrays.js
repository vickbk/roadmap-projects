const uInt8 = new Uint8Array([1, 2, 4]);

uInt8[-1] = 0;
uInt8[2.5] = 0;
uInt8[NaN] = 0;
uInt8[true] = 0;
uInt8["what"] = 0;
uInt8["1"] = 54;

const buffer = new ArrayBuffer(16);

const bufferView = new Int32Array(buffer);
const buffer16 = new Int16Array(buffer);

const float32 = new Float32Array(buffer);

for (let i = 0; i < bufferView.length; i++) bufferView[i] = i * 2;

buffer16[0] = 32;

const txtBuffer = new ArrayBuffer(8);
const txtView = new Uint8Array(txtBuffer);

// some chinese text
txtView.set([228, 189, 160, 229, 165, 189]);

const chinese = new TextDecoder().decode(txtView);

[
  uInt8,
  buffer,
  bufferView,
  buffer16,
  float32,
  txtBuffer,
  txtView,
  chinese,
].forEach((buf) => console.log(buf));
