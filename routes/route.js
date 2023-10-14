const express = require('express');
const mailController = require('../controllers/mailController');
const { register, login, refreshToken, logout, isTokenBlacklisted } = require('../controllers/AuthController');
const { authenticateToken } = require('../middlewares/authenticate');

const router = express.Router();


router.get('/', mailController.getAdminData);
router.get('/send-email', mailController.sendEmail);

router.post('/register', register);


router.post('/login', login);


router.post('/refresh-token', authenticateToken, refreshToken);


router.post('/logout', authenticateToken, isTokenBlacklisted, logout);


module.exports = router;
