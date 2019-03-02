FROM balenalib/raspberry-pi-debian-node

#switch on systemd init system in container
ENV INITSYSTEM on

RUN sudo apt-get upgrade
#RUN sudo apt-get install -y software-properties-common kmod


# pip install python deps from requirements.txt
COPY ./backend/requirements.txt /requirements.txt
#RUN sudo apt-get install python3-setuptools
#RUN easy_install3 pip

WORKDIR /usr/src/app/backend
#RUN pip3 install -r /requirements.txt

COPY ./frontend/package.json /usr/src/app/frontend/package.json
#COPY ./frontend/package-lock.json /usr/src/app/frontend/package-lock.json
WORKDIR /usr/src/app/frontend
RUN npm i 

COPY . /usr/src/app
WORKDIR /usr/src/app

WORKDIR /usr/src/app
CMD ["bash","start.sh"]

