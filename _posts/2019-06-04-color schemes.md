---
layout: post
title: "fzf - Color Schemes"
categories:
  - project
tags:
  - oss
  - translate
  - wiki
  - fzf
---

> 본 문서는 오픈 소스 fzf의 wiki 중 ['Color Schemes'](https://github.com/junegunn/fzf/wiki/Color-schemes) Page를 발췌하여 한국어로 해석한 문서입니다. 해당 내용들은 **fzf Color Scheme Maker GUI** 개발의 바탕이 될 것입니다.
>
> * fzf github repository - [https://github.com/junegunn/fzf] (https://github.com/junegunn/fzf)
> * fzf github wiki 'Color Schemes' - [https://github.com/junegunn/fzf/wiki/Color-schemes](https://github.com/junegunn/fzf/wiki/Color-schemes) 


## `--color`

`--color` 옵션을 사용하여 fzf 의 defualt color configuration 일부 혹은 전체를 커스터마이징 할 수 있다.

```sh
# --color=[BASE_SCHEME][,COLOR:ANSI]
fzf --color=bg+:24
fzf --color=light,fg:232,bg:255,bg+:116,info:27
```

Base color scheme 이름 뒤에 커스텀한 color를 맵핑한다. 
ansi color code '-1'은 터미널의 defualt Foreground / Background 색을 나타낸다.

색을 완전히 커스터마이징한 경우에는 color specification이 꽤 길 수 있으므로, 이 때는 `$FZF_DEFAULT_OPTS`에 넣는 것이 권장되어진다.
다음과 같이 여러개의 `--color`로 나눌 수도 있다.


```sh
export FZF_DEFAULT_OPTS='
  --color fg:124,bg:16,hl:202,fg+:214,bg+:52,hl+:231
  --color info:52,prompt:196,spinner:208,pointer:196,marker:208
'
```

#### Base scheme

(default: `dark` on 256-color terminal, otherwise 16)

- `dark`    Color scheme for dark 256-color terminal
- `light`   Color scheme for light 256-color terminal
- `16`      Color scheme for 16-color terminal
- `bw`      No colors

#### Color configuration
- `fg`      Text
- `bg`      Background
- `hl`      Highlighted substrings
- `fg+`     Text (current line)
- `bg+`     Background (current line)
- `hl+`     Highlighted substrings (current line)
- `info`    Info
- `prompt`  Prompt
- `pointer` Pointer to the current line
- `marker`  Multi-select marker
- `spinner` Streaming input indicator
- `header`  Header

#### 24-bit colors

fzf 최신 버전에서는 24-bit colors도 지원하고 있다.

```sh
# Solarized colors
export FZF_DEFAULT_OPTS='
  --color=bg+:#073642,bg:#002b36,spinner:#719e07,hl:#586e75
  --color=fg:#839496,header:#586e75,info:#cb4b16,pointer:#719e07
  --color=marker:#719e07,fg+:#839496,prompt:#719e07,hl+:#719e07
'
```

## Color schemes (256-colors)

### Red

```sh
--color fg:124,bg:16,hl:202,fg+:214,bg+:52,hl+:231
--color info:52,prompt:196,spinner:208,pointer:196,marker:208
```

![](https://cloud.githubusercontent.com/assets/700826/7895679/1ad280ba-06d6-11e5-80a8-1fef0857e8e3.png)

### Molokai

```sh
--color fg:252,bg:233,hl:67,fg+:252,bg+:235,hl+:81
--color info:144,prompt:161,spinner:135,pointer:135,marker:118
```

### Jellybeans

![](https://www.dropbox.com/s/9rte6kkct6bsz1j/fzf_jellybeans_theme.png?dl=1)

```sh
--color fg:188,bg:233,hl:103,fg+:222,bg+:234,hl+:104
--color info:183,prompt:110,spinner:107,pointer:167,marker:215
```

### JellyX

![](https://i.imgur.com/1xHOaNk.png)

```sh
--color fg:-1,bg:-1,hl:230,fg+:3,bg+:233,hl+:229
--color info:150,prompt:110,spinner:150,pointer:167,marker:174
```

### Seoul256 Dusk

![](https://i.imgur.com/y6hZCnd.png)

```sh
--color fg:242,bg:236,hl:65,fg+:15,bg+:239,hl+:108
--color info:108,prompt:109,spinner:108,pointer:168,marker:168
```

### Seoul256 Night

![](https://i.imgur.com/hui2RmM.png)

```sh
--color fg:242,bg:233,hl:65,fg+:15,bg+:234,hl+:108
--color info:108,prompt:109,spinner:108,pointer:168,marker:168
```

### Solarized Dark
![](http://i.imgur.com/lrZxNTf.png)

```sh
--color dark,hl:33,hl+:37,fg+:235,bg+:136,fg+:254
--color info:254,prompt:37,spinner:108,pointer:235,marker:235
```

### Solarized Light
![](http://i.imgur.com/dqVN1du.png)

```sh
--color fg:240,bg:230,hl:33,fg+:241,bg+:221,hl+:33
--color info:33,prompt:33,pointer:166,marker:166,spinner:33
```

### Alternate Solarized Light/Dark Theme

<img width="530" alt="screenshot 2016-05-31 22 48 01" src="https://cloud.githubusercontent.com/assets/5544532/15699519/5e58d46a-2782-11e6-8b8e-91c7a15b76fe.png">
<img width="525" alt="screenshot 2016-05-31 22 49 22" src="https://cloud.githubusercontent.com/assets/5544532/15699520/5e6a170c-2782-11e6-81b3-b781aea5aa3c.png">

```zsh
_gen_fzf_default_opts() {
  local base03="234"
  local base02="235"
  local base01="240"
  local base00="241"
  local base0="244"
  local base1="245"
  local base2="254"
  local base3="230"
  local yellow="136"
  local orange="166"
  local red="160"
  local magenta="125"
  local violet="61"
  local blue="33"
  local cyan="37"
  local green="64"

  # Comment and uncomment below for the light theme.

  # Solarized Dark color scheme for fzf
  export FZF_DEFAULT_OPTS="
    --color fg:-1,bg:-1,hl:$blue,fg+:$base2,bg+:$base02,hl+:$blue
    --color info:$yellow,prompt:$yellow,pointer:$base3,marker:$base3,spinner:$yellow
  "
  ## Solarized Light color scheme for fzf
  #export FZF_DEFAULT_OPTS="
  #  --color fg:-1,bg:-1,hl:$blue,fg+:$base02,bg+:$base2,hl+:$blue
  #  --color info:$yellow,prompt:$yellow,pointer:$base03,marker:$base03,spinner:$yellow
  #"
}
_gen_fzf_default_opts
```

### Base16 colors for fzf

> 해당 color schemes collection은 [base16](https://github.com/chriskempson/base16) project 를 기반으로 한다.
> <https://github.com/nicodebo/base16-fzf>

### One Dark
![](https://i.imgur.com/vAKjBlX.png)
```sh
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
--color=dark
--color=fg:-1,bg:-1,hl:#c678dd,fg+:#ffffff,bg+:#4b5263,hl+:#d858fe
--color=info:#98c379,prompt:#61afef,pointer:#be5046,marker:#e5c07b,spinner:#61afef,header:#61afef
'
```