const express  = require('express');
const router = express.Router();
const {authenticate}=require('../middleware/authenticate');
const {adminRegister,adminLogin,adminUpdate,adminLogout,specificAdmin,allAdmins,deleteAdmin} = require('../controllers/adminControllers');


router.post('/register', adminRegister);
router.post('/login',adminLogin);
router.patch('/:adminId',authenticate,adminUpdate);
router.delete('/logout',authenticate,adminLogout);
router.get('/alladmins',authenticate,allAdmins);
router.get('/:adminId',authenticate,specificAdmin);
router.delete('/:adminId',authenticate,deleteAdmin);


module.exports = router;







