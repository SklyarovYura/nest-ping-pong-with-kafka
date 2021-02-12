FROM node:12.13 as dist
WORKDIR /tmp/
COPY package.json package-lock.json tsconfig.json tsconfig.build.json start.sh ./
RUN npm install --quiet
COPY src/ src/
RUN npm run build

FROM node:12.13 as node_modules
WORKDIR /tmp/
COPY package.json package-lock.json tsconfig.json tsconfig.build.json start.sh ./
RUN npm install --production

FROM node:12.13
WORKDIR /app
COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
COPY --from=dist /tmp/start.sh ./dist

USER node

CMD [ "./dist/start.sh" ]
