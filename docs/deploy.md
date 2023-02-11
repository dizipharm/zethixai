## Depoyment on dev server
fallowing are deployment process
### Connecting to server 
Execute fallowing command in the directory of pem file exists.
Assuming OS is linux
```
// change pem key file permission for first time
chmod 400 aidizi.pem

// connect to server 
ssh -i aidizi.pem ubuntu@api2.tracepharm.io
//after connecting to server 
cd scripts/trace-ui/ && git pull origin main
//build code 
npm run build
// restart service 
pm2 restart 0
```
