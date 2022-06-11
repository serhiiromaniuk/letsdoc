package backend

import (
	"net/http"

	// === Error handling
	"github.com/go-sql-driver/mysql"
	// ===
	"letsdoc/server/internal/database"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func getBlockContainerById(c *gin.Context) {
	id := c.Param("id")
	db.First(&blockContainers, id)
	c.JSON(http.StatusOK, parseBlockContainer(blockContainers))
}

func getBlockContainerByOwner(c *gin.Context) {
	uuid := c.Param("id")
	db.Find(&blockContainers, "owner = ?", uuid)
	c.JSON(http.StatusOK, blockContainers)
}

func listBlockContainers(c *gin.Context) {
	db.Find(&blockContainers)
	c.JSON(http.StatusOK, blockContainers)
}

func createBlockContainer(c *gin.Context) {
	var req database.BlockContainers
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
		return
	}

	arg := database.BlockContainers{
		Owner: req.Owner,
		Name:  req.Name,
		Body:  req.Body}
	// todo: verify id
	db.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&arg).Error; err != nil {
			if err.(*mysql.MySQLError).Number == 1062 {
				c.JSON(http.StatusBadRequest, customErrorHandler("container has already registered"))
			}
			return err
		} else {
			c.JSON(http.StatusOK, containerResponse(arg))
			return nil
		}
	})
}
