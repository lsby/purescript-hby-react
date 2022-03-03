module Hby.React.Grid where

import Prelude
import Data.Int (toNumber)
import Data.Number.Format (toString)
import Data.String (joinWith)
import Hby.React.Component (HtmlEBuilder, setStyle)

data GridSize
  = GridSize_Px Number
  | GridSize_Scale Number
  | GridSize_Fr Int
  | GridSize_MinMax GridSize GridSize
  | GridSize_Auto
  | GridSize_Repeat Int GridSize
  | GridSize_Fill

_gridSizeToStr :: GridSize -> String
_gridSizeToStr g = case g of
  GridSize_Px n -> toString n <> "px"
  GridSize_Scale n -> toString n <> "%"
  GridSize_Fr n -> toString (toNumber n) <> "fr"
  GridSize_MinMax min max -> "minmax(" <> _gridSizeToStr min <> ", " <> _gridSizeToStr max <> ")"
  GridSize_Auto -> "auto"
  GridSize_Repeat n s -> "repeat(" <> toString (toNumber n) <> ", " <> _gridSizeToStr s <> ")"
  GridSize_Fill -> "auto-fill"

setGridSizeRow :: Array GridSize -> HtmlEBuilder -> HtmlEBuilder
setGridSizeRow o = setStyle { gridTemplateRows: joinWith " " $ map _gridSizeToStr o }

setGridSizeCol :: Array GridSize -> HtmlEBuilder -> HtmlEBuilder
setGridSizeCol o = setStyle { gridTemplateColumns: joinWith " " $ map _gridSizeToStr o }

--------------------------
data GridGap
  = GridGap_Px Number

_gridGapToStr :: GridGap -> String
_gridGapToStr g = case g of
  GridGap_Px n -> toString n <> "px"

setGridGapRow :: GridGap -> HtmlEBuilder -> HtmlEBuilder
setGridGapRow o = setStyle { gridRowGap: _gridGapToStr o }

setGridGapCol :: GridGap -> HtmlEBuilder -> HtmlEBuilder
setGridGapCol o = setStyle { gridColumnGap: _gridGapToStr o }

--------------------------
data GridDirection
  = GridDir_Row
  | GridDir_Column

_gridDirectionToStr :: GridDirection -> String
_gridDirectionToStr g = case g of
  GridDir_Row -> "row"
  GridDir_Column -> "column"

setGridDir :: GridDirection -> HtmlEBuilder -> HtmlEBuilder
setGridDir o = setStyle { gridAutoFlow: _gridDirectionToStr o }

--------------------------
data GridPlaceItem
  = GridPlace_Start
  | GridPlace_End
  | GridPlace_Center
  | GridPlace_Stretch
  | GridPlace_SpaceAround
  | GridPlace_SpaceBetween
  | GridPlace_SpaceEvenly

_gridPlaceItemToStr :: GridPlaceItem -> String
_gridPlaceItemToStr g = case g of
  GridPlace_Start -> "start"
  GridPlace_End -> "end"
  GridPlace_Center -> "center"
  GridPlace_Stretch -> "stretch"
  GridPlace_SpaceAround -> "space-around"
  GridPlace_SpaceBetween -> "space-between"
  GridPlace_SpaceEvenly -> "space-evenly"

setGridPlaceRow :: GridPlaceItem -> HtmlEBuilder -> HtmlEBuilder
setGridPlaceRow o = setStyle { justifyContent: _gridPlaceItemToStr o }

setGridPlaceCol :: GridPlaceItem -> HtmlEBuilder -> HtmlEBuilder
setGridPlaceCol o = setStyle { alignContent: _gridPlaceItemToStr o }

--------------------------
data GridItemPlaceItem
  = GridItemPlace_Start
  | GridItemPlace_End
  | GridItemPlace_Center
  | GridItemPlace_Stretch

_gridItemPlaceItemToStr :: GridItemPlaceItem -> String
_gridItemPlaceItemToStr g = case g of
  GridItemPlace_Start -> "start"
  GridItemPlace_End -> "end"
  GridItemPlace_Center -> "center"
  GridItemPlace_Stretch -> "stretch"

setGridItemPlaceRow :: GridItemPlaceItem -> HtmlEBuilder -> HtmlEBuilder
setGridItemPlaceRow o = setStyle { display: "grid", overflow: "auto", justifySelf: _gridItemPlaceItemToStr o }

setGridItemPlaceCol :: GridItemPlaceItem -> HtmlEBuilder -> HtmlEBuilder
setGridItemPlaceCol o = setStyle { display: "grid", overflow: "auto", alignSelf: _gridItemPlaceItemToStr o }

--------------------------
data GridItemArea
  = GridItemArea Int Int Int Int

_gridItemAreaToStr :: GridItemArea -> String
_gridItemAreaToStr g = case g of
  GridItemArea s0 s1 e0 e1 -> (t s1) <> " / " <> (t s0) <> " / " <> (t e1) <> " / " <> (t e0)
  where
  t :: Int -> String
  t a = toString $ toNumber $ a - 1

setGridItemArea :: GridItemArea -> HtmlEBuilder -> HtmlEBuilder
setGridItemArea area = setStyle { display: "grid", overflow: "auto", gridArea: _gridItemAreaToStr area }

--------------------------
