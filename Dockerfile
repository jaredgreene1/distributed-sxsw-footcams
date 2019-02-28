FROM balenalib/raspberry-pi-ubuntu-node

#switch on systemd init system in container
ENV INITSYSTEM on

# install python
RUN sudo apt-get update
RUN sudo apt-get install -y software-properties-common kmod 
RUN sudo add-apt-repository ppa:deadsnakes/ppa
RUN sudo apt-get update
RUN sudo apt-get install -y python3.6 python3-pip


# pip install python deps from requirements.txt
# For caching until requirements.txt changes
COPY ./backend/requirements.txt /requirements.txt
RUN READTHEDOCS=True pip3 install -r /requirements.txt

COPY ./frontend/package.json /usr/src/app/frontend/package.json
COPY ./frontend/package-lock.json /usr/src/app/frontend/package-lock.json
WORKDIR /usr/src/app/frontend
RUN npm i

COPY . /usr/src/app
WORKDIR /usr/src/app

CMD ["bash","start.sh"]

