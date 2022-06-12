package backend

import (
	"time"
	"net/http"
	"letsdoc/server/internal/database"
	"gorm.io/gorm"
	"github.com/go-sql-driver/mysql"
	
	"github.com/gin-gonic/gin"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/route53"
)

func userDomainsUpsert(c *gin.Context) {
	var req database.UserDomains
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
	}

	zoneId := getZone()
	params := &route53.ChangeResourceRecordSetsInput{
		ChangeBatch: &route53.ChangeBatch{
			Changes: []*route53.Change{
				{
					Action: aws.String("UPSERT"),
					ResourceRecordSet: &route53.ResourceRecordSet{
						Name: aws.String(req.Name),   
						Type: aws.String("CNAME"),
						ResourceRecords: []*route53.ResourceRecord{
							{
								Value: aws.String(req.Value),
							},
						},
						TTL:  aws.Int64(int64(300)),
					},
				},
			},
			Comment: aws.String("Sample update"),
		},
		HostedZoneId: aws.String(zoneId),
	}
	_, err := svc.ChangeResourceRecordSets(params)

	if err != nil {
		c.JSON(http.StatusForbidden, gin.H{"error": err})
		return
	}

	arg := database.UserDomains{
		Owner: req.Owner,
		Name:  req.Name,
		Value: req.Value,
	}

	db.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&arg).Error; err != nil {
			if err.(*mysql.MySQLError).Number == 1062 {
				c.JSON(http.StatusForbidden, gin.H{"error": "already registered"})
			}
			return err
		} else {
			c.JSON(http.StatusOK, userDomainsUpsertResponse(arg))
			return nil
		}
	})
}

func userDomainsUpsertResponse(i database.UserDomains) customUserDomainsUpsertResponse {
	return customUserDomainsUpsertResponse{
		Owner:     i.Owner,
		Name:      i.Name,
		Value:	   i.Value,
		CreatedAt: i.CreatedAt,
	}
}

type customUserDomainsUpsertResponse struct {
	Owner	  string 	`json:"owner"`
	Name  	  string    `json:"name"`
	Value     string	`json:"value"`
	CreatedAt time.Time `json:"created_at"`
}
