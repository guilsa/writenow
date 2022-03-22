#!/bin/bash

# README
# Q: How to call this file?
# A: From root directory, run `bash bin/makefile`

read -p "This will drop the db (db/writenow.sqlite3). Are you sure? (Y/N) " -n 1 -r
echo " Cancelled"
if [[ $REPLY =~ ^[Yy]$ ]]
then
	# Do dangerous stuff. TODO: Add db dir/filename export variable for safety.
	rm db/writenow.sqlite3
	echo "Deleting complete"
	node bin/create_db
	echo "Creating complete"
	node bin/create_seeds
	echo "Seeding complete"
fi