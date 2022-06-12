package backend

import (
	"net/http"
	"github.com/gin-gonic/gin"
	
	"letsdoc/server/internal/database"
)

// func userDomainsGet(c *gin.Context) string {
// 	input := &route53.ListHostedZonesByNameInput{
// 		MaxItems: aws.String("100"),
// 	}

// 	resp, _ := svc.ListHostedZonesByName(input)
// 	id := strings.Split(*resp.HostedZones[0].Id, "/")[2]

// 	owner := c.Param("id")
// 	db.Find(&userDomains, "owner = ?", owner)

// 	return id
// }

func userDomainsGet(c *gin.Context) {
	var req database.UserDomains
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
		return
	}

	db.Find(&userDomains, "owner = ?", req.Owner)
	
	if db_err != nil {
		c.JSON(http.StatusForbidden, parseUserDomainsGet(userDomains))	
		return
	}
	c.JSON(http.StatusOK, parseUserDomainsGet(userDomains))
}

func parseUserDomainsGet(data []database.UserDomains) (v interface{}) {
	for _, v = range data {
	}
	return
}
