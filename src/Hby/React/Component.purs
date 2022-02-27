module Hby.React.Component where

import Prelude
import Data.Argonaut (class EncodeJson, Json)
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
  encodeJson o = case o of
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
  encodeJson o = case o of
    G_Px value -> A.encodeJson { constructor: "px", v: value }

toJsonString :: forall a. EncodeJson a => a -> String
toJsonString o = A.stringify $ A.encodeJson o

data GridDirection
  = D_RowPre
  | D_ColumnPre

instance encodeJson_GridDirection :: EncodeJson GridDirection where
  encodeJson o = case o of
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
  encodeJson o = case o of
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
  encodeJson o = case o of
    I_Start -> A.encodeJson "start"
    I_End -> A.encodeJson "end"
    I_Center -> A.encodeJson "center"
    I_Stretch -> A.encodeJson "stretch"

data HtmlSize
  = H_Px Number
  | H_Scale Number

instance encodeJson_HtmlSize :: EncodeJson HtmlSize where
  encodeJson o = case o of
    H_Px value -> A.encodeJson { constructor: "px", value }
    H_Scale value -> A.encodeJson { constructor: "scale", value }

foreign import data Grid :: Type

foreign import data GridBuilder :: Type

foreign import _mkGrid :: GridBuilder -> HtmlElement

mkGrid :: GridBuilder -> HtmlElement
mkGrid = memoizeOnce $ _mkGrid

foreign import _grid :: Array HtmlElement -> GridBuilder

grid :: Array HtmlElement -> GridBuilder
grid = memoizeOnce $ _grid

foreign import _setGridWidth :: String -> GridBuilder -> GridBuilder

setGridWidth :: HtmlSize -> GridBuilder -> GridBuilder
setGridWidth arg g = memoizeOnce $ _setGridWidth (toJsonString arg) g

foreign import _setGridHeight :: String -> GridBuilder -> GridBuilder

setGridHeight :: HtmlSize -> GridBuilder -> GridBuilder
setGridHeight arg g = memoizeOnce $ _setGridHeight (toJsonString arg) g

foreign import _setGridRowSize :: String -> GridBuilder -> GridBuilder

setGridRowSize :: Array GridSize -> GridBuilder -> GridBuilder
setGridRowSize arg g = memoizeOnce $ _setGridRowSize (toJsonString arg) g

foreign import _setGridColSize :: String -> GridBuilder -> GridBuilder

setGridColSize :: Array GridSize -> GridBuilder -> GridBuilder
setGridColSize arg g = memoizeOnce $ _setGridColSize (toJsonString arg) g

foreign import _setGridRowGap :: String -> GridBuilder -> GridBuilder

setGridRowGap :: GridGap -> GridBuilder -> GridBuilder
setGridRowGap arg g = memoizeOnce $ _setGridRowGap (toJsonString arg) g

foreign import _setGridColGap :: String -> GridBuilder -> GridBuilder

setGridColGap :: GridGap -> GridBuilder -> GridBuilder
setGridColGap arg g = memoizeOnce $ _setGridColGap (toJsonString arg) g

foreign import _setGridDirection :: String -> GridBuilder -> GridBuilder

setGridDirection :: GridDirection -> GridBuilder -> GridBuilder
setGridDirection arg g = memoizeOnce $ _setGridDirection (toJsonString arg) g

foreign import _setGridRowPlace :: String -> GridBuilder -> GridBuilder

setGridRowPlace :: GridPlaceItem -> GridBuilder -> GridBuilder
setGridRowPlace arg g = memoizeOnce $ _setGridRowPlace (toJsonString arg) g

foreign import _setGridColPlace :: String -> GridBuilder -> GridBuilder

setGridColPlace :: GridPlaceItem -> GridBuilder -> GridBuilder
setGridColPlace arg g = memoizeOnce $ _setGridColPlace (toJsonString arg) g

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

foreign import _setGridStyle :: Json -> GridBuilder -> GridBuilder

setGridStyle :: Json -> GridBuilder -> GridBuilder
setGridStyle = memoizeOnce $ _setGridStyle

--------------------------
foreign import _text :: String -> HtmlElement

text :: String -> HtmlElement
text = memoizeOnce $ _text

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
foreign import data HtmlEBuilder :: Type

foreign import _htmlE :: String -> Array HtmlElement -> HtmlEBuilder

htmlE :: String -> Array HtmlElement -> HtmlEBuilder
htmlE = memoizeOnce $ _htmlE

foreign import _mkHtmlE :: HtmlEBuilder -> HtmlElement

mkHtmlE :: HtmlEBuilder -> HtmlElement
mkHtmlE = memoizeOnce $ _mkHtmlE

foreign import _setHtmlEStyle :: Json -> HtmlEBuilder -> HtmlEBuilder

setHtmlEStyle :: Json -> HtmlEBuilder -> HtmlEBuilder
setHtmlEStyle = memoizeOnce $ _setHtmlEStyle

foreign import _setHtmlEAttr :: Json -> HtmlEBuilder -> HtmlEBuilder

setHtmlEAttr :: Json -> HtmlEBuilder -> HtmlEBuilder
setHtmlEAttr = memoizeOnce $ _setHtmlEAttr
