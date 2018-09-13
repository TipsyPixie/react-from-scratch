const tableName = 'gadgets';

exports.up = (knex, Promise) =>
  knex.schema.alterTable(
    tableName,
    (table) => {
      table.unique('name');
    }
  );

exports.down = (knex, Promise) =>
  knex.schema.alterTable(
    tableName,
    (table) => {
      table.dropUnique('name');
    }
  );
