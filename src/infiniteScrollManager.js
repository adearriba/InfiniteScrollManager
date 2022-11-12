export class InfiniteScrollManager {
    constructor(config) {
        const settings = config || {};
        const defaults = {
            container: '#scrollContainer',
            pagination: '#scrollPagination',
            threshold: 0
        };

        // Merge custom configs with defaults
        this.settings = Object.assign(defaults, settings);

        this.containerElement = document.querySelector(this.settings.container);
        this.paginationElement = document.querySelector(this.settings.pagination);
        this.initialize();
    }

    initialize() {
        if (!this.containerElement) { return; }

        this.intersectionObserver = new IntersectionObserver(this.onIntersection.bind(this), {
            threshold: this.settings.threshold,
        });

        this.intersectionObserver.observe(this.paginationElement);
    }

    destroy() {
        this.intersectionObserver.disconnect();
        this.paginationElement.innerHTML = '';
        document.dispatchEvent(new CustomEvent('infinitescroll:end'));
    }

    onIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.loadMore();
                // eslint-disable-next-line no-useless-return
                return;
            }
        });
    }

    loadMore() {
        console.log('Loading...');
        const nextPageLinkElement = this.paginationElement.querySelector('a');

        if (!nextPageLinkElement) {
            this.destroy();
        }

        const request = new XMLHttpRequest();
        request.open('GET', nextPageLinkElement.href);
        request.responseType = 'document';
        request.addEventListener('load', this.onHttpRequestLoad.bind(this));
        request.send();
    }

    onHttpRequestLoad(event) {
        const request = event.srcElement;

        if (!request.responseXML) { return; }
        if (!request.readyState === 4 || !request.status === 200) { return; }

        const newContainer = request.responseXML.querySelector(this.settings.container);
        const newPagination = request.responseXML.querySelector(this.settings.pagination);

        this.containerElement.insertAdjacentHTML('beforeend', newContainer.innerHTML);

        if (!newPagination) {
            this.destroy();
        } else {
            this.paginationElement.innerHTML = newPagination.innerHTML;

            document.dispatchEvent(new CustomEvent('infinitescroll:load', {
                detail: {
                    content: newContainer,
                },
            }));
        }
    }
}

export default InfiniteScrollManager;
