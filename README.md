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

### [Web Site](https://19-1-skku-oss.github.io/2019-1-OSS-L5/)

## Introduce Our Project ([Original Repository](https://github.com/junegunn/fzf))

<img src="https://raw.githubusercontent.com/junegunn/i/master/fzf.png" width="40%">

> ***fzf** is a general-purpose command-line fuzzy finder.*
>
> It's an interactive Unix filter for command-line that can be used with any list; files, command history, processes, hostnames, bookmarks, git commits, etc.

주어진 input 에 대해서 fuzzy finding 을 하게 해주는 *Command line Fuzzy Finder* 로, 쉽게 말해 터미널에서의 finder 명령어를 대신할 수 있다.
approximate string matching로 정해진 형식으로 typing하면 fzf 결과를 손쉽게 확인 할 수 있다.
현재 한국에서 가장 활발하게 활동 중인 오픈소스 소프트웨어이다.

## Install

## What We Implemented

### New Static Color Scheme
기존에 있는 Color Scheme에 정적 테마 몇가지를 더 추가하였다.([Wiki](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki/New-Schemes) 참고)

예를들어 다음과 같은 코드를 bash나 zsh에 입력하게 되면

```sh
export FZF_DEFAULT_OPTS='
  --color fg:65,bg:235,hl:74,fg+:188,bg+:59,hl+:74
  --color info:174,prompt:174,spinner:174,pointer:102,marker:102
'
```

**original scheme**

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/original.png" width="70%">

**modified scheme**

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/dark.png" width="70%">

자세한 내용은 Wiki의 [New Scheme](https://github.com/19-1-skku-oss/2019-1-OSS-L5/wiki/New-Schemes)참고.

### Translation of Color Scheme Wiki

### Implement Color Scheme GUI
