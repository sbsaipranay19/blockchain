function createDiv() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block1" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce1" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data1" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev1" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash1" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction1(); generateHash1()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv1();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv1() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block2" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce2" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data2" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev2" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash2" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction2(); generateHash2()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv2();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv2() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block3" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce3" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data3" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev3" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash3" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction3(); generateHash3()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv3();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv3() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block4" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce4" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data4" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev4" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash4" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction4(); generateHash4()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv4();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv4() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block5" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce5" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data5" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev5" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash5" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction5(); generateHash5()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv5();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv5() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block6" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce6" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data6" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev6" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash6" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction6(); generateHash6()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv6();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv6() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block7" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce7" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data7" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev7" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash7" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction7();generateHash7()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv7();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv7() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block8" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce8" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data8" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev8" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash8" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction8();generateHash8()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv8();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv8() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block9" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce9" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data9" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev9" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash9" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction9(); generateHash9()"> 
          </div> <br> <br>
        <div class="row">
            <input id="btn1" type="button" value="Create" onclick="createDiv9();" />
        </div>
        </form>`;
    document.body.appendChild(divTag);
}
function createDiv9() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-75">
            <input type="text" id="block10" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-75">
            <input type="text" id="nonce10" name="lastname" >
          </div>
        </div>
        
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-75">
            <textarea id="data10" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-75">
              <input type="text" id="prev10" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-75">
              <input type="text" id="hash10" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction10();generateHash10()"> 
          </div> <br> <br>
        </form>`;
    document.body.appendChild(divTag);
}


let  a =1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10,k=11;
let nonce = Math.floor(10000 + Math.random() * 90000);
let nonce1 = Math.floor(10000 + Math.random() * 90000);
let nonce2 = Math.floor(10000 + Math.random() * 90000);
let nonce3 = Math.floor(10000 + Math.random() * 90000);
let nonce4 = Math.floor(10000 + Math.random() * 90000);
let nonce5 = Math.floor(10000 + Math.random() * 90000);
let nonce6 = Math.floor(10000 + Math.random() * 90000);
let nonce7 = Math.floor(10000 + Math.random() * 90000);
let nonce8 = Math.floor(10000 + Math.random() * 90000);
let nonce9 = Math.floor(10000 + Math.random() * 90000);
let nonce10 = Math.floor(10000 + Math.random() * 90000);
function myFunction() {
    document.getElementById("block").value = a;    
    document.getElementById("nonce").value = nonce;
  }
function myFunction1() {
    document.getElementById("block1").value = b;
    document.getElementById("nonce1").value = nonce1;
  }
  function myFunction2() {
    document.getElementById("block2").value = c;
    document.getElementById("nonce2").value = nonce2;
  }
  function myFunction3() {
    document.getElementById("block3").value = d;
    document.getElementById("nonce3").value = nonce3;
  }
  function myFunction4() {
    document.getElementById("block4").value = e;
    document.getElementById("nonce4").value = nonce4;
  }
  function myFunction5() {
    document.getElementById("block5").value = f;
    document.getElementById("nonce5").value = nonce5;
  }
  function myFunction6() {
    document.getElementById("block6").value = g;
    document.getElementById("nonce6").value = nonce6;
  }
  function myFunction7() {
    document.getElementById("block7").value = h;
    document.getElementById("nonce7").value = nonce7;
  }
  function myFunction8() {
    document.getElementById("block8").value = i;
    document.getElementById("nonce8").value = nonce8;
  }
  function myFunction9() {
    document.getElementById("block9").value = j;
    document.getElementById("nonce9").value = nonce9;
  }
  function myFunction10() {
    document.getElementById("block10").value = k;
    document.getElementById("nonce10").value = nonce10;
  }
  
 function generateHash()
	{           
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        document.getElementById("prev").value = zeroPad(0,63);
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();  
        document.getElementById("hash").value = hashText;
    }
    function generateHash1()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText1 = md.digest().toHex();
        document.getElementById("prev1").value = hashText1;
        
        let data1 = document.getElementById("data1").value;
        let joint1  = hashText1+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText2 = md1.digest().toHex();  
        document.getElementById("hash1").value = hashText2;
    } 
    function generateHash2()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();  
        document.getElementById("prev2").value = hashText1;
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();  
        document.getElementById("hash2").value = hashText2;
    } 
    function generateHash3()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();  
        document.getElementById("prev3").value = hashText2;

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        document.getElementById("hash3").value = hashText3;
    } 
    function generateHash4()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        document.getElementById("prev4").value = hashText3;

        let data4 = document.getElementById("data4").value;
        let joint4  = hashText3+data4+nonce4;
	    let md4 = forge.md.sha256.create();  
        md4.start();  
        md4.update(joint4, "utf8");  
        let hashText4 = md4.digest().toHex();  
        document.getElementById("hash4").value = hashText4;
    } 
    function generateHash5()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        
        let data4 = document.getElementById("data4").value;
        let joint4  = hashText3+data4+nonce4;
	    let md4 = forge.md.sha256.create();  
        md4.start();  
        md4.update(joint4, "utf8");  
        let hashText4 = md4.digest().toHex(); 
         document.getElementById("prev5").value = hashText4;

         let data5 = document.getElementById("data5").value;
        let joint5  = hashText4+data5+nonce5;
	    let md5 = forge.md.sha256.create();  
        md5.start();  
        md5.update(joint5, "utf8");  
        let hashText5 = md5.digest().toHex(); 
         document.getElementById("hash5").value = hashText5;
    } 
    function generateHash6()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        

        let data4 = document.getElementById("data4").value;
        let joint4  = hashText3+data4+nonce4;
	    let md4 = forge.md.sha256.create();  
        md4.start();  
        md4.update(joint4, "utf8");  
        let hashText4 = md4.digest().toHex(); 
         

         let data5 = document.getElementById("data5").value;
        let joint5  = hashText4+data5+nonce5;
	    let md5 = forge.md.sha256.create();  
        md5.start();  
        md5.update(joint5, "utf8");  
        let hashText5 = md5.digest().toHex(); 
        document.getElementById("prev6").value = hashText5;

        let data6 = document.getElementById("data6").value;
        let joint6  = hashText5+data6+nonce6;
	    let md6 = forge.md.sha256.create();  
        md6.start();  
        md6.update(joint6, "utf8");  
        let hashText6 = md6.digest().toHex(); 
        document.getElementById("hash6").value = hashText6;
    } 
    function generateHash7()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        

        let data4 = document.getElementById("data4").value;
        let joint4  = hashText3+data4+nonce4;
	    let md4 = forge.md.sha256.create();  
        md4.start();  
        md4.update(joint4, "utf8");  
        let hashText4 = md4.digest().toHex(); 
         

         let data5 = document.getElementById("data5").value;
        let joint5  = hashText4+data5+nonce5;
	    let md5 = forge.md.sha256.create();  
        md5.start();  
        md5.update(joint5, "utf8");  
        let hashText5 = md5.digest().toHex(); 
        

        let data6 = document.getElementById("data6").value;
        let joint6  = hashText5+data6+nonce6;
	    let md6 = forge.md.sha256.create();  
        md6.start();  
        md6.update(joint6, "utf8");  
        let hashText6 = md6.digest().toHex(); 
        document.getElementById("prev7").value = hashText6;

        let data7 = document.getElementById("data7").value;
        let joint7  = hashText6+data7+nonce7;
	    let md7 = forge.md.sha256.create();  
        md7.start();  
        md7.update(joint7, "utf8");  
        let hashText7 = md7.digest().toHex(); 
        document.getElementById("hash7").value = hashText7;
    } 
    function generateHash8()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        

        let data4 = document.getElementById("data4").value;
        let joint4  = hashText3+data4+nonce4;
	    let md4 = forge.md.sha256.create();  
        md4.start();  
        md4.update(joint4, "utf8");  
        let hashText4 = md4.digest().toHex(); 
         

         let data5 = document.getElementById("data5").value;
        let joint5  = hashText4+data5+nonce5;
	    let md5 = forge.md.sha256.create();  
        md5.start();  
        md5.update(joint5, "utf8");  
        let hashText5 = md5.digest().toHex(); 
        

        let data6 = document.getElementById("data6").value;
        let joint6  = hashText5+data6+nonce6;
	    let md6 = forge.md.sha256.create();  
        md6.start();  
        md6.update(joint6, "utf8");  
        let hashText6 = md6.digest().toHex(); 
        

        let data7 = document.getElementById("data7").value;
        let joint7  = hashText6+data7+nonce7;
	    let md7 = forge.md.sha256.create();  
        md7.start();  
        md7.update(joint7, "utf8");  
        let hashText7 = md7.digest().toHex(); 
        document.getElementById("prev8").value = hashText7;

        let data8 = document.getElementById("data8").value;
        let joint8  = hashText7+data8+nonce8;
	    let md8 = forge.md.sha256.create();  
        md8.start();  
        md8.update(joint8, "utf8");  
        let hashText8 = md8.digest().toHex(); 
        document.getElementById("hash8").value = hashText8;
    } 
    function generateHash9()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        

        let data4 = document.getElementById("data4").value;
        let joint4  = hashText3+data4+nonce4;
	    let md4 = forge.md.sha256.create();  
        md4.start();  
        md4.update(joint4, "utf8");  
        let hashText4 = md4.digest().toHex(); 
         

         let data5 = document.getElementById("data5").value;
        let joint5  = hashText4+data5+nonce5;
	    let md5 = forge.md.sha256.create();  
        md5.start();  
        md5.update(joint5, "utf8");  
        let hashText5 = md5.digest().toHex(); 
        

        let data6 = document.getElementById("data6").value;
        let joint6  = hashText5+data6+nonce6;
	    let md6 = forge.md.sha256.create();  
        md6.start();  
        md6.update(joint6, "utf8");  
        let hashText6 = md6.digest().toHex(); 
        

        let data7 = document.getElementById("data7").value;
        let joint7  = hashText6+data7+nonce7;
	    let md7 = forge.md.sha256.create();  
        md7.start();  
        md7.update(joint7, "utf8");  
        let hashText7 = md7.digest().toHex(); 

        let data8 = document.getElementById("data8").value;
        let joint8  = hashText7+data8+nonce8;
	    let md8 = forge.md.sha256.create();  
        md8.start();  
        md8.update(joint8, "utf8");  
        let hashText8 = md8.digest().toHex(); 
        document.getElementById("prev9").value = hashText8;

        let data9 = document.getElementById("data9").value;
        let joint9  = hashText8+data9+nonce9;
	    let md9 = forge.md.sha256.create();  
        md9.start();  
        md9.update(joint9, "utf8");  
        let hashText9 = md9.digest().toHex(); 
        document.getElementById("hash9").value = hashText9;
    } 
    function generateHash10()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();

        let data1 = document.getElementById("data1").value;
        let joint1  = hashText+data1+nonce1;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText1 = md1.digest().toHex();
        
        let data2 = document.getElementById("data2").value;
        let joint2  = hashText1+data2+nonce2;
	    let md2 = forge.md.sha256.create();  
        md2.start();  
        md2.update(joint2, "utf8");  
        let hashText2 = md2.digest().toHex();

        let data3 = document.getElementById("data3").value;
        let joint3  = hashText2+data3+nonce3;
	    let md3 = forge.md.sha256.create();  
        md3.start();  
        md3.update(joint3, "utf8");  
        let hashText3 = md3.digest().toHex();  
        

        let data4 = document.getElementById("data4").value;
        let joint4  = hashText3+data4+nonce4;
	    let md4 = forge.md.sha256.create();  
        md4.start();  
        md4.update(joint4, "utf8");  
        let hashText4 = md4.digest().toHex(); 
         

         let data5 = document.getElementById("data5").value;
        let joint5  = hashText4+data5+nonce5;
	    let md5 = forge.md.sha256.create();  
        md5.start();  
        md5.update(joint5, "utf8");  
        let hashText5 = md5.digest().toHex(); 
        

        let data6 = document.getElementById("data6").value;
        let joint6  = hashText5+data6+nonce6;
	    let md6 = forge.md.sha256.create();  
        md6.start();  
        md6.update(joint6, "utf8");  
        let hashText6 = md6.digest().toHex(); 
        

        let data7 = document.getElementById("data7").value;
        let joint7  = hashText6+data7+nonce7;
	    let md7 = forge.md.sha256.create();  
        md7.start();  
        md7.update(joint7, "utf8");  
        let hashText7 = md7.digest().toHex(); 

        let data8 = document.getElementById("data8").value;
        let joint8  = hashText7+data8+nonce8;
	    let md8 = forge.md.sha256.create();  
        md8.start();  
        md8.update(joint8, "utf8");  
        let hashText8 = md8.digest().toHex(); 

        let data9 = document.getElementById("data9").value;
        let joint9  = hashText8+data9+nonce9;
	    let md9 = forge.md.sha256.create();  
        md9.start();  
        md9.update(joint9, "utf8");  
        let hashText9 = md9.digest().toHex(); 
        document.getElementById("prev10").value = hashText9;

        let data10 = document.getElementById("data10").value;
        let joint10  = hashText9+data10+nonce10;
	    let md10 = forge.md.sha256.create();  
        md10.start();  
        md10.update(joint10, "utf8");  
        let hashText10 = md10.digest().toHex(); 
        document.getElementById("hash10").value = hashText10;
    } 