PATH := ./node_modules/.bin:${PATH}

.PHONY : all

all : init build

init :
	npm install

build :
	webpack
	pug src -o app --pretty