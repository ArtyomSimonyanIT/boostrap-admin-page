let widthMax = false;
let bellClose = false;
let envelopeClose = false;
document.getElementById('loginScreens').style.display = 'block';
document.getElementById('loginScreens').style.height = '20.4vw';
document.getElementById('loginScreens').style.paddingBottom = '1vw';
document.getElementById('customUtilites').style.display = 'none';
document.getElementById('customComponents').style.display = 'none';


window.onload = function () {
    document.body.addEventListener('click', () => {
        if (document.getElementById('bell').style.display == 'block') {
            if (bellClose) {
                let bellCloseST = setTimeout(() => {
                    document.getElementById('bell').style.display = 'none';
                    bellClose = false;
                    clearInterval(bellCloseST)
                }, 1)
            }
            bellClose = true;
        }
        if (document.getElementById('envelope').style.display == 'block') {
            if (envelopeClose) {
                let envelopeCloseST = setTimeout(() => {
                    document.getElementById('envelope').style.display = 'none';
                    envelopeClose = false;
                    clearInterval(envelopeCloseST)
                }, 1)
            }
            envelopeClose = true;
        }
    })
}



function openComponents() {
    if (!widthMax) {
        let comp = document.getElementById('customComponents');
        if (comp.style.display == 'none') {
            comp.style.display = "block";
            document.getElementById('openComponentsI').style.rotate = '90deg';
            comp.style.position = '';
            comp.style.transform = '';
            comp.style.height = '';
            comp.style.width = '';
            comp.style.opacity = 1;
            setTimeout(() => {
                document.getElementById('customUtilites').style.height = '0vw'
                document.getElementById('customUtilites').style.padding = '0vw'
                document.getElementById('loginScreens').style.height = '0vw'
                document.getElementById('loginScreens').style.padding = '0vw'
                document.getElementById('openUtilitiesI').style.rotate = '0deg';
                document.getElementById('openPagesI').style.rotate = '0deg';
                setTimeout(() => {
                    document.getElementById('customUtilites').style.display = 'none'
                    document.getElementById('loginScreens').style.display = 'none'
                }, 200)
                comp.style.height = '8.4vw';
                comp.style.paddingBottom = '1vw';
            }, 1)
        } else {
            document.getElementById('openComponentsI').style.rotate = '0deg'
            comp.style.height = '0vw';
            comp.style.paddingBottom = '0vw';
            setTimeout(() => {
                comp.style.display = "none";
            }, 200)
        }
    } else {
        let comp = document.getElementById('customComponents');
        if (comp.style.display == 'none') {
            comp.style.display = "block";
            document.getElementById('openComponentsI').style.rotate = '90deg';
            comp.style.height = '8.4vw';
            comp.style.width = '15vw';
            comp.style.paddingBottom = '1vw';
            comp.style.position = 'absolute';
            comp.style.transform = 'translate(42%, -33%)';
            setTimeout(() => {
                document.getElementById('customUtilites').style.height = '0vw'
                document.getElementById('customUtilites').style.padding = '0vw'
                document.getElementById('loginScreens').style.height = '0vw'
                document.getElementById('loginScreens').style.padding = '0vw'
                document.getElementById('openUtilitiesI').style.rotate = '0deg';
                document.getElementById('openPagesI').style.rotate = '0deg';
                setTimeout(() => {
                    document.getElementById('customUtilites').style.display = 'none'
                    document.getElementById('loginScreens').style.display = 'none'
                }, 200)
                comp.style.opacity = '1';
                comp.style.paddingBottom = '1vw'
            }, 1)
        } else {
            document.getElementById('openComponentsI').style.rotate = '0deg'
            comp.style.opacity = '0';
            comp.style.paddingBottom = '0vw';
            setTimeout(() => {
                comp.style.display = "none";
            }, 200)
        }
    }

}



function bell() {
    if (document.getElementById('envelope').style.display == 'block') {
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('bell').style.display = 'block';
        bellClose = false;
    } else if (document.getElementById('envelope').style.display = 'none') {
        document.getElementById('bell').style.display = 'block';
    }
};

function openEnv() {
    if (document.getElementById('bell').style.display == 'block') {
        document.getElementById('bell').style.display = 'none';
        document.getElementById('envelope').style.display = 'block';
        envelopeClose = false;
    } else if (document.getElementById('bell').style.display = 'none') {
        document.getElementById('envelope').style.display = 'block';
    }
};




function openUtilities() {
    if (!widthMax) {
        let comp = document.getElementById('customUtilites');
        if (comp.style.display == 'none') {
            comp.style.display = "block";
            document.getElementById('openUtilitiesI').style.rotate = '90deg';
            comp.style.position = '';
            comp.style.transform = '';
            comp.style.height = '';
            comp.style.width = '';
            setTimeout(() => {
                document.getElementById('customComponents').style.height = '0vw'
                document.getElementById('customComponents').style.padding = '0vw'
                document.getElementById('loginScreens').style.height = '0vw'
                document.getElementById('loginScreens').style.padding = '0vw'
                document.getElementById('openComponentsI').style.rotate = '0deg';
                document.getElementById('openPagesI').style.rotate = '0deg';
                setTimeout(() => {
                    document.getElementById('customComponents').style.display = 'none'
                    document.getElementById('loginScreens').style.display = 'none'
                }, 200)
                comp.style.height = '14.8vw';
                comp.style.paddingBottom = '1vw'
            }, 1)
        } else {
            document.getElementById('openUtilitiesI').style.rotate = '0deg';
            comp.style.height = '0vw';
            comp.style.paddingBottom = '0vw';
            setTimeout(() => {
                comp.style.display = "none";
            }, 200)
        }
    } else {
        let comp = document.getElementById('customUtilites');
        if (comp.style.display == 'none') {
            comp.style.display = "block";
            document.getElementById('openUtilitiesI').style.rotate = '90deg';
            comp.style.height = '14.8vw';
            comp.style.width = '15vw';
            comp.style.paddingBottom = '1vw';
            comp.style.position = 'absolute';
            comp.style.transform = 'translate(42%, -33%)';
            setTimeout(() => {
                document.getElementById('customComponents').style.height = '0vw'
                document.getElementById('customComponents').style.padding = '0vw'
                document.getElementById('loginScreens').style.height = '0vw'
                document.getElementById('loginScreens').style.padding = '0vw'
                document.getElementById('openComponentsI').style.rotate = '0deg';
                document.getElementById('openPagesI').style.rotate = '0deg';
                setTimeout(() => {
                    document.getElementById('customComponents').style.display = 'none';
                    document.getElementById('loginScreens').style.display = 'none';
                }, 200)
                comp.style.opacity = '1';
                comp.style.paddingBottom = '1vw';
            }, 1)
        } else {
            document.getElementById('openUtilitiesI').style.rotate = '0deg';
            comp.style.opacity = '0';
            comp.style.paddingBottom = '0vw';
            setTimeout(() => {
                comp.style.display = "none";
            }, 200)
        }
    }
}


function openLoginScreens() {
    if (!widthMax) {
        let comp = document.getElementById('loginScreens');
        if (comp.style.display == 'none') {
            document.getElementById('openPagesI').style.rotate = '90deg';
            comp.style.display = "block";
            comp.style.position = '';
            comp.style.transform = '';
            comp.style.height = '';
            comp.style.width = '';
            setTimeout(() => {
                document.getElementById('customComponents').style.height = '0vw'
                document.getElementById('customComponents').style.padding = '0vw'
                document.getElementById('customUtilites').style.height = '0vw'
                document.getElementById('customUtilites').style.padding = '0vw'
                document.getElementById('openComponentsI').style.rotate = '0deg';
                document.getElementById('openUtilitiesI').style.rotate = '0deg';
                setTimeout(() => {
                    document.getElementById('customComponents').style.display = 'none'
                    document.getElementById('customUtilites').style.display = 'none'
                }, 200)
                comp.style.height = '20.4vw';
                comp.style.paddingBottom = '1vw';
            }, 1)
        } else {
            document.getElementById('openPagesI').style.rotate = '0deg';
            comp.style.height = '0vw';
            comp.style.paddingBottom = '0vw';
            setTimeout(() => {
                comp.style.display = "none";
            }, 200)
        }
    } else {
        let comp = document.getElementById('loginScreens');
        if (comp.style.display == 'none') {
            document.getElementById('openPagesI').style.rotate = '90deg';
            comp.style.display = "block";
            comp.style.height = '20.4vw';
            comp.style.width = '15vw';
            comp.style.paddingBottom = '1vw';
            comp.style.position = 'absolute';
            comp.style.transform = 'translate(42%, -23%)';
            setTimeout(() => {
                document.getElementById('customComponents').style.height = '0vw'
                document.getElementById('customComponents').style.padding = '0vw'
                document.getElementById('customUtilites').style.height = '0vw'
                document.getElementById('customUtilites').style.padding = '0vw'
                document.getElementById('openComponentsI').style.rotate = '0deg';
                document.getElementById('openUtilitiesI').style.rotate = '0deg';
                setTimeout(() => {
                    document.getElementById('customComponents').style.display = 'none'
                    document.getElementById('customUtilites').style.display = 'none'
                }, 200)
                comp.style.opacity = '1';
            }, 1)
        } else {
            document.getElementById('openPagesI').style.rotate = '0deg';
            comp.style.opacity = '0';
            comp.style.paddingBottom = '0vw';
            setTimeout(() => {
                comp.style.display = "none";
            }, 200)
        }
    }
}


function arrowLeft() {
    if (widthMax) {
        document.getElementById('sbAdmin').style.display = 'block'
        document.getElementById('header').style.width = '20%'
        document.getElementById('arrowLeftRot').style.rotate = '0deg'
        let arrows = document.getElementsByClassName('openComponentsI');
        for (i = 0; i < arrows.length; i++) {
            arrows[i].style.display = 'block'
        }
        let buttons = document.getElementsByClassName('hButtons');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.textAlign = '';
            buttons[i].style.width = ''
            buttons[i].style.fontSize = '';
        }

        let buttons2 = document.getElementsByClassName('hButtonsF');
        for (let i = 0; i < buttons2.length; i++) {
            buttons2[i].style.display = '';
            buttons2[i].style.fontSize = '';
        }


        let br = document.getElementsByClassName('br');
        for (let i = 0; i < br.length; i++) {
            br[i].style.display = '';
        }

        let h6 = document.getElementsByClassName('h66');
        for (let i = 0; i < h6.length; i++) {
            h6[i].style.textAlign = '';
        }


        document.getElementsByClassName('fa-gear')[0].style.padding = '0';
        document.getElementsByClassName('fa-wrench')[0].style.padding = '0';
        document.getElementsByClassName('fa-folder')[0].style.padding = '0';
        document.getElementsByClassName('fa-chart-area')[0].style.padding = '0';
        document.getElementsByClassName('fa-table')[0].style.padding = '0';
        document.getElementsByClassName('fa-gauge-high')[0].style.padding = '0';
        document.getElementById('loginScreens').style.opacity = '1';
        document.getElementById('customUtilites').style.opacity = '1';
        document.getElementById('customComponents').style.opacity = '1';
        document.getElementById('loginScreens').style.display = 'none';
        document.getElementById('loginScreens').style.height = '0';
        document.getElementById('loginScreens').style.paddingBottom = '0vw';
        document.getElementById('customUtilites').style.display = 'none';
        document.getElementById('customUtilites').style.height = '0';
        document.getElementById('customUtilites').style.paddingBottom = '0vw';
        document.getElementById('customComponents').style.display = 'none';
        document.getElementById('customComponents').style.height = '0';
        document.getElementById('customComponents').style.paddingBottom = '0vw';
        widthMax = false;
    } else {
        document.getElementById('sbAdmin').style.display = 'none'
        document.getElementById('header').style.width = '8%'
        document.getElementById('arrowLeftRot').style.rotate = '180deg'
        let arrows = document.getElementsByClassName('openComponentsI');
        for (i = 0; i < arrows.length; i++) {
            arrows[i].style.display = 'none'
        }
        let buttons = document.getElementsByClassName('hButtons');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.textAlign = 'center';
            buttons[i].style.width = '%';
            buttons[i].style.fontSize = '0.8vw';
        }

        let buttons2 = document.getElementsByClassName('hButtonsF');
        for (let i = 0; i < buttons2.length; i++) {
            buttons2[i].style.display = 'block';
            buttons2[i].style.fontSize = '0.8vw';
        }


        let br = document.getElementsByClassName('br');
        for (let i = 0; i < br.length; i++) {
            br[i].style.display = 'block';
        }

        let h6 = document.getElementsByClassName('h66');
        for (let i = 0; i < h6.length; i++) {
            h6[i].style.textAlign = 'center';
        }


        document.getElementsByClassName('fa-gear')[0].style.padding = '0';
        document.getElementsByClassName('fa-wrench')[0].style.padding = '0';
        document.getElementsByClassName('fa-folder')[0].style.padding = '0';
        document.getElementsByClassName('fa-chart-area')[0].style.padding = '0';
        document.getElementsByClassName('fa-table')[0].style.padding = '0';
        document.getElementsByClassName('fa-gauge-high')[0].style.padding = '0';
        document.getElementById('loginScreens').style.opacity = '0';
        document.getElementById('customUtilites').style.opacity = '0';
        document.getElementById('customComponents').style.opacity = '0';
        document.getElementById('loginScreens').style.display = 'none';
        document.getElementById('loginScreens').style.height = '0';
        document.getElementById('loginScreens').style.paddingBottom = '0vw';
        document.getElementById('customUtilites').style.display = 'none';
        document.getElementById('customUtilites').style.height = '0';
        document.getElementById('customUtilites').style.paddingBottom = '0vw';
        document.getElementById('customComponents').style.display = 'none';
        document.getElementById('customComponents').style.height = '0';
        document.getElementById('customComponents').style.paddingBottom = '0vw';
        widthMax = true;
        // document.getElementById('containerrr').style.width = '91.3'    
    }
}

