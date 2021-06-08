FROM node:current

RUN mkdir -p /usr/app
WORKDIR /usr/app

ADD ./  /usr/app/
RUN npm install --loglevel=error
ADD docker_entrypoint /usr/bin/docker_entrypoint

ENTRYPOINT ["/usr/bin/docker_entrypoint"]

RUN npm run build-css

CMD ["npm", "start"]
