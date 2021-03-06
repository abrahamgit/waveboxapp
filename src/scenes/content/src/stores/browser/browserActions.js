import alt from '../alt'
import {
  WB_WINDOW_FIND_START,
  WB_WINDOW_FIND_NEXT,
  WB_WINDOW_ZOOM_IN,
  WB_WINDOW_ZOOM_OUT,
  WB_WINDOW_ZOOM_RESET
} from 'shared/ipcEvents'
const { ipcRenderer } = window.nativeRequire('electron')

class BrowserActions {
  /* **************************************************************************/
  // Lifecycle
  /* **************************************************************************/

  /**
  * Basically a no-op but ensures that the ipcRenderer events are bound
  */
  load () { return {} }

  /* **************************************************************************/
  // Display
  /* **************************************************************************/

  /**
  * Sets the current page title
  * @param title: the title to set
  */
  setPageTitle (title) { return { title: title } }

  /**
  * Sets the current page target url
  * @param url: the url
  */
  setTargetUrl (url) { return { url: url } }

  /**
  * Sets the current url of the page
  * @param url: the url
  */
  setCurrentUrl (url) { return { url: url } }

  /**
  * Indicates the page started loading
  */
  startLoading () { return {} }

  /**
  * Indicates the page stopped loading
  */
  stopLoading () { return {} }

  /**
  * Updates the navigation controls
  * @param canGoBack: true if the browser can go back
  * @param canGoForward: true if the browser can go forward
  */
  updateNavigationControls (canGoBack, canGoForward) {
    return { canGoBack: canGoBack, canGoForward: canGoForward }
  }

  /* **************************************************************************/
  // Search
  /* **************************************************************************/

  /**
  * Starts searching
  */
  startSearch () { return {} }

  /**
  * Toggles search on and off
  */
  toggleSearch () { return {} }

  /**
  * Stops searching
  */
  stopSearch () { return {} }

  /**
  * Sets the search string
  * @param str: the string to search for
  */
  setSearch (str) { return { str: str } }

  /**
  * Searches for the next occurance
  */
  searchNext () { return {} }

  /* **************************************************************************/
  // Zoom
  /* **************************************************************************/

  /**
  * Increases the zoom level
  */
  increaseZoom () { return {} }

  /**
  * Decreases the zoom level
  */
  decreaseZoom () { return {} }

  /**
  * Resets the zoom level
  */
  resetZoom () { return {} }
}

const actions = alt.createActions(BrowserActions)
ipcRenderer.on(WB_WINDOW_FIND_START, (evt) => actions.startSearch())
ipcRenderer.on(WB_WINDOW_FIND_NEXT, (evt) => actions.searchNext())
ipcRenderer.on(WB_WINDOW_ZOOM_IN, () => actions.increaseZoom())
ipcRenderer.on(WB_WINDOW_ZOOM_OUT, () => actions.decreaseZoom())
ipcRenderer.on(WB_WINDOW_ZOOM_RESET, () => actions.resetZoom())
export default actions
