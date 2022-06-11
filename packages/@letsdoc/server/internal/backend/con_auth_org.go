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

func getOrgById(c *gin.Context) {
	id := c.Param("id")
	db.First(&orgOrgs, id)
	c.JSON(http.StatusOK, parseOrgOrganisation(orgOrgs))
}

func listOrgs(c *gin.Context) {
	db.Find(&orgOrgs)
	c.JSON(http.StatusOK, orgOrgs)
}

func createOrg(c *gin.Context) {
	var req database.OrgOrganisations
	arg := database.OrgOrganisations{
		OrgName:    req.OrgName,
		OrgCountry: req.OrgCountry}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
		return
	}

	// FIX
	db.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&arg).Error; err != nil {
			if err.(*mysql.MySQLError).Number == 1062 {
				c.JSON(http.StatusForbidden, customErrorHandler("organisation has already registered"))
			}
			return err
		} else {
			c.JSON(http.StatusOK, orgResponse(arg))
			return nil
		}
	})
}
