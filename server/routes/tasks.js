const Router = require('koa-router');
const ctrl = require("../controllers/tasks");
const router = new Router();

router.get("/", ctrl.getAll);
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

module.exports = router.routes();