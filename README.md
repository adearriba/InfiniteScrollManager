# InfiniteScrollManager
> Ajax pagination plugin for Shopify themes inspired by Ajaxinate

## Manual installation


1. Add `.dist/infiniteScrollManager.min.js` to the assets folder of your shopify theme, or add it to your vendor files if you are using Slate or a similar method.

2. Add the `infiniteScrollManager.min.js` script src tag before the closing body tag, or defer its loading:

```html
<script src="{{ 'infinite-scroll-manager.js' | asset_url }}" defer="defer"></script>
```

3. Setup your collection template. For example having previous and next infinite scroll:
```html
<div id="CollectionProductGrid">
	{%- paginate collection.products by section.settings.products_per_page -%}

		{% if paginate.previous %}
		<div id="scrollPaginationPrevious" style="visibility:hidden;">
		<a href="{{ paginate.previous.url }}">Loading More</a>
		</div>
		{% endif %}

		<div id="scrollContainer">
			<ul id="main-collection-product-grid">
			{%- for product in collection.products -%}
				<li class="grid__item">
				{% render 'product-card', product: product %}
				</li>
			{%- endfor -%}
			</ul>
		</div>

		{% if paginate.next %}
		<div id="scrollPaginationNext" style="visibility:hidden;">
			<a href="{{ paginate.next.url }}">Loading More</a>
		</div>
		{% endif %}

	{%- endpaginate -%}
</div>
```

4. Initialize it in your script file, or inline:
```javascript
document.addEventListener('DOMContentLoaded', function () {
	const scrollConfig = {
		margin: 0.3,
		pageTitle: 'Página {pageNum}',
		debug: true,
	};

	window.infiniteScrollManager = new InfiniteScrollManager(scrollConfig);
});
```

5. Configure your settings as desired.

## Configuration Settings
All settings are optional. You aren't forced to pass a config object to the constructor. Nevertheless, you have multiple settings you can tweak.

| Param | Type | Description | Default |
| --- | --- | --- | --- |
| `container` | `string?` | CSS selector for the container where data will be displayed and added after loads. | `'#scrollContainer'` |
| `paginationPrevious` | `string?` | CSS selector for the pagination element with the previous page URL. | `'#scrollPaginationPrevious'` |
| `paginationNext` | `string?` | CSS selector for the pagination element with the next page URL. | `'#scrollPaginationNext'` |
| `threshold` | `number?` | From 0 to 1. A value of 0.0 means that even a single visible pixel counts as the target being visible. 1.0 means that the entire target element is visible. | `0` |
| `enableHtml5History` | `boolean?` | Push or not each page to the browser's history API. | `true` |
| `pageQueryParamName` | `string?` | Query parameter name used for specifying current page. | `'page'` |
| `margin` | `number?` | From 0 (0%) to 1 (100%) the margin used to identify intersections with pagination elements. | `0.3` |
| `debug` | `boolean?` | If true, it will print out each function call with the current page value. | `false` |
| `pageTitle` | `string?` | Title displayed above each page content. Use '{pageNum}' to insert the page number. | `'Page {pageNum}'` |

## Events
There are 2 events that will trigger while using `infiniteScrollManager`.
|Event|Description|
| ------------ | ------------ |
|infinitescroll:load | This event will trigger after every new pagination load. |
|infinitescroll:end | This event trigger by the pagination element that has no more pages left to paginate. |

You can add event listeners using normal JS or using the functions provided in the library:
```javascript
// Add an event lister to every page load
window.infiniteScrollManager.addLoadEventListener((e) => {
	console.log(e);
});

// Add an event lister when there are no more previous pages left to load.
window.infiniteScrollManager.addPreviousPageScrollEndEventListener((e) =>{
	console.log(e);
});

// Add an event lister when there are no more subsequent pages left to load.
window.infiniteScrollManager.addNextPageScrollEndEventListener((e) =>{
	console.log(e);
});
```
