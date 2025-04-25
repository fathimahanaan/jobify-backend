import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      // enum: ["interview", "declined", "pending"], //kinda text box in front end
      enum: Object.values(JOB_STATUS),
      // default: "pending",
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      // enum: ["full-time", "part-time", "internship"], //kinda text box in front end
      enum: Object.values(JOB_TYPE),
      // default: "full-time",
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

export default mongoose.model("job", JobSchema);
