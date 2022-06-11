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

		// Blocks
		v1.GET("/block/container/list", listBlockContainers)
		v1.GET("/block/container/get/id/:id", getBlockContainerById)
		v1.GET("/block/container/get/owner/:id", getBlockContainerByOwner)

		v1.POST("/block/container/create", createBlockContainer)

		// Auth Users
		v1.GET("/auth/user/get/:id", getUserById)
		v1.GET("/auth/user/list", listUsers)

		v1.POST("/auth/user/create", createUser)
		v1.POST("/auth/user/login", loginUser)

		// Auth Orgs
		v1.GET("/auth/org/list", listOrgs)
		v1.GET("/auth/org/get/:id", getOrgById)

		v1.POST("/auth/org/create", createOrg)

		// Auth Roles
		v1.GET("/auth/role/list", listUserRoles)
		// v1.POST("/auth/create/rolebinding", CreateUser("default"))
	}

	router.Run(host + ":" + port)
}
