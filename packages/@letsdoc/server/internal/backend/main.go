package backend

import (
	"letsdoc/server/internal/database"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Server() {
	database.InitDatabase()

	router := gin.Default()
	router.Use(cors.Default())

	v1 := router.Group("/api/v1")
	{
		v1.GET("/ping", ping)

		// Auth users
		v1.GET("/auth/user/get/:id", getUserById)
		v1.POST("/auth/user/create", createUser)
		v1.POST("/auth/user/login", loginUser)

		// Document pages
		v1.POST("/doc/page/get", docPageGet)
		v1.POST("/doc/page/create", docPageCreate)

		// User domains
		v1.POST("/user/domains/get", userDomainsGet)
		v1.POST("/user/domains/upsert", userDomainsUpsert)
		v1.POST("/user/domains/delete", userDomainsDelete)
		// v1.POST("/user/domains/get/change", userDomainsGetChange)
	}

	router.Run(host + ":" + port)
}
