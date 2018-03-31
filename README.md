# BigchainDB Monitor

## Usage during hackathon

1. Start the docker container as usual (docker-compose up redis bigchaindb).
2. Start this application. (npm start) It will make a websocket connection and listen to transactions occuring in BigchainDB.
3. Start the backend project and see the transactions rush in.

NB: If you also want to run the front-end application, they should run on different ports
Therefore, I set this application to run on http://localhost:4201