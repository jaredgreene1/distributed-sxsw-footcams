FROM balenalib/raspberry-pi-debian-node

#switch on systemd init system in container
ENV INITSYSTEM on

# install python
RUN sudo apt-get update
RUN sudo apt-get install -y software-properties-common kmod 


# pip install python deps from requirements.txt
# For caching until requirements.txt changes
COPY ./backend/requirements.txt /requirements.txt

COPY ./frontend/package.json /usr/src/app/frontend/package.json
#COPY ./frontend/package-lock.json /usr/src/app/frontend/package-lock.json
WORKDIR /usr/src/app/frontend
RUN npm i 

RUN sudo apt-get install python3-setuptools
RUN easy_install3 pip


COPY . /usr/src/app
WORKDIR /usr/src/app

WORKDIR /usr/src/app/backend
RUN READTHEDOCS=True pip3 install -r /requirements.txt

WORKDIR /usr/src/app
CMD ["bash","start.sh"]

