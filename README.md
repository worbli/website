# Worbli Portal

### Polymer PRPL Server Installation Guide


##### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    sudo npm install polymer-cli --unsafe-perm -g

Install [PRPL-Server](https://www.npmjs.com/package/prpl-server)

    sudo npm install prpl-server -g

Install [nginx](https://www.nginx.com/)

    sudo apt-get install nginx

Install [PM2](http://pm2.keymetrics.io/)

    npm install pm2 -g |


##### Install

    npm install

##### Build

    npm run build

##### Start service with PM2

    sudo pm2 start npm -- start --watch 

##### Proxy with nginx

```
server {
        root /var/www/www.dac.city;
        server_name www.dac.city;

        location / {
                proxy_pass http://localhost:8080;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

    listen [::]:443 ssl ipv6only=on; 
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/www.dac.city/fullchain.pem; 
    ssl_certificate_key /etc/letsencrypt/live/www.dac.city/privkey.pem; 
    include /etc/letsencrypt/options-ssl-nginx.conf; 
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; 

}
```

##### Change Endpoint

in this file `/src/routes/network-route.js` loicate the web component called `worbli-rpc ` and change the endpoint atribute.

#### Change or add logo's 

Change the images to match the bp name as found in get info and append _100x100,png (not jpg) `/images/bp-logos`
