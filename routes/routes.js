const express = require('express');
const { append } = require('express/lib/response');
const movieController = require('./controllers/movieController')
const shopController = require('./controllers/shopController')

const router = express.Router();

router.get('/movie', movieController.movieList);
router.get('/movie/order', movieController.movieListOrder);
router.get('/movie/add', movieController.movieAddPage);
router.post('/movie', movieController.movieCreate);
router.get('/movie/:id', movieController.movieFind);
router.put('/movie/:id', movieController.movieEdit);
router.delete('/movie/:id', movieController.movieDelete);
router.get('/shop', shopController.shopList);
router.get('/shop/order', shopController.shopListOrder);
router.get('/shop/add', shopController.shopAddPage);
router.post('/shop', shopController.shopCreate);
router.get('/shop/:id', shopController.shopFind);
router.put('/shop/:id', shopController.shopEdit);
router.delete('/shop/:id', shopController.shopDelete);

module.exports = router;