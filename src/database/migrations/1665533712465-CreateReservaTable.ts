import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateReservaTable1665533712465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reservas",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "data_hora_inicio",
            type: "datetime",
            isNullable: false,
          },
          {
            name: "data_hora_fim",
            type: "datetime",
            isNullable: false,
          },
          {
            name: "valor",
            type: "float",
            isNullable: false,
          },
          {
            name: "confirmada",
            type: "boolean",
            isNullable: false,
          },
          {
            name: "id_cliente",
            type: "varchar",
            length: "11",
            isNullable: false,
          },
          {
            name: "id_quadra",
            type: "int",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "reservas",
      new TableForeignKey({
        columnNames: ["id_cliente"],
        referencedColumnNames: ["cpf"],
        referencedTableName: "users",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "reservas",
      new TableForeignKey({
        columnNames: ["id_quadra"],
        referencedColumnNames: ["id"],
        referencedTableName: "quadras",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("reservas");
  }
}
