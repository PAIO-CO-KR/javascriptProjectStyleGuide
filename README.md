#Javascript Project Style Guide
-----------------------------------
자바스크립트 모듈 개발을 위한 프로젝트 스타일 템플릿 & 가이드. 

##Environments Setup
===========================
프로젝트를 설정하기에 앞서 필요한 도구들을 설치합니다.

* Node
노드 홈페이지에서 패키지를 받아 설치합니다. 설치가 완료된 후 콘솔에서 아래 커맨드로 설치가 정상적으로 완료되었는지 확인합니다. [download](http://nodejs.org/download/)
```
node -v
```
```
npm -v
```


* Grunt-Cli: 
Grunt-Cli는 ant와 비슷한 역할을 하는 javascript버전 Task Runner 입니다. 프로젝트를 빌드 jshint, testcase, minifying compile 등의 설정, 스크립트를 실행을 위해 필요합니다. [installing Instruction](http://gruntjs.com/getting-started)
```
sudo npm install -g grunt-cli
```


* WebStorm Grunt Integration :
웹스톰실행 후 메뉴에서 _```Preference(Setting) > external tool```_을 선택한 후 '**+**' 버튼을 눌러 새로운 설정을 추가합니다. _Program_에는 위에서 설치한 grunt커맨드의 위치를, _Working Directory_에는 _\$ProjectFileDir\$_을 _Insert Macro_버튼을 통해 추가합니다. [example](http://stackoverflow.com/questions/17043484/grunt-debugging-from-webstorm)



  
##Project Setup
===========================


* Download Project : 
템플릿 프로젝트를 다운로드 받습니다. 사용할 폴더 아래에서 본 프로젝트를 큰론 받거나 Fork합니다. 
```
git clone https://github.com/b612lodger/js-style-guide
```


* Installing grunt & grunt plugin node module : 
package.json에 명시한 grunt 및 grunt plugin 모듈을 설치하기위해 프로젝트 폴더에서 아래의 커맨드를 실행합니다.

```
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-uglify --save-dev
```


* Building Project :
Grunt에 설정한대로 프로젝트를 빌드하기 위해서는 콘솔을 통해 프로젝트 루트폴더 아래에서 아래의 커맨드를 실행합니다. "Done, widout errors."메세지를 확인하고 build폴더아래에서 자바스크립트 파일을 확인할 수 있다면 프로젝트 설정이 마무리 되었다고 확인할 수 있습니다.
```
grunt
```


##Module Definition
===========================

###References
===========================
* [Journey From RequireJS to Browserify](http://esa-matti.suuronen.org/blog/2013/03/22/journey-from-requirejs-to-browserify/)


##README.md
===========================
프로젝트의 readme mark down 파일을 작성합니다. [online editor](https://stackedit.io/)