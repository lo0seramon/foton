import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooks1622329952124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'books',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type:  'varchar'
                    },
                    {
                        name: 'author',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books');
    }

}
