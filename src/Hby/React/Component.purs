module Hby.React.Component where

import Prelude
import Data.Int (toNumber)
import Data.Number.Format (toString)
import Hby.MemoizeOne (memoizeOnce)
import Hby.React.Data (HtmlElement)

--------------------------
foreign import _testElement :: Unit -> HtmlElement

testElement :: HtmlElement
testElement = memoizeOnce $ _testElement unit

--------------------------
foreign import _text :: String -> HtmlElement

text :: String -> HtmlElement
text = memoizeOnce $ _text

--------------------------
foreign import data HtmlEBuilder :: Type

--------------------------
foreign import _htmlE :: String -> Array HtmlElement -> HtmlEBuilder

htmlE :: String -> Array HtmlElement -> HtmlEBuilder
htmlE = memoizeOnce $ _htmlE

--------------------------
foreign import _setStyle :: forall a. Record a -> HtmlEBuilder -> HtmlEBuilder

setStyle :: forall a. Record a -> HtmlEBuilder -> HtmlEBuilder
setStyle = memoizeOnce $ _setStyle

--------------------------
foreign import _setAttr :: forall a. Record a -> HtmlEBuilder -> HtmlEBuilder

setAttr :: forall a. Record a -> HtmlEBuilder -> HtmlEBuilder
setAttr = memoizeOnce $ _setAttr

--------------------------
foreign import _mkHtmlE :: HtmlEBuilder -> HtmlElement

mkHtmlE :: HtmlEBuilder -> HtmlElement
mkHtmlE = memoizeOnce $ _mkHtmlE

--------------------------
setGrid :: HtmlEBuilder -> HtmlEBuilder
setGrid = setStyle { display: "grid", overflow: "auto" }

--------------------------
data GridSize
  = GridSize_Px Number
  | GridSize_Scale Number
  | GridSize_Fr Int
  | GridSize_MinMax GridSize GridSize
  | GridSize_Auto
  | GridSize_Repeat Int GridSize
  | GridSize_Fill

gridSizeToStr :: GridSize -> String
gridSizeToStr g = case g of
  GridSize_Px n -> toString n <> "px"
  GridSize_Scale n -> toString n <> "%"
  GridSize_Fr n -> toString (toNumber n) <> "fr"
  GridSize_MinMax min max -> "minmax(" <> gridSizeToStr min <> ", " <> gridSizeToStr max <> ")"
  GridSize_Auto -> "auto"
  GridSize_Repeat n s -> "repeat(" <> toString (toNumber n) <> ", " <> gridSizeToStr s <> ")"
  GridSize_Fill -> "auto-fill"

gridSizeRow :: GridSize -> HtmlEBuilder -> HtmlEBuilder
gridSizeRow o = setStyle { gridTemplateRows: gridSizeToStr o }

gridSizeCol :: GridSize -> HtmlEBuilder -> HtmlEBuilder
gridSizeCol o = setStyle { gridTemplateColumns: gridSizeToStr o }

--------------------------
data GridGap
  = GridGap_Px Number

gridGapToStr :: GridGap -> String
gridGapToStr g = case g of
  GridGap_Px n -> toString n <> "px"

gridGapRow :: GridGap -> HtmlEBuilder -> HtmlEBuilder
gridGapRow o = setStyle { gridRowGap: gridGapToStr o }

gridGapCol :: GridGap -> HtmlEBuilder -> HtmlEBuilder
gridGapCol o = setStyle { gridColumnGap: gridGapToStr o }

--------------------------
data GridDirection
  = GridDir_Row
  | GridDir_Column

gridDirectionToStr :: GridDirection -> String
gridDirectionToStr g = case g of
  GridDir_Row -> "row"
  GridDir_Column -> "column"

gridDir :: GridDirection -> HtmlEBuilder -> HtmlEBuilder
gridDir o = setStyle { gridAutoFlow: gridDirectionToStr o }

--------------------------
data GridPlaceItem
  = GridPlace_Start
  | GridPlace_End
  | GridPlace_Center
  | GridPlace_Stretch
  | GridPlace_SpaceAround
  | GridPlace_SpaceBetween
  | GridPlace_SpaceEvenly

gridPlaceItemToStr :: GridPlaceItem -> String
gridPlaceItemToStr g = case g of
  GridPlace_Start -> "start"
  GridPlace_End -> "end"
  GridPlace_Center -> "center"
  GridPlace_Stretch -> "stretch"
  GridPlace_SpaceAround -> "space-around"
  GridPlace_SpaceBetween -> "space-between"
  GridPlace_SpaceEvenly -> "space-evenly"

gridPlaceRow :: GridPlaceItem -> HtmlEBuilder -> HtmlEBuilder
gridPlaceRow o = setStyle { justifyContent: gridPlaceItemToStr o }

gridPlaceCol :: GridPlaceItem -> HtmlEBuilder -> HtmlEBuilder
gridPlaceCol o = setStyle { alignContent: gridPlaceItemToStr o }

--------------------------
data GridItemPlaceItem
  = GridItemPlace_Start
  | GridItemPlace_End
  | GridItemPlace_Center
  | GridItemPlace_Stretch

gridItemPlaceItemToStr :: GridItemPlaceItem -> String
gridItemPlaceItemToStr g = case g of
  GridItemPlace_Start -> "start"
  GridItemPlace_End -> "end"
  GridItemPlace_Center -> "center"
  GridItemPlace_Stretch -> "stretch"

gridItemPlaceRow :: GridItemPlaceItem -> HtmlEBuilder -> HtmlEBuilder
gridItemPlaceRow o = setStyle { display: "grid", overflow: "auto", justifySelf: gridItemPlaceItemToStr o }

gridItemPlaceCol :: GridItemPlaceItem -> HtmlEBuilder -> HtmlEBuilder
gridItemPlaceCol o = setStyle { display: "grid", overflow: "auto", alignSelf: gridItemPlaceItemToStr o }

--------------------------
data GridItemArea
  = GridItemArea Int Int Int Int

gridItemAreaToStr :: GridItemArea -> String
gridItemAreaToStr g = case g of
  GridItemArea s0 s1 e0 e1 -> (t s1) <> " / " <> (t s0) <> " / " <> (t e1) <> " / " <> (t e0)
  where
  t :: Int -> String
  t a = toString $ toNumber $ a - 1

gridItemArea :: GridItemArea -> HtmlEBuilder -> HtmlEBuilder
gridItemArea area = setStyle { display: "grid", overflow: "auto", gridArea: gridItemAreaToStr area }

--------------------------
