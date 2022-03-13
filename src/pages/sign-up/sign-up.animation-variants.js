export const svgVariant= {
    begin:{
        opacity:0.1

    },
    end:{
        transition:{
            delay:.5,
            duration:1.5,
            type:"tween"
        },
        opacity:1,

    }
}
export const pathVariantBlue= {
    begin:{
        pathLength:0.2,
        opacity:0.5,
        fill:"#eee",
        x:"200px"
    },
    end:{
        pathLength:1,
        transition:{
            delay:1.5,
            duration:1,
            type:"tween"
        },
        opacity:1,
        fill:"#36c5f0",
        x:0,

    }
}
export const pathVariantGreen= {
    begin:{
        pathLength:0.2,
        opacity:0.5,
        fill:"#eee",
        y:"200px"
    },
    end:{
        pathLength:1,
        transition:{
            delay:2,
            duration:1,
            type:"tween"
        },
        opacity:1,
        fill:"#2eb67d",
        y:0,

    }
}
export const pathVariantYellow= {
    begin:{
        pathLength:0.2,
        opacity:0.5,
        fill:"#eee",
        x:"-200px"
    },
    end:{
        pathLength:1,
        transition:{
            delay:2.5,
            duration:1,
            type:"tween"
        },
        opacity:1,
        fill:"#ecb22e",
        x:0,

    }
}
export const pathVariantRed= {
    begin:{
        pathLength:0.2,
        opacity:0.5,
        fill:"#eee",
        y:"-200px"
    },
    end:{
        pathLength:1,
        transition:{
            delay:3,
            duration:1,
            type:"tween"
        },
        opacity:1,
        fill:"#e01e5a",
        y:0,

    }
}
export const textVariant = {
    begin:{
        opacity:0.01,
        x:"-100vw"
    },
    end:{
        transition:{
            delay:2.5,
            type:"spring",
            stiffnes:980,
            
        },
        opacity:1,
        x:0,

    }
}
