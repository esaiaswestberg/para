import { getMigrations, migrate, type Migration } from 'bun-sqlite-migrations'
import { Database } from 'bun:sqlite'
import Log from './log'

export default class DatabaseService {
  public static db = new Database(Bun.env.SQLITE_PATH)

  public static initialize() {
    DatabaseService.applyMigrations()
  }

  private static applyMigrations() {
    const migrations = getMigrations('./migrations')

    if (Bun.env.NODE_ENV === 'development') {
      const developmentMigrations: Migration[] = getMigrations('./migrations/development').map(
        (migration, i) => ({ ...migration, version: migrations.length + i + 1 })
      )

      migrations.push(...developmentMigrations)
    }

    Log.verbose(`Applying ${migrations.length} migrations...`)
    migrate(DatabaseService.db, migrations)
  }
}
