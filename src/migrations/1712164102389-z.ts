import { MigrationInterface, QueryRunner } from "typeorm";

export class Z1712164102389 implements MigrationInterface {
    name = 'Z1712164102389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veiculo" ADD "preco" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "veiculo" ADD "anoFabricacao" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "veiculo" ADD "km" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veiculo" DROP COLUMN "km"`);
        await queryRunner.query(`ALTER TABLE "veiculo" DROP COLUMN "anoFabricacao"`);
        await queryRunner.query(`ALTER TABLE "veiculo" DROP COLUMN "preco"`);
    }

}
