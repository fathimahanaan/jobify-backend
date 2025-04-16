import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJob,
  getSingleJob,
  updateJob,
} from "../controller/jobController.js";
const router = Router();

router.get("/", getAllJob);
router.post("/", createJob);
router.get("/:id", getSingleJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

// router.route("/").get(getAllJobs).post(createJob);
// router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
