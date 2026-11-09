#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/4b6a6bbc95d43008d11d0e96eb63246c1d20c24b1bb136c248c2fbd8e43d46db/contract';
import endContract from '../../snapshots/4b6a6bbc95d43008d11d0e96eb63246c1d20c24b1bb136c248c2fbd8e43d46db/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  col,
  fn,
  lit,
  primaryKey,
  sql,
} from '@internal/postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'ActiveNeed',
        columns: [
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('neededQuantity', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('ngoId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('priority', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('receivedQuantity', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Donation',
        columns: [
          col('address', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('category', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('distance', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('donorName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('donorPhone', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('itemName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('ngoId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('quantity', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('Pending'),
            codecRef: { codecId: 'pg/text@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Ngo',
        columns: [
          col('address', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('isVerified', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('password', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('registrationId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('sector', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'Ngo',
        constraint: 'Ngo_email_key',
        columns: ['email'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'ActiveNeed',
        index: 'ActiveNeed_ngoId_idx_99c8e6b5',
        columns: ['ngoId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Donation',
        index: 'Donation_ngoId_idx_99c8e6b5',
        columns: ['ngoId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'ActiveNeed',
        foreignKey: {
          name: 'ActiveNeed_ngoId_fkey',
          columns: ['ngoId'],
          references: { schema: 'public', table: 'Ngo', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Donation',
        foreignKey: {
          name: 'Donation_ngoId_fkey',
          columns: ['ngoId'],
          references: { schema: 'public', table: 'Ngo', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
