// generated by genORMTranslation.go
package orm

import (
	"errors"

	"github.com/jinzhu/gorm"
)

// TranslationImpact distinguish CREATE or UPDATE mode when translating
type TranslationImpact int

const (
	CreateMode TranslationImpact = iota // target objects are not initialized yet
	UpdateMode                          // target objects already exists and are only updated
)

// AllORMStoreStruct supports callback functions
type AllORMStoreStruct struct {
	db *gorm.DB
}

var AllORMStore AllORMStoreStruct

func (allORMStore *AllORMStoreStruct) SetDB(db *gorm.DB) {
	allORMStore.db = db
}

// AllORMToModels init reset all stores of models and orm instances
func AllModelsToORM(db *gorm.DB) (Error error) {


	map_BclassDBID_BclassDB = nil
	map_BclassPtr_BclassDBID = nil
	map_BclassDBID_BclassPtr = nil
	if err := ModelToORMBclassTranslate(
		CreateMode,
		db); err != nil {
		return err
	}


	// and now update of the pointer fields
	// now the pointers
	if err := ModelToORMBclassTranslate(
		UpdateMode,
		db); err != nil {
		return err
	}


	return nil
}

// AllORMToModels update all stores of models to orm instances
func AllModelsUpdateToORM(db *gorm.DB) (Error error) {


	// and now update of the pointer fields
	// now the pointers
	if err := ModelToORMBclassTranslate(
		UpdateMode,
		db); err != nil {
		return err
	}


	return nil
}


// AllORMToModels init reset all stores of models and orm instances
func AllORMToModels(db *gorm.DB) (Error error) {

	// Init all instances of in the model store

	map_BclassDBID_BclassDB = nil
	map_BclassPtr_BclassDBID = nil
	map_BclassDBID_BclassPtr = nil
	if err := ORMToModelBclassTranslate(
		CreateMode, 
		db); err != nil {
		err := errors.New("AllORMToModels, CreateMode Translation of Bclass failed")
		return err
	}



	if err := ORMToModelBclassTranslate(
			UpdateMode, 
			db); err != nil {
		err := errors.New("AllORMToModels, UpdateMode Translation of Bclass failed")
		return err
	}

	return nil
}

// AllORMUpdateToModels init reset all stores of models and orm instances
func AllORMUpdateToModels(db *gorm.DB) (Error error) {

	// Init all instances of in the model store

	if err := ORMToModelBclassTranslate(
			UpdateMode, 
			db); err != nil {
		err := errors.New("AllORMToModels, UpdateMode Translation of Bclass failed")
		return err
	}

	return nil
}
