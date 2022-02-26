module Hby.React.Component where

import Prelude
import Data.Argonaut (class EncodeJson)
import Data.Argonaut (encodeJson, stringify) as A
import Data.Tuple (Tuple)
import Hby.MemoizeOne (memoizeOnce)
import Hby.React.Data (HtmlElement)
import Hby.Task (Task)

--------------------------
foreign import _testElement :: Unit -> HtmlElement

testElement :: HtmlElement
testElement = memoizeOnce $ _testElement unit

--------------------------
data GridSize
  = S_Px Number
  | S_Scale Number
  | S_Fr Int
  | S_MinMax GridSize GridSize
  | S_Auto
  | S_Repeat Int GridSize
  | S_Fill GridSize

instance encodeJson_GridSize :: EncodeJson GridSize where
  encodeJson a = case a of
    S_Px value -> A.encodeJson { constructor: "px", value }
    S_Scale value -> A.encodeJson { constructor: "scale", value }
    S_Fr value -> A.encodeJson { constructor: "fr", value }
    S_MinMax min max -> A.encodeJson { constructor: "minmax", min, max }
    S_Auto -> A.encodeJson { constructor: "auto" }
    S_Repeat n value -> A.encodeJson { constructor: "repeat", n: n, value }
    S_Fill value -> A.encodeJson { constructor: "fill", value }

data GridGap
  = G_Px Number

instance encodeJson_GridGap :: EncodeJson GridGap where
  encodeJson a = case a of
    G_Px value -> A.encodeJson { constructor: "px", v: value }

toJsonString :: forall a. EncodeJson a => a -> String
toJsonString a = A.stringify $ A.encodeJson a

data GridDirection
  = D_RowPre
  | D_ColumnPre

instance encodeJson_GridDirection :: EncodeJson GridDirection where
  encodeJson a = case a of
    D_RowPre -> A.encodeJson "row"
    D_ColumnPre -> A.encodeJson "column"

data GridPlaceItem
  = C_Start
  | C_End
  | C_Center
  | C_Stretch
  | C_SpaceAround
  | C_SpaceBetween
  | C_SpaceEvenly

instance encodeJson_GridPlaceItem :: EncodeJson GridPlaceItem where
  encodeJson a = case a of
    C_Start -> A.encodeJson "start"
    C_End -> A.encodeJson "end"
    C_Center -> A.encodeJson "center"
    C_Stretch -> A.encodeJson "stretch"
    C_SpaceAround -> A.encodeJson "space-around"
    C_SpaceBetween -> A.encodeJson "space-between"
    C_SpaceEvenly -> A.encodeJson "space-evenly"

data GridItemPlaceItem
  = I_Start
  | I_End
  | I_Center
  | I_Stretch

type GridItemPlaceRowItem
  = GridItemPlaceItem

type GridItemPlaceColItem
  = GridItemPlaceItem

instance encodeJson_GridItemPlaceItem :: EncodeJson GridItemPlaceItem where
  encodeJson a = case a of
    I_Start -> A.encodeJson "start"
    I_End -> A.encodeJson "end"
    I_Center -> A.encodeJson "center"
    I_Stretch -> A.encodeJson "stretch"

data HtmlSize
  = H_Px Number
  | H_Scale Number

instance encodeJson_HtmlSize :: EncodeJson HtmlSize where
  encodeJson a = case a of
    H_Px value -> A.encodeJson { constructor: "px", value }
    H_Scale value -> A.encodeJson { constructor: "scale", value }

foreign import data Grid :: Type

foreign import data GridBuilder :: Type

foreign import _mkGrid :: GridBuilder -> HtmlElement

mkGrid :: GridBuilder -> HtmlElement
mkGrid = memoizeOnce _mkGrid

foreign import _grid :: Array HtmlElement -> GridBuilder

grid :: Array HtmlElement -> GridBuilder
grid = memoizeOnce _grid

foreign import _setGridWidth :: String -> GridBuilder -> GridBuilder

setGridWidth :: HtmlSize -> GridBuilder -> GridBuilder
setGridWidth a g = memoizeOnce $ _setGridWidth (toJsonString a) g

foreign import _setGridHeight :: String -> GridBuilder -> GridBuilder

setGridHeight :: HtmlSize -> GridBuilder -> GridBuilder
setGridHeight a g = memoizeOnce $ _setGridHeight (toJsonString a) g

foreign import _setGridRowSize :: String -> GridBuilder -> GridBuilder

setGridRowSize :: Array GridSize -> GridBuilder -> GridBuilder
setGridRowSize a g = memoizeOnce $ _setGridRowSize (toJsonString a) g

foreign import _setGridColSize :: String -> GridBuilder -> GridBuilder

setGridColSize :: Array GridSize -> GridBuilder -> GridBuilder
setGridColSize a g = memoizeOnce $ _setGridColSize (toJsonString a) g

foreign import _setGridRowGap :: String -> GridBuilder -> GridBuilder

setGridRowGap :: GridGap -> GridBuilder -> GridBuilder
setGridRowGap a g = memoizeOnce $ _setGridRowGap (toJsonString a) g

foreign import _setGridColGap :: String -> GridBuilder -> GridBuilder

setGridColGap :: GridGap -> GridBuilder -> GridBuilder
setGridColGap a g = memoizeOnce $ _setGridColGap (toJsonString a) g

foreign import _setGridDirection :: String -> GridBuilder -> GridBuilder

setGridDirection :: GridDirection -> GridBuilder -> GridBuilder
setGridDirection a g = memoizeOnce $ _setGridDirection (toJsonString a) g

foreign import _setGridRowPlace :: String -> GridBuilder -> GridBuilder

setGridRowPlace :: GridPlaceItem -> GridBuilder -> GridBuilder
setGridRowPlace a g = memoizeOnce $ _setGridRowPlace (toJsonString a) g

foreign import _setGridColPlace :: String -> GridBuilder -> GridBuilder

setGridColPlace :: GridPlaceItem -> GridBuilder -> GridBuilder
setGridColPlace a g = memoizeOnce $ _setGridColPlace (toJsonString a) g

foreign import _setGridItemPlace :: String -> String -> HtmlElement -> HtmlElement

setGridItemPlace :: GridItemPlaceRowItem -> GridItemPlaceColItem -> HtmlElement -> HtmlElement
setGridItemPlace r c h = memoizeOnce $ _setGridItemPlace (toJsonString r) (toJsonString c) h

type StartArea
  = Tuple Int Int

type EndArea
  = Tuple Int Int

foreign import _setGridItemArea :: StartArea -> EndArea -> HtmlElement -> HtmlElement

setGridItemArea :: StartArea -> EndArea -> HtmlElement -> HtmlElement
setGridItemArea s e h = memoizeOnce $ _setGridItemArea s e h

--------------------------
foreign import _a :: String -> String -> HtmlElement

a :: String -> String -> HtmlElement
a = memoizeOnce $ _a

--------------------------
foreign import _button :: Task Unit -> String -> HtmlElement

button :: Task Unit -> String -> HtmlElement
button = memoizeOnce $ _button

--------------------------
foreign import _hr :: Unit -> HtmlElement

hr :: HtmlElement
hr = memoizeOnce $ _hr unit

--------------------------
foreign import _img :: String -> HtmlElement

img :: String -> HtmlElement
img = memoizeOnce $ _img

--------------------------
foreign import _ol :: Array String -> HtmlElement

ol :: Array String -> HtmlElement
ol = memoizeOnce $ _ol

--------------------------
foreign import _p :: String -> HtmlElement

p :: String -> HtmlElement
p = memoizeOnce $ _p

--------------------------
foreign import _sapn :: String -> HtmlElement

sapn :: String -> HtmlElement
sapn = memoizeOnce $ _sapn

--------------------------
foreign import _ul :: String -> HtmlElement

ul :: String -> HtmlElement
ul = memoizeOnce $ _ul

--------------------------
