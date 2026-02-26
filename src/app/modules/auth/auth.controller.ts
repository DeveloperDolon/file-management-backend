import type { Request, Response } from "express";
import { httpStatus } from 'http-status';
import catchAsync from "#app/shared/catchAsync.js";
import sendResponse from "#app/shared/sendResponse.js";
import { authService } from "./auth.service.js";