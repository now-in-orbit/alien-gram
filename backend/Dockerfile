FROM node:14
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 9229 9230
RUN mkdir /home/node/app
WORKDIR ./home/node/app
RUN chown node:users ./
RUN groupmod -g 1001 node && usermod -u 1001 -g 1001 node
USER node
COPY package.json package-lock.json ./
RUN npm install --no-optional && npm cache clean --force
CMD ["npm", "run", "dev"]
