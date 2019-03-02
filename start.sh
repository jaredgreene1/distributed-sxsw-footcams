#modprobe v4l2_common
cd /usr/src/app/frontend
npm run build && ./node_modules/serve/bin/serve.js -c 10 -s ./build -p 80 &

cd /usr/src/app/backend
python3.5 -m main.py 
