import React, { Dispatch, SetStateAction } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Button } from './button';
import { useFoodFacts } from '../hooks/useFoodFacts';
import Loading from './loading';
import Error from '@/app/error';

// TODO: add type for scanned product
interface BarcodeScannerProps {
  scannedProduct: any;
  showScanner?: boolean;
  setScannedProduct: (product: any) => void;
  setShowScanner: Dispatch<SetStateAction<boolean>>;
}

const BarcodeScanner = (props: BarcodeScannerProps) => {
  const {
    scannedProduct,
    setShowScanner,
    showScanner = false,
    setScannedProduct,
  } = props;
  const { fetchFoodFacts, loading, error, product } = useFoodFacts();

  const handleBarcode = async (result: { rawValue: string }[]) => {
    const product = await fetchFoodFacts(result[0].rawValue);
    setScannedProduct(product);
  };

  return (
    <>
      {loading ? <Loading /> : null}
      {scannedProduct && scannedProduct.product_name !== ''
        ? `Scanned: ${scannedProduct.product_name}`
        : null}
      {error ? <Error error={error} /> : null}
      <Button onClick={() => setShowScanner(!showScanner)}>
        {!showScanner ? 'Scan Barcode' : 'Hide Barcode Scanner'}
      </Button>
      {showScanner && (
        <Scanner
          formats={[
            'qr_code',
            'micro_qr_code',
            'rm_qr_code',
            'maxi_code',
            'pdf417',
            'aztec',
            'data_matrix',
            'matrix_codes',
            'dx_film_edge',
            'databar',
            'databar_expanded',
            'codabar',
            'code_39',
            'code_93',
            'code_128',
            'ean_8',
            'ean_13',
            'itf',
            'linear_codes',
            'upc_a',
            'upc_e',
          ]}
          allowMultiple={true}
          onError={(error) => console.log(error)}
          onScan={(result) => handleBarcode(result)}
        />
      )}
    </>
  );
};

export default BarcodeScanner;
