DOCKERIMGNAME=cypress-ui-test
CYPRESSRUNCMD=npx cypress run
CYPRESSGUICMD=npx cypress open

test:
	$(CYPRESSRUNCMD)

test-gui:
	$(CYPRESSGUICMD)

test-record:
	$(CYPRESSRUNCMD) --record

docker-build:
	docker-compose build

docker-test:
	docker-compose up --build

docker-test-development:
	docker-compose -f docker-compose.dev.yml up --build

docker-test-production:
	docker-compose -f docker-compose.prod.yml up --build

docker-delete-image:
	docker-compose down --rmi all

docker-delete-container:
	docker-compose rm