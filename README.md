# ADAX Tech

## Requirements

- Install docker https://www.docker.com/get-started
- Install git https://git-scm.com/downloads

## Initial Setup

### SSH

```bash
ssh keygen

cat C:\Users\aaron\.ssh\id_rsa.pub
```

Then paste the output on https://github.com/settings/ssh/new

### Docker

```bash
docker login
```
Enter your credentials

## Clone Repository

```bash
git clone git@github.com:hybridblockPH/adaxtech-web.git
```

## Create Builds
```bash
Development: docker-compose build adaxtech_dev
Staging: docker-compose build adaxtech_staging
Production: docker-compose build adaxtech

At the end of building you will see:
Successfully built 57573cb70152
Successfully tagged adax_adaxtech_apps_staging:latest
```

## Tag the latest ID to the Docker repo
```bash
docker tag (image ID) hybridblock/stx:lastet (production)
docker tag (image ID) hybridblock/stx:latest_staging (staging) 
```
## Push the image to the docker repo
```bash
docker push hybridblock/stx:latest (production)
docker push hybridblock/stx:latest_staging (staging)
```
## SSH Into Prod or Staging Instance
```bash
Production: ssh -i C:\Users\aaron\pemandppkfiles\adaxproduction.pem ubuntu@18.136.206.75
Staging: ssh -i C:\Users\aaron\pemandppkfiles\adaxtech.pem ubuntu@13.229.116.220
```
## Pull and Run the Build
```bash
docker pull hybridblock/stx:latest (production)
docker pull hybridblock/stx:latest_staging (staging) 
```
```bash
Run Production: docker run -d -p 80:80 -p 443:443 -v /etc/nginx/certs:/etc/nginx/certs hybridblock/stx:latest
Run Staging: docker run -d -p 80:80 -p 443:443 -v /etc/nginx/certs:/etc/nginx/certs hybridblock/stx:latest_staging
Run Developement: docker run -p 80:80 adaxtech_dev:latest
```
Dev: Visit http://localhost


## URLs

http://localhost or http://localhost/#/ <br >
http://localhost/#/profile <br >
http://localhost/adax/#/```

Visit https://adaxtech.com

## SSL Keys Setup

```bash
scp -i C:\Users\aaron\pemandppkfiles\adaxtech.pem C:\Users\aaron\certs/adaxtechcom.* ubuntu@STAGING_OR_PRODUCTION_IP_HERE:~/

ssh -i C:\Users\aaron\pemandppkfiles\adaxtech.pem ubuntu@STAGING_OR_PRODUCTION_IP_HERE

sudo su

mkdir -p /etc/nginx/certs

cp adaxtech.com.* /etc/nginx/certs
```

## Configuration

- Pairings: C:\Users\aaron\adaxtech-web\src\sagas\instruments-saga.js Line 24
- AlphaPoint: C:\Users\aaron\adaxtech-web\src\services\ExchangeService.js Line 88

## Troubleshooting

Error 1

```bash
ERROR: for adaxtech_dev  Cannot start service adaxtech_dev: driver failed programming external connectivity on endpoint adaxtech_dev (29ee6db598b6d2c493ac59367d3eeb313d371acc11595ea0d245ba22d434176a): Bind for 0.0.0.0:3004 failed: port is already allocated
ERROR: for adaxtech_dev  Cannot start service adaxtech_dev: driver failed programming external connectivity on endpoint adaxtech_dev (29ee6db598b6d2c493ac59367d3eeb313d371acc11595ea0d245ba22d434176a): Bind for 0.0.0.0:3004 failed: port is already allocated
ERROR: Encountered errors while bringing up the project.
```

Fix Error 1

```bash
docker ps # copy the CONTAINER ID of the container that uses the port :3004

docker stop CONTAINER_ID_HERE # paste it here

docker-compose up adaxtech_dev # run dev once again
```