import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnDeletedAtAtUser1704800028707 implements MigrationInterface {
    name = 'AddColumnDeletedAtAtUser1704800028707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedat" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedat"`);
    }

}
