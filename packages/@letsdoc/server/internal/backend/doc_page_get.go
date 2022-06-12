package backend

import (
	"net/http"
	"time"
	"letsdoc/server/internal/database"

	"github.com/gin-gonic/gin"
)

func docPageGet(c *gin.Context) {
	var req database.DocPages
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
		return
	}

	arg := database.DocPages{
		Owner: req.Owner,
	}

	dbData := &database.DocPages{}
	result := db.Find(dbData, "owner = ?", arg.Owner)

	if result.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, customErrorHandler("wrong email address")) //errorHandler(result.Error))
		return
	} else if result.RowsAffected > 1 {
		c.JSON(http.StatusBadRequest, customErrorHandler("there are multiple responses, aborting"))
		return
	}

	c.JSON(http.StatusOK, docPageGetResponse(*dbData))

	// db.Transaction(func(tx *gorm.DB) error {
	// 	if err := tx.Create(&arg).Error; err != nil {
	// 		if err.(*mysql.MySQLError).Number == 1062 {
	// 			c.JSON(http.StatusForbidden, gin.H{"error": "has already registered"})
	// 		}
	// 		return err
	// 	} else {
	// 		c.JSON(http.StatusOK, docPageGetResponse(arg))
	// 		return nil
	// 	}
	// })
}

type customDocPageGetResponse struct {
	Id			int 	  	`json:"id"`
	Owner		string		`json:"owner"`
	Content		string		`json:"content"`
	CreatedAt 	time.Time	`json:"created_at"`
}

func docPageGetResponse(i database.DocPages) customDocPageGetResponse {
	return customDocPageGetResponse{
		Id:      	i.ID,
		Owner: 		i.Owner,
		Content:    i.Content,
		CreatedAt: 	i.CreatedAt,
	}
}
