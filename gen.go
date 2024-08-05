package gen

//go:generate go run ./cmd/tool/terndotenv/main.go
//go:generate sqlc generate -f ./internal/store/pgstore/sqlc.yaml
