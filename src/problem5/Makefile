args=$(filter-out $@,$(MAKECMDGOALS))

.EXPORT_ALL_VARIABLES:

ENV_FILE ?= .env
PROJECT=problem5

# export .env file
-include $(ENV_FILE)
export

all help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev: ## start server
	docker compose -f docker-compose.yaml -p $(PROJECT) up $(args) -d ${SERVICE}

down: ## stop server
	docker compose -f docker-compose.yaml -p $(PROJECT) down

logs: ## log container
	docker compose -f docker-compose.yaml -p $(PROJECT) logs -f $(args)

clean: ## clean project
	docker compose down --remove-orphans -v

package: ## install dependencies
	@bash ./scripts/install-package.sh

## migration
dbm-generate:
	docker compose exec app npm run migration:generate -- ./src/migrations/${name}

dbm-run:
	docker compose exec app npm run migration:run

dbm-revert:
	docker compose exec app npm run migration:revert
