package controllers

// generated code

import (
	"github.com/gin-gonic/gin"
)

// RegisterControllers register controllers
func RegisterControllers(r *gin.Engine) {
	
	r.GET("/aclasss", GetAclasss)
	r.GET("/aclasss/:id", GetAclass)
	r.POST("/aclasss", PostAclass)
	r.PATCH("/aclasss/:id", UpdateAclass)
	r.PUT("/aclasss/:id", UpdateAclass)
	r.DELETE("/aclasss/:id", DeleteAclass)
	
}
