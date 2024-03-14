import { MigrationInterface, QueryRunner } from "typeorm";

export class Z1710438132333 implements MigrationInterface {
    name = 'Z1710438132333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Estoque" ("id" SERIAL NOT NULL, "item" character varying NOT NULL, "quantidade" integer NOT NULL, "preco" integer NOT NULL, CONSTRAINT "PK_478cafd13df884ad6f7e1311eba" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Estoque"`);
    }

}
