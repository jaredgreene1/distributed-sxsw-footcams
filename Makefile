deploy:
	cd frontend; npm run build
	git push balena master 


ssh:
	sudo balena local ssh 192.168.0.25
