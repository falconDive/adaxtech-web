FROM node:10.14.2 as builder
WORKDIR /srv/adaxtech
COPY . /srv/adaxtech
RUN yarn
RUN yarn build
RUN cp /srv/adaxtech/public/static/media/* /srv/adaxtech/build/static/media

FROM nginx:alpine
RUN  mkdir -p /root/certs/adaxtech.com
COPY adaxtechcom.pem /root/certs/adaxtech.com/adaxtechcom.pem
COPY adaxtechcom.key /root/certs/adaxtech.com/adaxtechcom.key
RUN  chmod 400 /root/certs/adaxtech.com/adaxtechcom.key
COPY ./default.conf /etc/nginx/conf.d
RUN  mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /srv/adaxtech/build /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]