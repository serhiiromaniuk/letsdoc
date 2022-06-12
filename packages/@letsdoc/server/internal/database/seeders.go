package database

import (
	"log"

	"github.com/go-sql-driver/mysql"
	"gorm.io/gorm"
	"encoding/json"
	"io/ioutil"
)

var (
	default_user = []UserInfos{
		{
			Uuid:		Uuid(),
			UserName:	"default_user",
			Email:		"test@super.co",
			Country:	"US",
			Password:	"test"}}
)

func SeedDb() {
	log.Print("=====> Starting seeders")

	// Common Countries
	var countryArray []CommonCountries
	filePath := "internal/database/countries.json"
	countries, err := ioutil.ReadFile(filePath)
	if err != nil {
		log.Printf( "=====> Error while reading file %s\n", filePath )
		log.Printf("File error: %v\n", err)
	}

	err = json.Unmarshal(countries, &countryArray)
	if err != nil {
	  log.Println("error:", err)
	}
  
	log.Println("=====> Filling CommonCountries")
	for k := range countryArray {
		DB.Transaction(func(tx *gorm.DB) error {
			if err := tx.Create(CommonCountries{
				Name: countryArray[k].Name,
				Code: countryArray[k].Code }).Error; err != nil {
					if err.(*mysql.MySQLError).Number == 1062 {
						return nil
					}
					log.Println("=====> Some error occured ", err)
					return err
			}
			return nil
		})
	}

		// Users
	DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&default_user).Error; err != nil {
			if err.(*mysql.MySQLError).Number == 1062 {
				log.Println("==> `default_user` already present")
			}
			return err
		} 
		tx.Model(&default_user)
		return nil
	})

	log.Println("=====> Seeders ended")
}
