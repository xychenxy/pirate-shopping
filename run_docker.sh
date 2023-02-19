# this is used to development
if [ -z "$1" ]
  then
    echo "Invalid command!"
    echo "./run_docker.sh [dev|staging]"
    exit 1
fi
docker-compose -f docker-compose.yml -f docker-compose.$1.yml down -v
docker-compose -f docker-compose.yml -f docker-compose.$1.yml build
docker-compose -f docker-compose.yml -f docker-compose.$1.yml up