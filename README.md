

for run test 

```shell
cd [ PROJECT_ROOT_DIRECTORY ]
npm install

docker build -t pingpong .

cd ./test
docker-compouse up
```

check server B started

```shell
cd [ PROJECT_ROOT_DIRECTORY ]
npm run test:e2e

```
