module Test.Main where

import Prelude
import Component.Component (GridSize(..), HtmlSize(..), grid, mkGrid, setGridColSize, setGridHeight, setGridItemArea, setGridRowSize, testElement)
import Data.Tuple (Tuple(..))
import Effect (Effect)
import Hby.React.Dom (render)
import Hby.Task (runTask_)

main :: Effect Unit
main =
  runTask_ do
    render $ mkGrid
      $ setGridHeight (H_Scale 100.0)
      $ setGridColSize [ S_Fr 1, S_Fr 1, S_Fr 1 ]
      $ setGridRowSize [ S_Fr 1, S_Fr 1, S_Fr 1 ]
      $ grid
      $ [ setGridItemArea (Tuple 0 0) (Tuple 2 2) testElement
        , testElement
        , testElement
        , testElement
        , sub
        , testElement
        ]
  where
  sub =
    mkGrid
      $ setGridColSize [ S_Fr 1, S_Fr 1 ]
      $ setGridRowSize [ S_Fr 1, S_Fr 1 ]
      $ grid
      $ [ setGridItemArea (Tuple 0 0) (Tuple 1 2) testElement
        , testElement
        , testElement
        ]
