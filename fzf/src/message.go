package fzf

import (
	"encoding/json"

	"github.com/asticode/go-astilectron"
	"github.com/asticode/go-astilectron-bootstrap"
	"github.com/asticode/go-astilog"
	"github.com/pkg/errors"
	"os"
	"fmt"
)

// handleMessages handles messages
func handleMessages(_ *astilectron.Window, m bootstrap.MessageIn) (payload interface{}, err error) {
	switch m.Name {
	case "sendCode":
		var s string
		if err := json.Unmarshal(m.Payload, &s); err != nil {
			astilog.Error(errors.Wrap(err, "json.Unmarshal failed"))
		}
		var outputFile, _ = os.Create(".ColorConfig")
		defer outputFile.Close()
		s = s + "\n"
		fmt.Fprint(outputFile, s)

	default:
	}
	return
}

