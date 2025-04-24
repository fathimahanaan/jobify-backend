import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customError.js";

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getAllJob = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedJob) {
    throw new NotFoundError(`No job with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job) {
    throw new NotFoundError(`No job with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);

  if (!removedJob) {
    throw new NotFoundError(`No job with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ msg: "Job deleted", job: removedJob });
};

// let jobs = [
//   { id: nanoid(), company: "apple", position: "front-end" },
//   { id: nanoid(), company: "googl", position: "backend-end" },
//   { id: nanoid(), company: "amazon", position: "front -end" },
// ];
