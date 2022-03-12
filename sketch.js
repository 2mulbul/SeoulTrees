let Seoul;

let Dobong;
let Dongdaemun;
let Dongjak;
let Eunpyeong;
let Gangbuk;
let Gangdong;
let Gangnam;
let Gangseo;
let Geumcheon;
let Guro;
let Gwanak;
let Gwangjin;
let Jongno;
let Jung;
let Jungnang;
let Mapo;
let Nowon;
let Seocho;
let Seodaemun;
let Seongbuk;
let Seongdong;
let Songpa;
let Yangcheon;
let Yeongdeungpo;
let Yongsan;

let arr2006;
let arr2006Sort;
let obj = [];
let entries = [];
let sorted = [];
let bestTree_name = [];
let bestTree_count = [];
let year;
const high = 5;

let road;

let tree;
let treeArray = [];

let flowers;
let flowerArray = [];

let selectedDistrict;
let namingDistrict;

//const titleBar = document.querySelector(".titlebar");
const radioList = document.querySelectorAll(".radio");
let districtInfo = document.querySelector(".district-info");






//wrap은 크기조절 get은 색조정
function preload() {
  //treeData
  Seoul = loadTable('data/Seoul_2006_2019.csv', 'csv', 'header');
  Dobong = loadTable('data/Dobong_2006_2019.csv', 'csv', 'header');
  Dongdaemun = loadTable('data/Dongdaemun_2006_2019.csv', 'csv', 'header');
  Dongjak = loadTable('data/Dongjak_2006_2019.csv', 'csv', 'header');
  Eunpyeong = loadTable('data/Eunpyeong_2006_2019.csv', 'csv', 'header');
  Gangbuk = loadTable('data/Gangbuk_2006_2019.csv', 'csv', 'header');
  Gangdong = loadTable('data/Gangdong_2006_2019.csv', 'csv', 'header');
  Gangnam = loadTable('data/Gangnam_2006_2019.csv', 'csv', 'header');
  Gangseo = loadTable('data/Gangseo_2006_2019.csv', 'csv', 'header');
  Geumcheon = loadTable('data/Geumcheon_2006_2019.csv', 'csv', 'header');
  Guro = loadTable('data/Guro_2006_2019.csv', 'csv', 'header');
  Gwanak = loadTable('data/Gwanak_2006_2019.csv', 'csv', 'header');
  Gwangjin = loadTable('data/Gwangjin_2006_2019.csv', 'csv', 'header');
  Jongno = loadTable('data/Jongno_2006_2019.csv', 'csv', 'header');
  Jung = loadTable('data/Jung_2006_2019.csv', 'csv', 'header');
  Jungnang = loadTable('data/Jungnang_2006_2019.csv', 'csv', 'header');
  Mapo = loadTable('data/Mapo_2006_2019.csv', 'csv', 'header');
  Nowon = loadTable('data/Nowon_2006_2019.csv', 'csv', 'header');
  Seocho = loadTable('data/Seocho_2006_2019.csv', 'csv', 'header');
  Seodaemun = loadTable('data/Seodaemun_2006_2019.csv', 'csv', 'header');
  Seongbuk = loadTable('data/Seongbuk_2006_2019.csv', 'csv', 'header');
  Seongdong = loadTable('data/Seongdong_2006_2019.csv', 'csv', 'header');
  Songpa = loadTable('data/Songpa_2006_2019.csv', 'csv', 'header');
  Yangcheon = loadTable('data/Yangcheon_2006_2019.csv', 'csv', 'header');
  Yeongdeungpo = loadTable('data/Yeongdeungpo_2006_2019.csv', 'csv', 'header');
  Yongsan = loadTable('data/Yongsan_2006_2019.csv', 'csv', 'header');

  //roadData
  RoadData = loadTable('data/roadsGather_2006_2019.csv', 'csv', 'header');

}

function setup() {
  startTimer();
  createCanvas(windowWidth, windowHeight);
  //나무만 모아둔 표


  namingDistrict = "Yeongdeungpo";
  selectedDistrict = Yeongdeungpo;
  year = 0;
  //나무, 도로 생성(임시)
  road = new Roads();
  for (let i = 0; i < high; i++) {
    let posX = random(100, width - 100);
    let posY = random(100, height - 100);
    let deg = random(0, 360);
    treeArray.push(new Tree(posX, posY, deg));
    flowerArray.push(new Flower(posX, posY));
  }

  // selectedDistrict = selectedDistrict;
  // for (let i = 0; i < 4; i++) {
  //   selectedDistrict.removeColumn(0);
  // }
  // resetDistrict(selectedDistrict);
  resetYear(year, selectedDistrict, namingDistrict);
  
}

function mouseOver() {
  console.log("mouseOver");
}


//district-selectbox 지역선택
radioList.forEach(o => {
  o.addEventListener("change", () => {
    // console.log(o.querySelector("input[type=radio]").id);
    // selectedDistrict = Dobong;

    if (o.id == "Seoul") {
      selectedDistrict = Seoul;
    } else if (o.id == "Gangnam") {
      selectedDistrict = Gangnam;
    } else if (o.id == "Gangnam") {
      selectedDistrict = Gangdong;
    } else if (o.id == "Gangdong") {
      selectedDistrict = Gangbuk;
    } else if (o.id == "Gangbuk") {
      selectedDistrict = Gangseo;
    } else if (o.id == "Gangseo") {
      selectedDistrict = Gangnam;
    } else if (o.id == "Gangnam") {
      selectedDistrict = Gwanak;
    } else if (o.id == "Gwanak") {
      selectedDistrict = Gangnam;
    } else if (o.id == "Gwangjin") {
      selectedDistrict = Gwangjin;
    } else if (o.id == "Guro") {
      selectedDistrict = Guro;
    } else if (o.id == "Geumcheon") {
      selectedDistrict = Geumcheon;
    } else if (o.id == "Nowon") {
      selectedDistrict = Nowon;
    } else if (o.id == "Dobong") {
      selectedDistrict = Dobong;
    } else if (o.id == "Dongdaemun") {
      selectedDistrict = Dongdaemun;
    } else if (o.id == "Dongjak") {
      selectedDistrict = Dongjak;
    } else if (o.id == "Mapo") {
      selectedDistrict = Mapo;
    } else if (o.id == "Seodaemun") {
      selectedDistrict = Seodaemun;
    } else if (o.id == "Seocho") {
      selectedDistrict = Seocho;
    } else if (o.id == "Seongdong") {
      selectedDistrict = Seongdong;
    } else if (o.id == "Seongbuk") {
      selectedDistrict = Seongbuk;
    } else if (o.id == "Songpa") {
      selectedDistrict = Songpa;
    } else if (o.id == "Yangcheon") {
      selectedDistrict = Yangcheon;
    } else if (o.id == "Yeongdeungpo") {
      selectedDistrict = Yeongdeungpo;
    } else if (o.id == "Yongsan") {
      selectedDistrict = Yongsan;
    } else if (o.id == "Eunpyeong") {
      selectedDistrict = Eunpyeong;
    } else if (o.id == "Jongno") {
      selectedDistrict = Jongno;
    } else if (o.id == "Jung") {
      selectedDistrict = Jung;
    } else if (o.id == "Jungnang") {
      selectedDistrict = Jungnang;
    }


    console.log("radio changed");
    console.log(o);
    console.log(o.id);
    namingDistrict = o.id;
    const labelSelector = 'label[for=' + namingDistrict + ']';
    districtInfo.innerHTML = document.querySelector(labelSelector).innerHTML;
    // resetDistrict(selectedDistrict);
    resetYear(year,selectedDistrict,namingDistrict);
    sidebar.classList.toggle(spreadClass);
  })
})



function resetYear(_year,_selectedDistrict,_namingDistrict) {
  year = _year;
  selectedDistrict = _selectedDistrict;
  namingDistrict = _namingDistrict;

  road.init(year, namingDistrict);
  //가장 많은 수종이름과 수량
  for (let i = 0; i < selectedDistrict.getRowCount(); i++) {
    obj[i] = selectedDistrict.getRow(i).obj;
    entries[i] = Object.entries(obj[i]);
    sorted[i] = entries[i].sort((a, b) => b[1] - a[1]);
  }
  for (let j = 0; j < high; j++) {
    bestTree_name[j] = sorted[year][j][0];
    bestTree_count[j] = sorted[year][j][1];
  }
  //console.log(bestTree_name, bestTree_count);


//bestTree 5개에 포함되지 않는 경우 이미지 다시 숨기기
  for (let k = 0; k < selectedDistrict.getColumnCount(); k++) { 
    if (selectedDistrict.columns[k] !== bestTree_name[0]
      && selectedDistrict.columns[k] !== bestTree_name[1]
      && selectedDistrict.columns[k] !== bestTree_name[2]
      && selectedDistrict.columns[k] !== bestTree_name[3]
      && selectedDistrict.columns[k] !== bestTree_name[4]) {
      const treestr = '#tree' + (k+1) + '-container';
      const treeContent = select(treestr).elt;
      treeContent.classList.add("hidden");
    }
  }
  
  let cn = 0;
  for (let j = 0; j < high; j++) {
    //console.log(bestTree_name[j]);
    for (let k = 0; k < selectedDistrict.getColumnCount(); k++) {
      if (selectedDistrict.columns[k] == bestTree_name[j]) {
        // console.log(k + ":" + bestTree_name[j]);
        // for (cn = 0; cn < high; cn++) {
        //   treeArray[cn].init(year, k);
        // }
        if (cn == 0) {
          treeArray[0].init(year, k);
          flowerArray[0].init(year, k, 0);
        }
        else if (cn == 1) {
          treeArray[1].init(year, k);
          flowerArray[1].init(year, k, 1);
        }
        else if (cn == 2) {
          treeArray[2].init(year, k);
          flowerArray[2].init(year, k, 2);
        }
        else if (cn == 3) {
          treeArray[3].init(year, k);
          flowerArray[3].init(year, k, 3);
        }
        else if (cn == 4) {
          treeArray[4].init(year, k);
          flowerArray[4].init(year, k, 4);
        }
        cn++;
        break;
      }
    }
  }
  
}


const strum = 2.5;
const roadStroke = 3;
const roadThick = 8;
class Roads {
  constructor() {
    this.offset = 0;
  }
  init(year,namingDistrict) {
    this.year = year;
    this.namingDistrict = namingDistrict;
    this.weight = parseInt(RoadData.getString(this.year, this.namingDistrict));

  }
  shape() {
    beginShape();
    for(var x = 0; x < width-600; x++){
      //var angle = map(x, 0, width, 0, TWO_PI);
      var angle = this.offset + x * 0.023;
      // map x between 0 and width to 0 and Two Pi
      var y = map(sin(angle), -strum, strum, 0, height);
      vertex(x, y);
    }
    endShape();
  }
  draw() {
    translate(height-300, -width*0.25);
    rotate(PI / 4);
    
    noFill();
    stroke(0);
    strokeWeight(this.weight * roadThick);
    this.shape();
    stroke(255);
    strokeWeight(this.weight * roadThick-roadStroke);
    this.shape();
    // this.offset = myTime * 0.003;
    this.offset +=0.05;
  }
}

const controlSize = 0.25;
class Tree {
  constructor(x, y, deg) {
    this.x = x;
    this.y = y;
    this.vx = 0.5;
    this.vy = 0.5;
    this.deg = deg;
  }
  init(year, targetNumber) {
    this.targetNumber = targetNumber;
    this.year = year;
    // console.log(selectedDistrict.getRow(this.year).arr[this.targetNumber]);
    this.size = (selectedDistrict.getRow(this.year).arr[this.targetNumber]) * controlSize;
    let tt = targetNumber + 1;
    let treestr = '#tree' + tt + '-container';
    // console.log(treestr);
    this.treeWrap = select(treestr);
    this.treeContent = select(treestr).elt;
    //나타나기(수정필요)
    this.treeContent.classList.remove("hidden");
    //이름(수종)
    this.name = selectedDistrict.columns[this.targetNumber];
  }
  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.bounceWindow();

    // this.treeContent.setAttribute("transform", "rotate(45)");
    // this.treeContent.style.transform='rotate('+this.deg+'deg)';
    this.treeWrap.size(this.size,this.size);
    this.treeWrap.position(this.x, this.y);
    // this.treeWrap.elt.classList.remove("hidden");
    // getTree1.style('fill', 'teal');
  }
  bounceWindow() {
    if (this.x - this.size/2 < -300 || this.x + this.size/2> width+300) {
      this.vx *= -1;
    } else if (this.y - this.size/2 < 0 || this.y + this.size/2> height) {
      this.vy *= -1;
    }
  }
}

class Flower extends Tree {
  constructor(x,y) {
    super(x, y);
    this.x_F = this.x ;
    this.y_F = this.y ;
    this.a = 0;
  }
  init(year, targetNumber,i) {
    super.init(year, targetNumber);
    flowers = selectAll(".flower");
    this.flower = flowers[i];
    this.r = this.size*0.2;
    this.orbit = this.size*0.7;
    this.da = 2 / this.size;
  }
  draw() {
    super.draw();
    this.a += this.da;
    this.x_F = this.x + (this.orbit * Math.sin(this.a));
    this.y_F = this.y + (this.orbit * Math.cos(this.a));
    this.flower.size(this.r, this.r);
    this.flower.position(this.x_F, this.y_F);
    // stroke(0);
    // strokeWeight(1);
    // fill(0);
    // ellipse(this.x_F, this.y_F, this.r * 2);
  }
  
}

function draw() {
  if (running) {
    myTime += deltaTime;
  } else {}

  //r:8월/g:5월/b:1월에 high
  let r = sin(TWO_PI *((myTime - 4000) / 12000))*90+160;
  let g = sin(TWO_PI *((myTime - 500) / 12000))*90+160;
  let b = sin(TWO_PI *((myTime + 3000 ) / 12000))*90+160;
  background(r, g, b);

  // if (Math.floor(r) == 254) { console.log("r"+":"+yearCount +":"+ monthCount+":"+frameCount); }
  // if (Math.floor(g) == 249) { console.log("g"+":"+yearCount +":"+ monthCount+":"+frameCount); }
  // if (Math.floor(b) == 254) { console.log("b"+":"+yearCount +":"+ monthCount+":"+frameCount); }
  
  for (let i = 0; i < high; i++) {
    treeArray[i].draw();
    //flowerArray[i].draw();
  }
  road.draw();
  //for (let i = 0; i < high; i++) {
    
  //}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
