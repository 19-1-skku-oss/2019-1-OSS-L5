---
layout: post
title: "fzf - Web Color Picker"
categories:
  - project
tags:
  - oss
  - team
  - fzf
---

# Color Picker GUI +a

fzf Color Picker GUI 개발을 위하여 만든 view resources (html, css, js)를 활용하여 Web Color Picker도 제작하여 사용자의 접근성을 더욱 높였다.

* 해당 페이지는 초기에 외부 클라우드 서버에 nginx를 이용하여 서빙하는 방식에서, 비용  이슈 해결과 원활한 유지보수를 위해 Github static page (*gh-pages*) 를 통해 서빙하는 방식으로 변경하였다.

</br>

## fzf Web Color Picker

**[Fzf Web Color Picker](https://minsw.github.io/fzf-color-picker/)**는 fzf의 custom Color Scheme 제작을 보조해주는 Web Color Picker이다.
> Demo Link : [https://minsw.github.io/fzf-color-picker/](https://minsw.github.io/fzf-color-picker/)

</br>

<img width="1277" alt="스크린샷 2019-06-11 오전 3 54 26" src="https://user-images.githubusercontent.com/26691216/59219647-f7175900-8bfd-11e9-9aaa-68e061c2f90f.png">

기본적인 UI와 사용 방식은 [fzf Color Picker GUI](https://19-1-skku-oss.github.io/2019-1-OSS-L5/project/2019/06/11/color-picker-gui.html)와 동일하되 다음과 같은 차이점과 특징이 있다.

</br>

### Color Picker GUI 와의 비교
> Color Picker GUI와 Web은 사용자 편의성에 따라 서로 상호 보완 관계가 될 수 있을 것으로 기대
> 

1. 웹으로 접근 가능
	* 현재 GUI 적용 불가한 운영체제(ex. Windows) => <U>한계점 보완</U>
2. 하지만 자동 적용은 불가능 
	* 사용자가 직접 코드를 붙여넣어 설정해야 함 => 해당 불편함은 **GUI**로 해소
3. `RESET` / `APPLY TO FZF` 버튼 X
4. 대신 Generated Code를 복사할 수 있는 `COPY CODE` 버튼 O

	* 일시적 적용 : Generated Code를 사용자의 zsh(shell)에서 실행
	
	* 영구적 적용 : `~/.zshrc`에 Generated Code를 삽입하고 `source ~/.zshrc`로 업데이트

	

