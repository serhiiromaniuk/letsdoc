package backend

import (
	"net/http"
	"time"
	// === Error handling
	"github.com/go-sql-driver/mysql"
	// ===
	"letsdoc/server/internal/database"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func docPageCreate(c *gin.Context) {
	var req database.DocPages
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
		return
	}

	arg := database.DocPages{
		Owner: req.Owner,
		Content: req.Content,
	}

	db.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&arg).Error; err != nil {
			if err.(*mysql.MySQLError).Number == 1062 {
				c.JSON(http.StatusForbidden, gin.H{"error": "has already registered"})
			}
			return err
		} else {
			c.JSON(http.StatusOK, docPageCreateResponse(arg))
			return nil
		}
	})
}

type customDocPageCreateResponse struct {
	Id			int 	  	`json:"id"`
	Owner		string		`json:"owner"`
	Content		string		`json:"content"`
	CreatedAt 	time.Time	`json:"created_at"`
}

func docPageCreateResponse(i database.DocPages) customDocPageCreateResponse {
	return customDocPageCreateResponse{
		Id:      	i.ID,
		Owner: 		i.Owner,
		Content:    i.Content,
		CreatedAt: 	i.CreatedAt,
	}
}
