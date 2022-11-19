<a name="InfiniteScrollManager"></a>

## InfiniteScrollManager
**Kind**: global class  

* [InfiniteScrollManager](#InfiniteScrollManager)
    * [new InfiniteScrollManager([config])](#new_InfiniteScrollManager_new)
    * [.initialize()](#InfiniteScrollManager+initialize)
    * [.initializePageLoadObserver()](#InfiniteScrollManager+initializePageLoadObserver)
    * [.initializePageChangeObserver()](#InfiniteScrollManager+initializePageChangeObserver)
    * [.destroy(target)](#InfiniteScrollManager+destroy)
    * [.onPageChange(entries)](#InfiniteScrollManager+onPageChange)
    * [.onIntersection(entries)](#InfiniteScrollManager+onIntersection)
    * [.loadMore(loadSrc)](#InfiniteScrollManager+loadMore)
    * [.onHttpRequestLoadPrevious(request, response)](#InfiniteScrollManager+onHttpRequestLoadPrevious)
    * [.onHttpRequestLoadNext(request, response)](#InfiniteScrollManager+onHttpRequestLoadNext)
    * [.pushHtml5History()](#InfiniteScrollManager+pushHtml5History)
    * [.createPageDivision(page)](#InfiniteScrollManager+createPageDivision) ⇒ <code>HTMLElement</code>
    * [.triggerLoadEvent(newContainer)](#InfiniteScrollManager+triggerLoadEvent)
    * [.addLoadEventListener(listener)](#InfiniteScrollManager+addLoadEventListener)
    * [.addPreviousPageScrollEndEventListener(listener)](#InfiniteScrollManager+addPreviousPageScrollEndEventListener)
    * [.addNextPageScrollEndEventListener(listener)](#InfiniteScrollManager+addNextPageScrollEndEventListener)
    * [.debug(message)](#InfiniteScrollManager+debug)

<a name="new_InfiniteScrollManager_new"></a>

### new InfiniteScrollManager([config])
Creates a new Infinite scroll manager. Configuration options:

**Returns**: [<code>InfiniteScrollManager</code>](#InfiniteScrollManager) - InfiniteScrollManager object that manages infinite scrolling  

| Param | Type | Description |
| --- | --- | --- |
| [config] | <code>Configuration</code> | Optional configuration object |

<a name="InfiniteScrollManager+initialize"></a>

### infiniteScrollManager.initialize()
Initializes both IntersectionObservers: Pagination observer and Page observer.Pagination Observer: Observes both previous and next pagination elements to trigger the page load.Page Observer: Observes PageDivision elements to change current page and/or push history state

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  
<a name="InfiniteScrollManager+initializePageLoadObserver"></a>

### infiniteScrollManager.initializePageLoadObserver()
Initializes Pagination Observer: Observes both previous and next pagination elements to trigger the page load.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  
<a name="InfiniteScrollManager+initializePageChangeObserver"></a>

### infiniteScrollManager.initializePageChangeObserver()
Initializes PageChange Observer: Observes PageDivision elements to change current page and/or push history state

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  
<a name="InfiniteScrollManager+destroy"></a>

### infiniteScrollManager.destroy(target)
Dispatches 'infinitescroll:end' event over the pagination element and removes the innerHTML of that element.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>HTMLElement</code> | Pagination element that is no longer required because we reached the first or last page. |

<a name="InfiniteScrollManager+onPageChange"></a>

### infiniteScrollManager.onPageChange(entries)
Callback when a PageDivision element is intersected.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| entries | <code>Array.&lt;IntersectionObserverEntry&gt;</code> | Intersection observer entries |

<a name="InfiniteScrollManager+onIntersection"></a>

### infiniteScrollManager.onIntersection(entries)
Callback when a Pagination element is intersected.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| entries | <code>Array.&lt;IntersectionObserverEntry&gt;</code> | Intersection observer entries |

<a name="InfiniteScrollManager+loadMore"></a>

### infiniteScrollManager.loadMore(loadSrc)
Load a page based on the Pagination element information.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| loadSrc | <code>HTMLElement</code> | Pagination element that triggered the function |

<a name="InfiniteScrollManager+onHttpRequestLoadPrevious"></a>

### infiniteScrollManager.onHttpRequestLoadPrevious(request, response)
Load page at the beginning of the container and handle scrolling as best as possible.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>XMLHttpRequest</code> | Http request |
| response | <code>Document</code> | Response as an HTML document |

<a name="InfiniteScrollManager+onHttpRequestLoadNext"></a>

### infiniteScrollManager.onHttpRequestLoadNext(request, response)
Load page at the end of the container.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>XMLHttpRequest</code> | Http request |
| response | <code>Document</code> | Response as an HTML document |

<a name="InfiniteScrollManager+pushHtml5History"></a>

### infiniteScrollManager.pushHtml5History()
Push HTML5 History state for current page

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  
<a name="InfiniteScrollManager+createPageDivision"></a>

### infiniteScrollManager.createPageDivision(page) ⇒ <code>HTMLElement</code>
Creates a DIV element for tracking pages using the PageChange observer

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  
**Returns**: <code>HTMLElement</code> - DIV with page number  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>number</code> | Page number |

<a name="InfiniteScrollManager+triggerLoadEvent"></a>

### infiniteScrollManager.triggerLoadEvent(newContainer)
Trigger a 'infinitescroll:load' event when a new page is loaded.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| newContainer | <code>Element</code> | New HTML content added to the container |

<a name="InfiniteScrollManager+addLoadEventListener"></a>

### infiniteScrollManager.addLoadEventListener(listener)
Shotcut to add an event listener for listening when a page load.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | Event listener |

<a name="InfiniteScrollManager+addPreviousPageScrollEndEventListener"></a>

### infiniteScrollManager.addPreviousPageScrollEndEventListener(listener)
Shotcut to add an event listener for listening when there are no more previous pages to load.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | Event listener |

<a name="InfiniteScrollManager+addNextPageScrollEndEventListener"></a>

### infiniteScrollManager.addNextPageScrollEndEventListener(listener)
Shotcut to add an event listener for listening when there are no more subsequent pages to load.

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | Event listener |

<a name="InfiniteScrollManager+debug"></a>

### infiniteScrollManager.debug(message)
Print a message into the console if debug is true```if(this.settings.debug) {
            console.log(message);
        }```

**Kind**: instance method of [<code>InfiniteScrollManager</code>](#InfiniteScrollManager)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Message to show in the console |

