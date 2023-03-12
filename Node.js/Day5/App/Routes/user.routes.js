const router = require('express').Router();
const userController = require('../Controller/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/add', userController.add);
router.get('/:id', userController.read);
router.delete('/:id', userController.deleteUser);
router.put("/update", userController.update)

module.exports = router;