import express, { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Customer, CustomerStatus } from "../models";
import { validateRequest } from "../middlewares";
import { createCustomerSchema, customerIdSchema, listCustomersSchema, updateCustomerSchema } from "../validations";

const router = express.Router();

// Need to authen/authorize before accessing these routes
// router.use(authMiddleware);

router.post("/", validateRequest(createCustomerSchema, "body"), async (req: Request, res: Response) => {
  try {
    const customerRepository = AppDataSource.getRepository(Customer);
    const newCustomer = customerRepository.create(req.body);
    const savedCustomer = await customerRepository.save(newCustomer);
    
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ message: "Error creating customer", error });
  }
});

router.get("/", validateRequest(listCustomersSchema, "query"), async (req: Request, res: Response) => {
  try {
    const customerRepository = AppDataSource.getRepository(Customer);
    const filters = req.query;
    const customers = await customerRepository.find({ where: filters });
    
    res.status(200).json({
      total: customers.length,
      data: customers
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching customers", error });
  }
});

router.get("/:id", validateRequest(customerIdSchema, "params"), async (req: Request, res: Response) => {
  try {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = await customerRepository.findOneBy({ id: req.params.id });
    
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching customer details", error });
  }
});

  router.put("/:id", 
    validateRequest(customerIdSchema, "params"),
    validateRequest(updateCustomerSchema, "body"),
    async (req: Request, res: Response) => {
  try {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = await customerRepository.findOneBy({ id: req.params.id });
    
    if (customer) {
      customerRepository.merge(customer, req.body);
      const updatedCustomer = await customerRepository.save(customer);
      res.status(200).json(updatedCustomer);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating customer", error });
  }
});

router.delete("/:id", validateRequest(customerIdSchema, "params"), async (req: Request, res: Response) => {
  try {
    const customerRepository = AppDataSource.getRepository(Customer);
    const result = await customerRepository.update(req.params.id, { customerStatus: CustomerStatus.DELETED });
    
    if (result.affected === 1) {
      res.status(200).json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting customer", error });
  }
});

export default router;
