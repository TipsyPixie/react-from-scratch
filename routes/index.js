import * as express from 'express';
import {getWallet} from './wallets';

const router = express.Router();

router.route('/').get((req, res) => {
  res.render('index');
});

router.route('/wallets/:seedString').get(getWallet);
// router.route('/wallets/:seedString/:derivationPath').get(getWallet);

export default router;
