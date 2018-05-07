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

               --------------------------------------------------------------------------
                    For Windows Machine Users: You Can use the following Steps to Install
		    Rails on your Machine:
	       --------------------------------------------------------------------------
- Clone the app from github

			https://github.com/revtezera/Glc-management-system.git

* Install rvm (Ruby version management system) - You Can follow the steps from here..
			installrails.com/
* Choose you OS from here: http://installrails.com/steps/choose_os
* Then download the Ruby for you machine from http://railsinstaller.org/en
* Then install Ruby on your machine, 
* Then Open gitbash from your start menu (dont worry Git and gitbash are included on the ruby you downloaded earlier)
    (you will find it under railsinstaller in the start menu)
* Then just copy paste this "curl http://installrails.com/update_rubygems.rb | ruby" on the command line
* Then following this gems, copy and paste this on the command line too "$ gem install rails --no-ri --no-rdoc"
* You can check the version of your ruby typing this "$ ruby --version" and "$ rails --version"

Then Finaly follow the steps above: 
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


             
