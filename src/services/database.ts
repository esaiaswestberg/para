import { getMigrations, migrate, type Migration } from 'bun-sqlite-migrations'
import { Database } from 'bun:sqlite'
import Log from './log'

export default class DatabaseService {
  public static db: Database

  public static async initialize() {
    await DatabaseService.makeBackup()

    DatabaseService.db = new Database(Bun.env.SQLITE_PATH)
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

  private static async makeBackup() {
    if (!Bun.env.SQLITE_PATH) {
      Log.warn('Skipping backup becuase no SQLite path is set.')
      return
    }

    const dbFile = Bun.file(Bun.env.SQLITE_PATH)
    if (!(await dbFile.exists())) {
      Log.warn('Skipping backup because no SQLite database file was found at given path.')
      return
    }

    const backupPath = `${Bun.env.SQLITE_PATH}.${new Date().toISOString()}.bkp`
    await Bun.write(backupPath, dbFile)
    Log.info(`Made backup of SQLite database file at: ${backupPath}`)
  }
}
