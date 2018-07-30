import hdkey from 'ethereumjs-wallet/dist/hdkey';

class Wallet {
  static coinTypes = {
    eth: 60,
    btc: 0
  };

  static changeTypes = {
    external: 0,
    internal: 1
  };

  constructor({seed, path}) {
    this.seed = seed;
    this.hdkey = (path != null) ?
      hdkey.fromMasterSeed(Buffer.from(seed)).derivePath(path) :
      hdkey.fromMasterSeed(Buffer.from(seed));
  }

  static derivationPath({purpose = 44, coinType, account, change, addressIndex}) {
    const coinTypeCode = Wallet.coinTypes[coinType];
    const changeCode = Wallet.changeTypes[change];

    return `m/${purpose}'/${coinTypeCode}'/${account}'/${changeCode}/${addressIndex}`;
  }

  get address() {
    return this.hdkey.getWallet().getChecksumAddressString();
  }

  get privateKey() {
    return this.hdkey.getWallet().getPrivateKeyString();
  }

  get publicKey() {
    return this.hdkey.getWallet().getPublicKeyString();
  }

  derivePath(path) {
    return new Wallet({
      seed: this.seed,
      path: path
    });
  }
}

export default Wallet;
