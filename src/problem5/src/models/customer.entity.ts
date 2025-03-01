import {
  Entity,
  Column,
} from "typeorm";

import { BaseEntity } from "./base.entity";

export enum CustomerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETED = "DELETED",
}

@Entity()
export class Customer extends BaseEntity {
  constructor(partial: Partial<Customer>) {
    super();
    Object.assign(this, partial);
  }
  
  @Column({ type: "varchar", length: 250 })
  name!: string;

  @Column({ type: "decimal", precision: 18, scale: 2 })
  age!: number;

  @Column({ type: "varchar", length: 20, default: CustomerStatus.ACTIVE })
  customerStatus!: CustomerStatus;
}
