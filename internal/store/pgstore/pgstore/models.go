// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0

package pgstore

import (
	"github.com/google/uuid"
)

type Message struct {
	ID       uuid.UUID
	RoomID   uuid.UUID
	Message  string
	Reaction int64
	Answered bool
}

type Room struct {
	ID    uuid.UUID
	Theme string
}
