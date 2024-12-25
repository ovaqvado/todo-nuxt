#run project
npm run dev

#run docker
docker build -t todo-app .
docker run -p 3000:3000 todo-app
