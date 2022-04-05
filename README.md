## Build with docker
1. Build docker image
```
docker build . -t alexandria-frontend
```

2. Run container
```
docker container run --name alexandria-frontend -p 8080:80 -v $PWD:/var/www/alexandria-frontend -it -d alexandria-frontend
```

3. Attach to container.
```
docker exec -it alexandria-frontend /bin/bash
```

4. Initialize docker
```
/var/www/alexandria-frontend/conf/init-docker.sh
```

Go to http://127.0.0.1:8080/ and start development
