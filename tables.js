let bellClose = false;
let envelopeClose = false;
let dropdownClose = false;
let dropdownClose2 = false;
let widthMax = false;
const arr = [
    {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        startDate: '2008/11/28',
        salary: '$162,700',
    },
    {
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: '47',
        startDate: '2009/10/09',
        salary: '$1,200,000',
    },
    {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        startDate: '2009/01/12',
        salary: '$86,000',
    },
    {
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: '41',
        startDate: '2012/10/13',
        salary: '$132,000',
    },
    {
        name: 'Brenden Wagner',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: '28',
        startDate: '2011/06/07',
        salary: '$206,850',
    },
    {
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        startDate: '2012/12/02',
        salary: '$372,000',
    },
    {
        name: 'Bruno Nash',
        position: 'Software Engineer',
        office: 'London',
        age: '38',
        startDate: '2011/05/03',
        salary: '$163,500',
    },
    {
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: '21',
        startDate: '2011/12/12',
        salary: '$106,450',
    },
    {
        name: 'Cara Stevens',
        position: 'Sales Assistant',
        office: 'New York',
        age: '46',
        startDate: '2011/12/06',
        salary: '$145,600',
    },
    {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        startDate: '2012/03/29',
        salary: '$433,060',
    },
    {
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: '36',
        startDate: '2008/10/16',
        salary: '$470,600',
    },
    {
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: '39',
        startDate: '2009/09/15',
        salary: '$205,500',
    },
    {
        name: 'Dai Rios',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        age: '35',
        startDate: '2012/09/26',
        salary: '$217,500',
    },
    {
        name: 'Donna Snider',
        position: 'Customer Support',
        office: 'New York',
        age: '27',
        startDate: '2011/01/25',
        salary: '$112,000',
    },
    {
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        age: '23',
        startDate: '2010/09/20',
        salary: '$85,600',
    },
    {
        name: 'Finn Camacho',
        position: 'Support Engineer',
        office: 'San Francisco',
        age: '47',
        startDate: '2009/07/07',
        salary: '$87,500',
    },
    {
        name: 'Fiona Green',
        position: 'Chief Operating Officer (COO)',
        office: 'San Francisco',
        age: '48',
        startDate: '2010/03/11',
        salary: '$850,000',
    },
    {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        startDate: '2011/07/25',
        salary: '$170,750',
    },
    {
        name: 'Gavin Cortez',
        position: 'Team Leader',
        office: 'San Francisco',
        age: '22',
        startDate: '2008/10/26',
        salary: '$235,500',
    },
    {
        name: 'Gavin Joyce',
        position: 'Developer',
        office: 'Edinburgh',
        age: '42',
        startDate: '2010/12/22',
        salary: '$92,575',
    },
    {
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: '59',
        startDate: '2009/04/10',
        salary: '$237,500',
    },
    {
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: '43',
        startDate: '2012/12/18',
        salary: '$313,500',
    },
    {
        name: 'Hermione Butler',
        position: 'Regional Director',
        office: 'London',
        age: '47',
        startDate: '2011/03/21',
        salary: '$356,250',
    },
    {
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        startDate: '2012/08/06',
        salary: '$137,500',
    },
    {
        name: 'Hope Fuentes',
        position: 'Secretary',
        office: 'San Francisco',
        age: '41',
        startDate: '2010/02/12',
        salary: '$109,850',
    },
]
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

    let tbody = document.getElementById('tbody');
    if (arr.length >= 10) {
        for (i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            for (j = 0; j < 6; j++) {
                let td = document.createElement('td');
                td.setAttribute('class', `td${j + 1}`);
                if (j == 0) {
                    td.innerText = arr[i].name;
                } else if (j == 1) {
                    td.innerText = arr[i].position;
                } else if (j == 2) {
                    td.innerText = arr[i].office;
                } else if (j == 3) {
                    td.innerText = arr[i].age;
                } else if (j == 4) {
                    td.innerText = arr[i].startDate;
                } else if (j == 5) {
                    td.innerText = arr[i].salary;
                }
                tr.append(td)
            }
            tbody.append(tr)
        }
    } else {
        for (i = 0; i < arr.length; i++) {
            let tr = document.createElement('tr');
            for (j = 0; j < 6; j++) {
                let td = document.createElement('td');
                td.setAttribute('class', `td${j + 1}`);
                if (j == 0) {
                    td.innerText = arr[i].name;
                } else if (j == 1) {
                    td.innerText = arr[i].position;
                } else if (j == 2) {
                    td.innerText = arr[i].office;
                } else if (j == 3) {
                    td.innerText = arr[i].age;
                } else if (j == 4) {
                    td.innerText = arr[i].startDate;
                } else if (j == 5) {
                    td.innerText = arr[i].salary;
                }
                tr.append(td)
            }
            tbody.append(tr)
        }
    }
}



function selecttt(selectObject) {
    var value = selectObject.value;
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    if (value == 25) {
        if (arr.length >= 25) {
            for (i = 0; i < 25; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        } else {
            for (i = 0; i < arr.length; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        }
    } else if (value == 10) {
        if (arr.length >= 10) {
            for (i = 0; i < 10; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        } else {
            for (i = 0; i < arr.length; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        }
    } else if (value == 50) {
        if (arr.length >= 50) {
            for (i = 0; i < 50; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        } else {
            for (i = 0; i < arr.length; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        }
    } else if (value == 100) {
        if (arr.length >= 100) {
            for (i = 0; i < 100; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        } else {
            for (i = 0; i < arr.length; i++) {
                let tr = document.createElement('tr');
                for (j = 0; j < 6; j++) {
                    let td = document.createElement('td');
                    td.setAttribute('class', `td${j + 1}`);
                    if (j == 0) {
                        td.innerText = arr[i].name;
                    } else if (j == 1) {
                        td.innerText = arr[i].position;
                    } else if (j == 2) {
                        td.innerText = arr[i].office;
                    } else if (j == 3) {
                        td.innerText = arr[i].age;
                    } else if (j == 4) {
                        td.innerText = arr[i].startDate;
                    } else if (j == 5) {
                        td.innerText = arr[i].salary;
                    }
                    tr.append(td)
                }
                tbody.append(tr)
            }
        }
    }
}


document.getElementById('customComponents').style.display = 'none';
document.getElementById('customUtilites').style.display = 'none';
document.getElementById('loginScreens').style.display = 'none';



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




function opendropdown() {
    let drop = document.getElementById('dropdownHeader');
    if (drop.style.display != 'block') {
        drop.style.display = 'block';
        let dropOpacity = setTimeout(() => {
            drop.style.opacity = 1;
        }, 1)
    }
}


function opendropdown2() {
    let drop = document.getElementById('dropdownHeader2');
    if (drop.style.display != 'block') {
        drop.style.display = 'block';
        let dropOpacity = setTimeout(() => {
            drop.style.opacity = 1;
        }, 1)
    }
}





function arrowLeft() {
    if (widthMax) {
        document.getElementById('sbAdmin').style.display = 'block'
        document.getElementById('header').style.width = '22%'
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
        widthMax = true;
        // document.getElementById('containerrr').style.width = '91.3'    
    }
}

