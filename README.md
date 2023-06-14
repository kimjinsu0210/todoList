# 프로젝트 명: My Todo List
## React 로 만든 나의 할일 리스트 페이지 입니다.
기능: <br/>
제목과 내용을 입력하고 '추가하기' 버튼 클릭 시 나의 할일이 목록에 추가되고 할일을 완료하면 '완료하기' 버튼을 클릭해 내 할일을 완료 목록에 이동시킬 수 있습니다. 또한 '삭제하기' 버튼을 이용해 할일을 삭제할 수도 있습니다.
___
+ 고려사항

node module 을 제외하고 push 했기 때문에 clone 받은 프로젝트 경로에 다음 작업으로 node module을 설치 하시길 바랍니다. 

    npm install
    
---
## Components

+ Layout

최대 1200px 최소 800px 의 전체 레이아웃을 묶은 컴포넌트 입니다.
<br/><br/>
+ Header

layout의 title을 나타내는 컴포넌트 입니다.
<br/><br/>
+ Form

input 태그 및 button 태그가 존재해 할일을 입력하고 저장하는 역할을 하는 컴포넌트 입니다.
<br/><br/>
+ Content


할일 List 및 완료된 할일 List를 추가하고 삭제하는 컴포넌트 입니다.
<br/><br/>
## CSS
+ App.css
