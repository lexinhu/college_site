FROM node:8.2.1
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 39210
#如果在中国环境下构建请把下面注释打开
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build
CMD ["npm", "start"]