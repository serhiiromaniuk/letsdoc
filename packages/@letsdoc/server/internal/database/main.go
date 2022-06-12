package database

import (
	"log"
)

func InitDatabase() {
	if DB_err != nil {
		log.Fatalf("Error connecting database.\n%s", DB_err)
	}

	MigratreDb()
	SeedDb()
}
