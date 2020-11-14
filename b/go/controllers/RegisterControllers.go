package controllers

// generated code

import (
	"github.com/gin-gonic/gin"
)

// RegisterControllers register controllers
func RegisterControllers(r *gin.Engine) {
	
	r.GET("/bclasss", GetBclasss)
	r.GET("/bclasss/:id", GetBclass)
	r.POST("/bclasss", PostBclass)
	r.PATCH("/bclasss/:id", UpdateBclass)
	r.PUT("/bclasss/:id", UpdateBclass)
	r.DELETE("/bclasss/:id", DeleteBclass)
	
}
