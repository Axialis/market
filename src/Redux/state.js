const BUTTON_HANDLER = 'BUTTON-HANDLER'
const LOAD_LOGO = 'LOAD-LOGO'
const MAKE_OBJECT = 'MAKE-OBJECT'

let store = {
    _state: {
        color:
        {
            cup: "#618685",
            lid: "#ffcc5c"
        },
        colorsCups:
            [
                '#674d3c',
                '#3e4444',
                '#618685',
                '#ffcc5c',
                '#eaece5',
                '#d96459'

            ],
        image: {},
        logobase:
            [
                require(`../../src/assets/pic/1.svg`).default,
                require(`../../src/assets/pic/2.svg`).default,
                require(`../../src/assets/pic/3.svg`).default,
                require(`../../src/assets/pic/4.svg`).default,
                require(`../../src/assets/pic/5.svg`).default,
                require(`../../src/assets/pic/6.svg`).default,
                require(`../../src/assets/pic/7.svg`).default,
                require(`../../src/assets/pic/8.svg`).default,
                require(`../../src/assets/pic/9.svg`).default,
                require(`../../src/assets/pic/10.svg`).default,
                require(`../../src/assets/pic/11.svg`).default,
                require(`../../src/assets/pic/12.svg`).default,
                require(`../../src/assets/pic/13.svg`).default,
                require(`../../src/assets/pic/14.svg`).default,
                require(`../../src/assets/pic/15.svg`).default
            ]
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === BUTTON_HANDLER) {
            if (action.id === 2) {
                this._state.color.cup = action.color;
            }
            if (action.id === 1) {
                this._state.color.lid = action.color;
            }
        } else if (action.type === LOAD_LOGO) {
            cacheImage(this._state.logobase);
        } else if (action.type === MAKE_OBJECT) {
            for (let k = 0; k < 15; k++) {
                this._state.image[`img${k}`] = this._state.logobase[k];
            }
        } 
        else if (action.type === 'IMAGE') {
            return this._state.image[`img${action.key}`]
        } 
        else if (action.type === 'GET-LENGTH') {
            return this._state.logobase.length
        }
    }
}

const cacheImage = async (srcArray) =>
{
    const promises = await srcArray.map((src) => 
    {
        return new Promise((resolve, reject) =>
        {
            const img = new Image();
            img.src = src;
            img.onload = resolve();
            img.onerror = reject();
        })
    })
    await Promise.all(promises);
}

export const buttonHandler = (color, id) => {
    return { type: BUTTON_HANDLER, color: color, id: id }
}

export let render = (observer) => observer()

export default store;