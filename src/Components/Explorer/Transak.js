import React from 'react';
import { useWeb3React } from '@web3-react/core';

const Transak = () => {
  const { account } = useWeb3React();

  return (
    <div className="col-md-12 col-lg-12">
      <div className="card table-widget" style={{ height: '95%' }}>
        <div className="card-body">
          <div className="d-flex" style={{ alignItems: 'center' }}>
            <h5 className="card-title">Buy cryptocurrency</h5>
          </div>
          <iframe
            src={`${process.env.REACT_APP_TRANSAK}&walletAddress=${account}&disableWalletAddressForm=true`}
            height="100%"
            width="100%"
            title="Transak"
            id="transakId"
          />
        </div>
      </div>
    </div>
  );
};

export default Transak;
