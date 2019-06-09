package fzf

import (
	"encoding/json"
	"strconv"

	"github.com/asticode/go-astilectron"
	"github.com/asticode/go-astilectron-bootstrap"
	"github.com/asticode/go-astilog"
	"github.com/pkg/errors"
)

// handleMessages handles messages
func handleMessages(_ *astilectron.Window, m bootstrap.MessageIn) (payload interface{}, err error) {
	switch m.Name {
	case "sendNum":
		var s string
		if err := json.Unmarshal(m.Payload, &s); err != nil {
			astilog.Error(errors.Wrap(err, "json.Unmarshal failed"))
		}
		num, err := strconv.ParseFloat(s, 64)
		if err == nil {
			numbers = append(numbers,num)
		}
	case "sendSymbol":
		var s string
		if err := json.Unmarshal(m.Payload, &s); err != nil {
			astilog.Error(errors.Wrap(err, "json.Unmarshal failed"))
		}
		if err == nil {
			symbols = s
		}
	case "clear":
		numbers = numbers[:0]
		symbols = ""
	case "result":
		switch symbols {
		case "+":
			result := numbers[0] + numbers[1]
			bootstrap.SendMessage(w, "resResult", strconv.FormatFloat(result,'f',6,64))
		case "-":
			result := numbers[0] - numbers[1]
			bootstrap.SendMessage(w, "resResult", strconv.FormatFloat(result,'f',6,64))
		case "x":
			result := numbers[0] * numbers[1]
			bootstrap.SendMessage(w, "resResult", strconv.FormatFloat(result,'f',6,64))
		case "/":
			result := numbers[0] / numbers[1]
			bootstrap.SendMessage(w, "resResult", strconv.FormatFloat(result,'f',6,64))
		}
	default:
	}
	return
}

