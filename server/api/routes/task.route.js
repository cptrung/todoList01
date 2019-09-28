const express = require('express');
const TaskController = require('./../controllers/task.cotroller');
const middlewareTask = require('./../../middlewares/task.middleware');

const router = express.Router();

router.get('/',middlewareTask.middlewareCheckListTask,TaskController.index);
router.post('/',middlewareTask.middlewareCheckListTask,TaskController.create);
router.get('/:id',middlewareTask.middlewareCheckListTask,TaskController.get);
router.delete('/:id',middlewareTask.middlewareCheckListTask,TaskController.delete);
router.put('/:id',middlewareTask.middlewareCheckListTask,TaskController.update);

module.exports = router;