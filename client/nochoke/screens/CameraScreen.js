import React, { useState } from 'react';
import BarCodeScanner from '../components/BarcodeScanner'
import ProductPage from '../components/ProductPage';

export default function CameraScreen() {
  const [ean, setEan] = useState({ barCode: null, scanning: true, hasCameraPermission: null })

  if (ean.scanning) {
    return (
      <BarCodeScanner setEan={setEan.bind(this)} ean={ean} />
    );
  }
  else {
    return (
      <ProductPage barCode={ean.barCode} setEan={setEan} scanning={ean} />
    )
  }
}




