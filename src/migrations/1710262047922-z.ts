import { MigrationInterface, QueryRunner } from "typeorm";

export class Z1710262047922 implements MigrationInterface {
    name = 'Z1710262047922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "proprietario" DROP CONSTRAINT "FK_9768b171ca182c665a8035a86ae"`);
        await queryRunner.query(`ALTER TABLE "proprietario" DROP CONSTRAINT "REL_9768b171ca182c665a8035a86a"`);
        await queryRunner.query(`ALTER TABLE "proprietario" DROP COLUMN "id_user"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "proprietario" ADD "id_user" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "proprietario" ADD CONSTRAINT "REL_9768b171ca182c665a8035a86a" UNIQUE ("id_user")`);
        await queryRunner.query(`ALTER TABLE "proprietario" ADD CONSTRAINT "FK_9768b171ca182c665a8035a86ae" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
