import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJob,
  getSingleJob,
  updateJob,
} from "../controller/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";
const router = Router();

router.get("/", getAllJob);
router.post("/", validateJobInput, createJob);
router.get("/:id", validateIdParam, getSingleJob);
router.patch("/:id", validateJobInput, updateJob);
router.delete("/:id", deleteJob);

// router.route("/").get(getAllJobs).post(createJob);
// router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
