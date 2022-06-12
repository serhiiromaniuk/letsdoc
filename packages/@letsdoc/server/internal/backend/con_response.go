package backend

import (
	"letsdoc/server/internal/database"
	"time"

	"github.com/google/uuid"
)

type customUserResponse struct {
	Uuid      uuid.UUID `json:"uuid"`
	UserName  string    `json:"username"`
	Email     string    `json:"email"`
	Country   string    `json:"country"`
	IsActive  bool      `json:"active"`
	CreatedAt time.Time `json:"created_at"`
}

type customLoginResponse struct {
	Email    string `form:"email" json:"email" binding:"required,email"`
	Password string `form:"password" json:"password" binding:"required,min=6"`
}

func userResponse(user database.UserInfos) customUserResponse {
	return customUserResponse{
		Uuid:      user.Uuid,
		UserName:  user.UserName,
		Email:     user.Email,
		Country:   user.Country,
		IsActive:  user.IsActive,
		CreatedAt: user.CreatedAt}
}

func userLoginResponse(user customLoginResponse) customLoginResponse {
	return customLoginResponse{
		Email:    user.Email,
		Password: user.Password}
}
