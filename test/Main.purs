module Test.Main where

import Prelude
import Effect (Effect)
import Hby.React.Component (htmlE, mkHtmlE, setGrid, setStyle, testElement)
import Hby.React.Dom (render)
import Hby.React.Grid (GridSize(..), setGridSizeCol, setGridSizeRow)
import Hby.Task (runTask_)

main :: Effect Unit
main =
  runTask_ do
    render
      $ mkHtmlE
      $ setStyle { height: "100%" }
      $ setGridSizeCol [ GridSize_Fr 1, GridSize_Fr 1, GridSize_Fr 1 ]
      $ setGridSizeRow [ GridSize_Fr 1, GridSize_Fr 1, GridSize_Fr 1 ]
      $ setGrid
      $ htmlE "div"
      $ [ testElement
        , testElement
        , testElement
        , testElement
        , testElement
        , testElement
        , testElement
        , testElement
        , testElement
        ]
