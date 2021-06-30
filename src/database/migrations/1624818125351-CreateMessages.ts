import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1624818125351 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(
			new Table({
				name: "messages",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
					},
					{
						name: "admin_id",
						type: "uuid",
						isNullable: true
					},
					{
						name: "user_id",
						type: "uuid"
					},
					{
						name: "text",
						type: "varchar"
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()"
					}
				],
				foreignKeys: [
					{
						name: "FK_User",
						referencedTableName: "users",
						referencedColumnNames: ["id"],
						columnNames: ["user_id"],
						onUpdate: "SET NULL",
						onDelete: "SET NULL"
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable("messages");
	}

}
