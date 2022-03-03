module Test.Main where

import Prelude
import Effect (Effect)
import Hby.React.Component (testElement)
import Hby.React.Dom (render)
import Hby.Task (runTask_)

main :: Effect Unit
main =
  runTask_ do
    render
      $ testElement
