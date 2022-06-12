package backend

import (
	"time"
	"net/http"
	// "gorm.io/gorm"
	// "github.com/go-sql-driver/mysql"

	"letsdoc/server/internal/database"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/route53"
	"github.com/gin-gonic/gin"
)

func userDomainsDelete(c *gin.Context) {
	var req database.UserDomains
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
	}

	zoneId := getZone()
	params := &route53.ChangeResourceRecordSetsInput{
		ChangeBatch: &route53.ChangeBatch{
			Changes: []*route53.Change{
				{
					Action: aws.String("DELETE"),
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
			Comment: aws.String("Sample delete"),
		},
		HostedZoneId: aws.String(zoneId),
	}
	_, err := svc.ChangeResourceRecordSets(params)

	if err != nil {
		c.JSON(http.StatusForbidden, gin.H{"error": err})
		return
	}
}

func userDomainsDeleteResponse(i database.UserDomains) customUserDomainsDeleteResponse {
	return customUserDomainsDeleteResponse{
		Owner:     i.Owner,
		Name:      i.Name,
		Value:	   i.Value,
		Deleted:   i.Deleted,
		CreatedAt: i.CreatedAt,
	}
}

type customUserDomainsDeleteResponse struct {
	Owner	  string 	`json:"owner"`
	Name  	  string    `json:"name"`
	Value     string	`json:"value"`
	Deleted   string	`json:"deleted"`
	CreatedAt time.Time `json:"created_at"`
}
