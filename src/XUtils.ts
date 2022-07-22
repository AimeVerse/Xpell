


class XUtils {
    /**
     * create ignore list for parser to ignore spells words
     * @param list - list of reserved words (comma separated)
     */
    static createIgnoreList(list,reserved_words) {
        let words = list.split(",");
        let out_list = reserved_words;
        words.forEach(word => out_list[word] = "");
        return out_list;
    }


    static guid() {
        let chars = '0123456789abcdef'.split('');
        let uuid:string[] = [], rnd = Math.random, r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4'; // version 4
        for (let i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | rnd() * 16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }
        return uuid.join('');
    }

    static mergeDefaultsWithData(data, defaults) {
        if (data) {
            if (!data._id && !data.id) {
                defaults["_id"] = XUtils.guid();
            }
            //selective assign
            let dkey = Object.keys(defaults);
            dkey.forEach(key => {
                if (!data.hasOwnProperty(key)) {
                    data[key] = defaults[key];
                }
            })
        }
        else {
            data = defaults
        }
    }

    


    static checkOverlappingRects(rect1, rect2, inside = false) {
        if (!inside) {
            return !(rect1.top > rect2.bottom || rect1.right < rect2.left || rect1.bottom < rect2.top || rect1.left > rect2.right);
        }
        else {
            return (
                ((rect2.top <= rect1.top) && (rect1.top <= rect2.bottom)) &&
                ((rect2.top <= rect1.bottom) && (rect1.bottom <= rect2.bottom)) &&
                ((rect2.left <= rect1.left) && (rect1.left <= rect2.right)) &&
                ((rect2.left <= rect1.right) && (rect1.right <= rect2.right))
            );
        }
    }

    static deg2Rad(degrees) {
        const pi = Math.PI;
        return degrees * (pi / 180);
    }

    static encode(str) {
        return btoa(encodeURIComponent(str));
    }

    static decode( str ) {
        return decodeURIComponent(atob(str));
    }
    

}


export const SpellDeg = {
    "half" : Math.PI / 2
}


export default XUtils