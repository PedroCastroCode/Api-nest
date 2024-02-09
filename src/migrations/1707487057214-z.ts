import { MigrationInterface, QueryRunner } from "typeorm";

export class Z1707487057214 implements MigrationInterface {
    name = 'Z1707487057214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "marca" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_d41856ffd597050edc69ea5188d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "proprietario" ("id" SERIAL NOT NULL, "nome_completo" character varying NOT NULL, "cpf" character varying NOT NULL, "telefone" character varying NOT NULL, "id_user" integer NOT NULL, CONSTRAINT "REL_9768b171ca182c665a8035a86a" UNIQUE ("id_user"), CONSTRAINT "PK_1b9692e43fb9184501f75222bcf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "veiculo" ("id" SERIAL NOT NULL, "id_marca" integer NOT NULL, "placa" character varying NOT NULL, "cor" character varying NOT NULL, CONSTRAINT "PK_0fcc9d29b16ed347447f8f9356e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "proprietario" ADD CONSTRAINT "FK_9768b171ca182c665a8035a86ae" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "veiculo" ADD CONSTRAINT "FK_56a3fc2f5684e8a7694341f351f" FOREIGN KEY ("id_marca") REFERENCES "marca"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veiculo" DROP CONSTRAINT "FK_56a3fc2f5684e8a7694341f351f"`);
        await queryRunner.query(`ALTER TABLE "proprietario" DROP CONSTRAINT "FK_9768b171ca182c665a8035a86ae"`);
        await queryRunner.query(`DROP TABLE "veiculo"`);
        await queryRunner.query(`DROP TABLE "proprietario"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "marca"`);
    }

}
