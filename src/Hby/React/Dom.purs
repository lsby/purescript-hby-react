module Hby.React.Dom where

import Prelude
import Hby.Task (Task)
import Hby.React.Data (HtmlElement)

foreign import render :: HtmlElement -> Task Unit
