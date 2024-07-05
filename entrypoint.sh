#!/bin/sh
chown -R node /client/node_modules
npm run build && npm run start