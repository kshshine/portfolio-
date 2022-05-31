node.js 설치 url
https://nodejs.org/en/

===================================================

	* cmd 창


node -v 
	- node.js 설치 유무/버전 확인

npm -v 
	- node.js 설치 유무/버전 확인

npm list -g
	- npm의 tree structure 확인

===================================================

	* SASS 설치

npm istall -g node-sass

===================================================

	* SASS 파일을 CSS 파일로 컴파일 하기
	** scss 파일이 있는 디렉토리로 이동 해야함
	*** ex) cd c:\jin/WorkSpace/..


node-sass [options] <input.scss> [output.css]
 ex) node-sass example.scss example.css
 ex2) node-sass ./example.scss -o ./


1. 파일 한개 컴파일 시 

node-sass [options] <input.scss> [output.css]



2. 모든 폴더의 파일을 컴파일 시

node-sass my-sass-folder/ -o my-css-folder/



3. SASS 파일이 수정될 경우 자동으로 컴파일 되도록 하기

node-sass -w sass/ -o css/

-w 옵션이 파일이 변경되는 것을 감시해주는 옵션이다.

===================================================