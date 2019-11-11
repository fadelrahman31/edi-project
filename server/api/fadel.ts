const router = require('express').Router();

router.get("/", async (req, res) => {
    res.send({hello: "fadel"});
});

export default router;