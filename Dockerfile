FROM balenalib/raspberry-pi-debian-node

#switch on systemd init system in container
ENV INITSYSTEM on

RUN sudo apt-get update
#RUN sudo apt-get install -y software-properties-common kmod


# pip install python deps from requirements.txt
RUN sudo apt-get install python3-setuptools python3-pip python3-picamera
COPY ./backend/requirements.txt /usr/src/app/backend/requirements.txt

WORKDIR /usr/src/app/backend
RUN pip3 install -r /usr/src/app/backend/requirements.txt

COPY ./frontend/package.json /usr/src/app/frontend/package.json
#COPY ./frontend/package-lock.json /usr/src/app/frontend/package-lock.json
WORKDIR /usr/src/app/frontend
RUN npm i 

COPY . /usr/src/app
WORKDIR /usr/src/app

WORKDIR /usr/src/app
CMD ["bash","start.sh"]

