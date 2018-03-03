const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Service is running at ${req.hostname}`,
  });
});

router.get('/probe', (req, res) => {
  res.status(200).send();
});

module.exports = router;
