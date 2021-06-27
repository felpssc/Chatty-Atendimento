import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624813305702 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(
			new Table({
				name: "users",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true
					},
					{
						name: "email",
						type: "varchar",
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable("users");
	}

}
