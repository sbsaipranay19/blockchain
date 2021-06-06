let tymSt = Date.now();
function createDiv() {
    var divTag = document.createElement("div");
    divTag.id = "div1";
    divTag.setAttribute("align", "center");
    divTag.style.margin = "0px auto";
    divTag.innerHTML = `<br><br><form id="form1" runat="server">
    <div class="container1 c" id="c1">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-50">
            <input type="text" id="block1" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-50">
            <input type="text" id="nonce1" name="lastname" >
          </div>
        </div>
        <div class="row">
                  <div class="col-25">
                    <label for="lname">Time Stamp</label>
                  </div>
                  <div class="col-50">
                    <input type="text" id="pre1" >
                  </div>
                </div>
                <div class="row" id="toF1">
                  <div class="col-25">
                    <label for="lname">To</label>
                  </div>
                  <div class="col-50">
                    <input type="text" id="to1" >
                  </div>
                </div>
                <div class="row" id="toV1">
                  <div class="col-25">
                    <label for="lname">To</label>
                  </div>
                  <div class="col-50">
                    <input type="text" id="toh1" >
                  </div>
                </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-50">
            <textarea id="data1" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-50">
              <input type="text" id="prev1" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-50">
              <input type="text" id="hash1" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction1(); generateHash1()"> 
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
    <div class="container1 c" id="c2">
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">Block</label>
          </div>
          <div class="col-50">
            <input type="text" id="block2" value="">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Nonce</label>
          </div>
          <div class="col-50">
            <input type="text" id="nonce2" name="lastname" >
          </div>
        </div>
        <div class="row">
                  <div class="col-25">
                    <label for="lname">Time Stamp</label>
                  </div>
                  <div class="col-50">
                    <input type="text" id="pre2" >
                  </div>
                </div>
                <div class="row" id="toF2">
                  <div class="col-25">
                    <label for="lname">To</label>
                  </div>
                  <div class="col-50">
                    <input type="text" id="to2" >
                  </div>
                </div>
                <div class="row" id="toV2">
                  <div class="col-25">
                    <label for="lname">To</label>
                  </div>
                  <div class="col-50">
                    <input type="text" id="toh2" >
                  </div>
                </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Data</label>
          </div>
          <div class="col-50">
            <textarea id="data2" name="subject" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
              <label for="lname">Prev</label>
            </div>
            <div class="col-50">
              <input type="text" id="prev2" name="lastname" >
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Hash</label>
            </div>
            <div class="col-50">
              <input type="text" id="hash2" name="lastname" >
            </div>
          </div>
          <div class="row">
            <input id="mine" type="button" value="mine" onclick="myFunction2(); generateHash2()"> 
          </div>
        </form>`;
    document.body.appendChild(divTag);
}
let i =1
let nonce = Math.floor(10000 + Math.random() * 90000);
let nonce1 = Math.floor(10000 + Math.random() * 90000);
let nonce2 = Math.floor(10000 + Math.random() * 90000);
function myFunction() {
    document.getElementById("block").value = 1;
    document.getElementById("pre").value = tymSt;     
    document.getElementById("nonce").value = nonce;
  }
  i=2;
function myFunction1() {
    document.getElementById("block1").value = i;
    document.getElementById("pre1").value = tymSt;
    document.getElementById("nonce1").value = nonce1;
    document.getElementById("c1").style.background = '#5b8a72';
  }
  function myFunction2() {
    document.getElementById("block2").value = i;
    document.getElementById("pre2").value = tymSt;
    document.getElementById("nonce2").value = nonce2;
    document.getElementById("c2").style.background = '#5b8a72';
  }
  
 function generateHash()
	{   
    const zeroPad = (num, places) => String(num).padStart(places, '0');
        document.getElementById("prev").value = zeroPad(0,63);
        let data = document.getElementById("data").value;
        let joint  = data+nonce+tymSt;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText = md.digest().toHex();  
        document.getElementById("hash").value = hashText;

        let t = document.getElementById("to").value;
        let sd = forge.md.sha256.create();  
          sd.start();  
          sd.update(t, "utf8");  
          let hText1 = sd.digest().toHex();
          document.getElementById("toV").style.visibility= 'visible';
          document.getElementById("toF").style.visibility= 'hidden';
          document.getElementById("toh").value = hText1;
    }
    function generateHash1()
	{   
        let data = document.getElementById("data").value;
        let joint  = data+nonce+tymSt;
	    let md = forge.md.sha256.create();  
        md.start();  
        md.update(joint, "utf8");  
        let hashText1 = md.digest().toHex();
        document.getElementById("prev1").value = hashText1;
        
        let data1 = document.getElementById("data1").value;
        let joint1  = hashText1+data1+nonce1+tymSt;
	    let md1 = forge.md.sha256.create();  
        md1.start();  
        md1.update(joint1, "utf8");  
        let hashText2 = md1.digest().toHex();  
        document.getElementById("hash1").value = hashText2;

        let t = document.getElementById("to1").value;
        let sd = forge.md.sha256.create();  
          sd.start();  
          sd.update(t, "utf8");  
          let hText1 = sd.digest().toHex();
          document.getElementById("toV1").style.visibility= 'visible';
          document.getElementById("toF1").style.visibility= 'hidden';
          document.getElementById("toh1").value = hText1;
    } 
    function generateHash2()
	{   
    let data = document.getElementById("data").value;
    let joint  = data+nonce+tymSt;
  let md = forge.md.sha256.create();  
    md.start();  
    md.update(joint, "utf8");  
    let hashText1 = md.digest().toHex();
    document.getElementById("prev2").value = hashText1;
    
    let data1 = document.getElementById("data1").value;
    let joint1  = hashText1+data1+nonce1+tymSt;
  let md1 = forge.md.sha256.create();  
    md1.start();  
    md1.update(joint1, "utf8");  
    let hashText2 = md1.digest().toHex();  
    document.getElementById("hash2").value = hashText2;

    let t = document.getElementById("to2").value;
    let sd = forge.md.sha256.create();  
      sd.start();  
      sd.update(t, "utf8");  
      let hText1 = sd.digest().toHex();
      document.getElementById("toV2").style.visibility= 'visible';
      document.getElementById("toF2").style.visibility= 'hidden';
      document.getElementById("toh2").value = hText1;
      
    } 
   