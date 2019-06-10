---
layout: post
title: "fzf - Color Picker GUI"
categories:
  - project
tags:
  - oss
  - team
  - fzf
---

# Color Picker

## Implementation

Color Picker를 구현하는데 [go-atilectron-bundler](https://github.com/asticode/go-astilectron-bundler)를 사용하였다.

html, css, js를 통해 view를 만들고, 이 프로그램을 통해 기존의 fzf와 통신할 수 있게 만들어 주었다. ([issue #10](https://github.com/19-1-skku-oss/2019-1-OSS-L5/issues/10) 참고)

### Install go-astilectron-bundler

**Install**
* Download [go-astilectron-bootstrap](https://github.com/asticode/go-astilectron-bootstrap)
* Download [go-astilectron-bundler](https://github.com/asticode/go-astilectron-bundler)
* ~/go/src/github.com/asticode/go-astilectron-bundler에서 `go install ./astilectron-bundler`
* ~/go/src/github.com/asticode/go-astilectron-bundler/astilectron-bundler에서 `go build`

**Environment variable**
```sh
export GOPATH=$HOME/go
export GOBIN=$HOME/go/bin
export PATH=$PATH:/usr/local/go/bin:$(go env GOBIN)
```


### Make Color Picker through html, css, js

먼저, Color Picker를 먼저 html, css, js를 통해 구현하였다.

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/colorpicker_html.png" width="70%">


### Make Color Picker GUI using go-astilectron-bundler

다음으로, go-astilectron-bundler를 사용해 Color Picker GUI를 구현한 결과이다

환경변수를 등록한 경우 `$ fzf --color g` 를 통해 사용할 수 있다.

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/colorpicker_gui.png" width="70%">

`Reset`을 누르는 경우 전에 fzf에 적용되어있던 scheme으로 되돌아가고, `Apply to fzf`를 누른 뒤 창을 닫으면 fzf에 내가 설정한 Scheme이 적용된걸 볼 수 있다.

<img src="https://raw.githubusercontent.com/19-1-skku-oss/2019-1-OSS-L5/master/picture/colorpicker_result.png" width="70%">


## Install and Usage

### Install

* Download

```sh
$ git clone https://github.com/19-1-skku-oss/2019-1-OSS-L5.git
```

* Build(using astilectron)

```sh
$ cd fzf
$ astilectron-bundler cc
$ astilectron-bundler -v
$ go build
$ fzf --color g
```

* Modify Environment variable

```sh
$ export FZF_PATH="파일 다운받은 경로/fzf"
$ export PATH=$FZF_PATH:$PATH
```

### Usage

* Color Picker 실행

```sh
$ fzf --color g
```

* fzf 실행

```sh
$ fzf
```

