#!/bin/sh
chown -R node /app/node_modules
npm run build && npm run start