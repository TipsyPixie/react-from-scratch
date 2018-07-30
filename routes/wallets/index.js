import Wallet from './Wallet';
import asyncWrapper from '../asyncWrapper';

const getWallet = asyncWrapper(
  async (req, res) => {
    const { seedString, derivationPath } = req.params;

    const wallet = new Wallet({seed: seedString, path: derivationPath});

    res.send({
      address: wallet.address,
      publicKey: wallet.publicKey,
      privateKey: wallet.privateKey
    });
  }
);

export {getWallet};
