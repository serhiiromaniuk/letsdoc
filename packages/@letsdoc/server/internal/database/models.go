package database

import (
	"github.com/google/uuid"
)

type UserInfos struct {
	Uuid      uuid.UUID `gorm:"primarykey;not null;size:36;" json:"uuid"`
	UserName  string    `gorm:"not null;size:128;" json:"username" binding:"required,alphanum"`
	OrgID	  int 		`gorm:"default:null" json:"org_id"`
	Email     string    `gorm:"not null;unique" json:"email" binding:"required,email"`
	Country   string    `gorm:"default:null;size:4" json:"country" binding:"required"`
	IsActive  bool      `gorm:"default:true;not null" json:"active"`
	Password  string    `gorm:"not null;size:256" json:"password" binding:"required,min=6"`
	UpdatedAndCreated

	// Associations
	CountryMap CommonCountries `gorm:"foreignKey:Country;" json:"-" binding:"-"`
}

type DocPages struct {
	IdModel
	Owner				string `gorm:"default:null;size:36" json:"owner" binding:"required"`
	Content				string `gorm:"default:null;" json:"content" binding:"-"`
	UpdatedAndCreated

	// Associacions
	UserMap UserInfos `gorm:"foreignKey:Owner;" json:"-" binding:"-"`
}

type UserDomains struct {
	IdModel
	Owner				string `gorm:"default:null;size:36" json:"owner" binding:"required"`
	Name				string `gorm:"default:null;" json:"name" binding:"-"`
	UpdatedAndCreated

	// Associacions
	UserMap UserInfos `gorm:"foreignKey:Owner;" json:"-" binding:"-"`
}

type CommonCountries struct {
	Name				string `gorm:"not null;unique" json:"name" binding:"-"`
	Code				string `gorm:"primarykey;not null;unique" json:"code" binding:"-"`
}
