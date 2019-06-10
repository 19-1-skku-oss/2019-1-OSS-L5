# command-line fuzzy finder(fzf)

## Introduce Our Team

### Team Member([Wiki](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki))
* 박경연(팀장) [`contestpark`](https://github.com/contestpark)
* 김홍빈 [`HongBeenKim`](https://github.com/HongBeenKim)
* 민세원 [`minSW`](https://github.com/minSW)
* 이영우 [`duddn311`](https://github.com/duddn311)

### Wiki
* [Home](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki)
* [History](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki/History)
* [New Scheme](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki/New-Schemes)
* [Role](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki/Role)

### Web Site
* [https://19-1-skku-oss.github.io/2019-1-OSS-L5/](https://19-1-skku-oss.github.io/2019-1-OSS-L5/)

___


## Introduce Our Project ([Original Repository](https://github.com/junegunn/fzf))

<img src="https://raw.githubusercontent.com/junegunn/i/master/fzf.png" width="40%">

> ***fzf** is a general-purpose command-line fuzzy finder.*
>
> It's an interactive Unix filter for command-line that can be used with any list; files, command history, processes, hostnames, bookmarks, git commits, etc.

주어진 input 에 대해서 fuzzy finding 을 하게 해주는 ***Command line Fuzzy Finder*** 로, 쉽게 말해 터미널에서의 finder 명령어를 대신할 수 있다.

approximate string matching로 정해진 형식으로 typing하면 fzf 결과를 손쉽게 확인 할 수 있다.

현재 한국에서 가장 활발하게 활동 중인 오픈소스 소프트웨어이다.

</br>

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/original2.png" width="70%">

예를들어 fzf를 실행시킨 후 `exampleo`를 검색하면 다음과 같이 `exampleo`가 들어간 모든 파일을 찾아준다.

이 오픈소스의 다양한 기능 중에는 터미널 배경의 색을 바꿀 수 있는 [Color Scheme](https://github.com/junegunn/fzf/wiki/Color-schemes)라는 기능이 있는데, 다음과 같은 코드를 terminal에 입력하면,

```sh
export FZF_DEFAULT_OPTS='
  --color fg:65,bg:235,hl:74,fg+:188,bg+:59,hl+:74
  --color info:174,prompt:174,spinner:174,pointer:102,marker:102
'
```
<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/dark.png" width="70%">

다음과 같이 fzf의 테마가 바뀐다.

우리 팀은 이 Color Scheme 부분에 추가적인 기능을 구현하기로 했는데,

1. 원래 프로젝트에 소개된 Color Scheme의 종류가 너무 적고  
2. 사용자가 직접 색깔을 customize할 경우 RGB값을 일일히 찾아 코드를 만들기 불편하기 때문이다.






## Install and Execute

## What We Implemented

### 1. Translation of Color Scheme Wiki



### 2. New Static Color Scheme
기존에 있는 Color Scheme에 정적 Scheme 몇가지를 더 추가하였다.([Wiki](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki/New-Schemes) 참고)

이 Scheme들은 개발자들이 익숙한 다양한 Visual Studio Code의 테마를 기반으로 만들었다.

예를들어 VS Code의 테마중 하나인 `Dark`테마와 비교를 해보면

**Visual Studio Code** `Dark`

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/vscode.png" width="70%">

**fzf Scheme** `Dark`

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/dark.png" width="70%">

로 테마가 거의 비슷하게 만들어졌음을 알 수 있다. 

더 다양한 테마는 Wiki의 [New Scheme](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki/New-Schemes)참고.

### 3. Implement Color Scheme GUI
