import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomersTable1740721685170 implements MigrationInterface {
    name = 'CreateCustomersTable1740721685170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isDeleted" boolean NOT NULL DEFAULT false, "name" character varying(250) NOT NULL, "age" numeric(18,2) NOT NULL, "customerStatus" character varying(20) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
