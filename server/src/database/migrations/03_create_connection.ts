import Knex from 'knex';

export async function up(knex: Knex){
	return knex.schema.createTable('connections', table => {
		table.increments('id').primary();
		
		//'unsigned()' here is required for mysql to work
		table.integer('user_id')
		.notNullable()
		.unsigned()
		.references('id')
		.inTable('users')
		.onUpdate('CASCADE')
		.onDelete('CASCADE');
		
		/*"defaultTo('now()')" does not work in mysql. 
		"knex.raw('now()') is necessary instead"*/
		table.timestamp('created_at')
			.defaultTo(knex.raw('now()'))
			.notNullable();
	});
}

export async function down(knex: Knex){
	return knex.schema.dropTable('connections');
}