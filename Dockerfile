# FROM node:10.14.0-alpine as builder
# WORKDIR /data
# COPY . .
# RUN npm install --registry https://registry.npm.taobao.org \
#     && npm run build

# FROM nginx:1.15.5-alpine
# COPY --from=builder /data/dist /usr/share/nginx/html

FROM nginx:1.15.5-alpine
COPY /dist /usr/share/nginx/html
