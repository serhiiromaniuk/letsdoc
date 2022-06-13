package backend

import (
	"net/http"
	// "time"
	// === Error handling
	"github.com/go-sql-driver/mysql"
	// ===
	"letsdoc/server/internal/database"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func docPageUpdate(c *gin.Context) {
	var req database.DocPages
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
		return
	}

	db.Transaction(func(tx *gorm.DB) error {
		if err := tx.Model(&database.DocPages{}).Where("owner", req.Owner).Update("content", req.Content).Error; err != nil {
			if err.(*mysql.MySQLError).Number == 1062 {
				c.JSON(http.StatusForbidden, gin.H{"error": "has already registered"})
			}
			return err
		} else {
			c.JSON(http.StatusOK, gin.H{"ok": &database.DocPages{}})
			return nil
		}
	})
}
