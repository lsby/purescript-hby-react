module Hby.React.Component where

import Prelude
import Hby.MemoizeOne (memoizeOnce)
import Hby.React.Data (HtmlElement)

--------------------------
foreign import data HtmlEBuilder :: Type

--------------------------
foreign import _testElement :: Unit -> HtmlEBuilder

testElement :: HtmlEBuilder
testElement = memoizeOnce $ _testElement unit

--------------------------
foreign import _text :: String -> HtmlEBuilder

text :: String -> HtmlEBuilder
text = memoizeOnce $ _text

--------------------------
foreign import _mkHtmlE :: HtmlEBuilder -> HtmlElement

mkHtmlE :: HtmlEBuilder -> HtmlElement
mkHtmlE = memoizeOnce $ _mkHtmlE

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
htmlB :: String -> Array HtmlEBuilder -> HtmlEBuilder
htmlB s arr = htmlE s $ map mkHtmlE arr

--------------------------
data HtmlM
  = Builder HtmlEBuilder
  | Element HtmlElement

htmlM :: String -> Array HtmlM -> HtmlEBuilder
htmlM s arr = htmlE s $ map tr arr
  where
  tr :: HtmlM -> HtmlElement
  tr m = case m of
    Builder b -> mkHtmlE b
    Element e -> e

--------------------------
