FROM nginx
COPY . /usr/share/nginx/html/
# That's it. tls and certs are handled by reverse proxy.