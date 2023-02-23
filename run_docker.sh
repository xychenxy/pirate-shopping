if [ -z "$1" ]
  then
    echo "Invalid command!"
    echo "./run_docker.sh [dev|staging|prod]"
    exit 1
fi
docker-compose  -f docker-compose.$1.yml down -v
docker-compose  -f docker-compose.$1.yml build
docker-compose  -f docker-compose.$1.yml up

# docker-compose -f docker-compose.yml -f docker-compose.$1.yml down -v
# docker-compose -f docker-compose.yml -f docker-compose.$1.yml build
# docker-compose -f docker-compose.yml -f docker-compose.$1.yml up

# docker-compose down -v
# docker-compose build backend react-app
# docker-compose up backend react-app
