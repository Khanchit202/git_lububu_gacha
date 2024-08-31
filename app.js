let labubu_data = Array()
function set_data(){
labubu_data = [
    {
        id: 0,
        name: "Toffee",
        image: "https://global-static.popmart.com/globalAdmin/1720611794669____%E5%BD%A2%E8%B1%A12____.png",
        value: 1
    },
    {
        id: 1,
        name: "Green Grape",
        image: "https://global-static.popmart.com/globalAdmin/1720611785753____%E5%BD%A2%E8%B1%A16____.png",
        value: 1,
        status: "100%"
    },
    {
        id: 2,
        name: "Sea Salt Coconut",
        image: "https://global-static.popmart.com/globalAdmin/1720611777879____%E5%BD%A2%E8%B1%A11____.png",
        value: 1,
        status: "100%"
    },
    {
        id: 3,
        name: "Sesame Bean",
        image: "https://global-static.popmart.com/globalAdmin/1720611767394____%E5%BD%A2%E8%B1%A14____.png",
        value: 1,
        status: "100%"
    },
    {
        id: 4,
        name: "Soymile",
        image: "https://global-static.popmart.com/globalAdmin/1720611756611____%E5%BD%A2%E8%B1%A13____.png",
        value: 1,
        status: "100%"
    },
    {
        id: 5,
        name: "Lychee Berry",
        image: "https://global-static.popmart.com/globalAdmin/1720611748486____%E5%BD%A2%E8%B1%A15____.png",
        value: 1,
        status: "100%"
    }
];
document.getElementById("deteil").innerHTML = " ";
getdata()
}

set_data()

function getdata() {
    document.getElementById("getdata").innerHTML = "";
    labubu_data.forEach(item => {
        document.getElementById("getdata").innerHTML += 
        "<div class='col-md-4'>" +
                "<div class='card mb-4 text-center custom-card' style='width: 18rem;opacity:"+item.status+"; max-width: 12rem;'>" +
                    "<img src='" + item.image + "' class='card-img-top' style='height: 180px; object-fit: cover;' alt='" + item.name + "'>" +
                    "<div class='card-body' style='padding: 0.5rem;'>" +
                        "<h5 class='card-title'>" + item.name + "</h5>" +
                        "<p class='card-text' style='font-size: 12px;'>จำนวนที่เหลืออยู่ " + item.value + " ชิ้น</p>" +
                    "</div>" +
                "</div>" +
            "</div>";
    });
}

function getgacha(gachaId) {
    document.getElementById("modal").innerHTML =
    '<div class="modal fade" id="gachaData" tabindex="-1" aria-labelledby="gachaModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
            '<div class="modal-content text-center item-center">' +
                '<div class="modal-header text-center">' +
                    '<h5 class="modal-title " id="gachaModalLabel">ยินดีด้วย !</h5>' +
                    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<img src=" ' + labubu_data[gachaId]["image"] + ' " class="img-fluid" alt="Gacha Image">' +
                    '<h1 class="mt-3">คุณได้รับ '+ labubu_data[gachaId]["name"] +'</h1>' +
                '</div>' +
            '<div class="modal-footer">' +
                '<button type="button" class="btn btn-success" data-bs-dismiss="modal">ปิด</button>' +
            '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

    var MyGacha = new bootstrap.Modal(document.getElementById('gachaData'));
    MyGacha.show();

}

function resetArray(){
    document.getElementById("modal").innerHTML =
    '<div class="modal fade" id="resetArray" tabindex="-1" aria-labelledby="gachaModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
            '<div class="modal-content text-center item-center">' +
                '<div class="modal-body">' +
                    '<img src="https://s.isanook.com/ca/0/ud/284/1422659/20231221_190626_777132__1200x.jpg?ip/resize/w728/q80/jpg" class="img-fluid" alt="Gacha Image">' +
                    '<h1 class="mt-3">สุ่มครบจำนวนแล้วจ้า</h1>' +
                '</div>' +
            '<div class="modal-footer">' +
                '<button type="button" class="btn btn-success" onclick="set_data()"data-bs-dismiss="modal">เริ่มสุ่มรอบใหม่</button>' +
                '<button type="button" class="btn btn-success" data-bs-dismiss="modal">ปิด</button>' +
            '</div>' +
            '</div>' +
        '</div>' +
    '</div>';
    usedNumbers = [];
    var resetArray = new bootstrap.Modal(document.getElementById('resetArray'));
    resetArray.show();
    
}

let usedNumbers = [];
function getRandomNumber() {
    let totalValue = labubu_data.reduce((sum, item) => sum + item.value, 0);
    let randomNumber;
    if(totalValue > 0){
        console.log(totalValue)
        console.log(usedNumbers)
        do {
            randomNumber = Math.floor(Math.random() * labubu_data.length);
        } while (usedNumbers.includes(randomNumber));

        usedNumbers.push(randomNumber);
        
        labubu_data[randomNumber]["value"] = 0;
        labubu_data[randomNumber]["status"] = "50%";
        getgacha(randomNumber);
        let y = 7-totalValue;
        document.getElementById("deteil").innerHTML +=
        '<tr><th scope="row">'+ y +'</th>'+
        '<td>'+labubu_data[randomNumber]["name"]+'</td></tr>'
        getdata();
    }else{
        resetArray()
    }
}

getdata();