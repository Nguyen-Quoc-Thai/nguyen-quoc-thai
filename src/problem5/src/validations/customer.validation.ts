import Joi from "joi";
import { CustomerStatus } from "../models";

export const createCustomerSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required().min(1),
});

export const updateCustomerSchema = Joi.object({
  name: Joi.string().optional(),
  age: Joi.number().optional().min(1),
  status: Joi.string().valid(CustomerStatus.ACTIVE, CustomerStatus.INACTIVE).optional(),
}).min(1);

export const customerIdSchema = Joi.object({
  id: Joi.string().required(),
});

export const listCustomersSchema = Joi.object({
  status: Joi.string().valid(CustomerStatus.ACTIVE, CustomerStatus.INACTIVE).optional(),
  age: Joi.number().optional().min(1),
});
