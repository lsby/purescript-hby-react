module Test.Main where

import Prelude
import Effect (Effect)
import Hby.React.Component (HtmlM(..), htmlB, htmlM, mkHtmlE, setStyle, testElement, text)
import Hby.React.Dom (render)
import Hby.React.Grid (GridItemPlaceItem(..), GridSize(..), setGrid, setGridItemPlaceCol, setGridItemPlaceRow, setGridSizeCol, setGridSizeRow)
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
      $ htmlB "div"
      $ [ testElement
        , testElement
        , testElement
        , testElement
        , setGridItemPlaceCol GridItemPlace_Center
            $ setGridItemPlaceRow GridItemPlace_Center
            $ setGrid
            $ htmlM "div" [ Builder (text "你好世界") ]
        , testElement
        , testElement
        , testElement
        , testElement
        ]
