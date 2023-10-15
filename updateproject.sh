echo "Shell Calistiriliyor..."

echo "port yok ediliyor..."

cd ../$1

git pull origin master

docker compose down

docker compose build

docker compose up -d && echo "Basarili"