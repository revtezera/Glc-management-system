# README

## GLC-Management-System

This README document has information on the steps necessary to get the
application up and running.

Here are some info about GLC-Management-System application:

* Steps to run the application
	
	- Clone the app from github

			https://github.com/revtezera/Glc-management-system.git

	- Install rvm (Ruby version management system) - Check how to from..
			https://rvm.io/rvm/install
	
	- Install ruby (using rvm)
	
			$ sudo rvm install 2.2.7

	- Run bundle install to install all the necessary gems to the app.
			
			$ gem install bundler
			$ bundle install
			
			Note: rails and mysql along with others must be installed now when the second command is run.

	- Install mysql DB from command line and run the following command to create the db for Glc-management-system

			$ rake db:create

	- Run migraton for tables to be formed

			$ rake db:migrate
	
	- Run the server in localhost

		        $ rails server -p3000

	- Check the app from the browser

			http://localhost:3000/

	- You are good to go !!

* Ruby version

	- Ruby 2.2.7

* Rails version

	- Rails 5.1.6

* System dependencies

* Configuration

* Database creation and initialization

	Use command: 
	$ rake db:create 
	To create Mysql database

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
