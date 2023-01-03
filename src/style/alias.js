import { extend } from '../core';
import { styleAlias } from './util';
extend('openExtendStyle', {
    get() {
        console.error('You can\'t get the value of openExtendStyle, Please set a boolean value');
    },
    set(flog, next = null) {
        const nashiInstance = next();
        if (flog && this.isOpenExtendStyle) {
            nashiInstance.isOpenExtendStyle = true;
            return next();
        } if (flog && !this.isOpenExtendStyle) {
            nashiInstance.isOpenExtendStyle = true;
            for (const key in this.style) {
                if (Object.prototype.hasOwnProperty.call(this.style, key)) {
                    styleAlias(key);
                }
            }
        } else if (this.isOpenExtendStyle && !flog) {
            nashiInstance.isOpenExtendStyle = false;
            return next();
        } else {
            console.warn('Not Opening Extend Style');
            nashiInstance.isOpenExtendStyle = false;
            return next();
        }
    }
});

extend('setStyles', {
    get() {
        return this.setStyles || false;
    },
    set(styles) {
        for (const key in styles) {
            if (Object.prototype.hasOwnProperty.call(styles, key)) {
                this.style[key] = styles[key];
            }
        }
    }
});

extend('extendStyles', {
    get() {
        return this.extendStyle || false;
    },
    set(QueryInstance) {
        if (QueryInstance instanceof HTMLElement) {
            const styles = QueryInstance.style;
            this.classList = [...this.classList, ...QueryInstance.classList];
            const cssText = styles.cssText;
            this.style.cssText = cssText.concat(this.style.cssText);
        } else {
            const styles = QueryInstance.instance.style;
            this.classList = [...this.classList, ...QueryInstance.instance.classList];
            const cssText = styles.cssText;
            this.style.cssText = cssText.concat(this.style.cssText);
        }
    }
});
