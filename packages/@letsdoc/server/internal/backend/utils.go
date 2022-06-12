package backend

import (
	// "encoding/json"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"

	"letsdoc/server/internal/database"

	"strings"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/route53"
)

const (
	host = "127.0.0.1"
	port = "8000"
)

var (
	db              = database.DB
	db_err			= database.DB_err
	userInfos       = []database.UserInfos{}
	docPages		= []database.DocPages{}
	userDomains		= []database.UserDomains{}
	c               = &gin.Context{}
	svc 			= route53.New(session.Must(session.NewSession()))
)

func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("failed to hash password: %w", err)
	}
	return string(hashedPassword), nil
}

func verifyPassword(password string, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}

func errorHandler(err error) gin.H {
	return gin.H{"error": err.Error()}
}

func customErrorHandler(message string) gin.H {
	mes := messageStatus{
		Status:  "failed",
		Message: message}
	return gin.H{mes.Status: mes.Message}
}

// Rework
// func customHandler(code int, status string, message string) (c gin.Context) {
// 	mes := messageStatus{
// 		Status: status,
// 		Message: message }
// 	c.JSON(code, gin.H{mes.Status: mes.Message})
// 	return
// }

func parseJsonInfo(data []database.UserInfos) (v interface{}) {
	for _, v = range data {
	}
	return
}

func verifyBind(req interface{}) {
	var c *gin.Context
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, errorHandler(err))
		return
	}
}

type messageStatus struct {
	Status  string
	Message string
}

func getZone() string {
	input := &route53.ListHostedZonesByNameInput{
		MaxItems: aws.String("2000"),
	}

	resp, _ := svc.ListHostedZonesByName(input)
	id := strings.Split(*resp.HostedZones[0].Id, "/")[2]

	return id
}
